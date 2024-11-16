# routes/logs_chapa.py
from flask import Blueprint, request, jsonify
from extensions import mysql
import socket
import time

logs_chapa_bp = Blueprint('logs_chapa', __name__)

# Dirección IP y puerto del Arduino
ARDUINO_IP = "192.168.40.16"
ARDUINO_PORT = 80

# Función para registrar el estado en la base de datos
def registrar_log(mensaje):
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO logs_chapa (accion) VALUES (%s)", (mensaje,))
    mysql.connection.commit()
    cursor.close()

# Función para enviar el comando al Arduino
def enviar_comando_a_arduino(comando):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.connect((ARDUINO_IP, ARDUINO_PORT))
        sock.sendall(comando.encode() + b"\n")
        respuesta = sock.recv(1024).decode()
        return respuesta.strip()

# Endpoint para activar la chapa
@logs_chapa_bp.route('/api/activar_chapa', methods=['POST'])
def activar_chapa():
    accion = request.json.get('accion')
    if accion == 'abrir':
        # Envía el comando de apertura al Arduino
        respuesta = enviar_comando_a_arduino("abrir")
        if respuesta == "LAB ABIERTO":
            registrar_log("LAB ABIERTO")
            time.sleep(2)  # Espera 2 segundos antes de registrar el cierre
            registrar_log("LAB CERRADO")
            return jsonify({"status": "success", "accion": "LAB ABIERTO"}), 200
        else:
            return jsonify({"status": "error", "message": "Error al activar la chapa"}), 500
    else:
        return jsonify({"status": "error", "message": "Acción no válida"}), 400

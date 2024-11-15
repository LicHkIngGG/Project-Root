# routes/logs_chapa.py
from flask import Blueprint, request, jsonify
from extensions import mysql

logs_chapa_bp = Blueprint('logs_chapa', _name_)

# Función para registrar el estado en la base de datos
def registrar_log(mensaje):
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO logs_chapa (accion) VALUES (%s)", (mensaje,))
    mysql.connection.commit()
    cursor.close()

# Endpoint para activar y desactivar la chapa
@logs_chapa_bp.route('/api/activar_chapa', methods=['POST'])
def activar_chapa():
    print("Solicitud recibida en /api/activar_chapa")
    accion = request.json.get('accion')  # Asegúrate de que el frontend envíe el JSON con 'accion'
    if accion == 'abrir':
        registrar_log("LAB ABIERTO")
        return jsonify({"status": "success", "accion": "LAB ABIERTO"}), 200
    elif accion == 'cerrar':
        registrar_log("LAB CERRADO")
        return jsonify({"status": "success", "accion": "LAB CERRADO"}), 200
    else:
        return jsonify({"status": "error", "message": "Acción no válida"}), 400
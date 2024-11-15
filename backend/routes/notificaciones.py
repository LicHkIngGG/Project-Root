# routes/notificaciones.py
from flask import Blueprint, request, jsonify
from extensions import mysql

notificaciones_bp = Blueprint('notificaciones', _name_)

@notificaciones_bp.route('/api/notificaciones', methods=['POST'])
def crear_notificacion():
    data = request.json
    mensaje = data.get('mensaje')
    if not mensaje:
        return jsonify({"status": "error", "message": "Mensaje es requerido"}), 400
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO notificaciones (mensaje) VALUES (%s)", (mensaje,))
        mysql.connection.commit()
        cursor.close()
        return jsonify({"status": "success", "message": "Notificación creada"}), 201
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
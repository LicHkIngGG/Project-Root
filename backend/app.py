from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from extensions import mysql
from routes.logs_chapa import logs_chapa_bp
from routes.asistencia import asistencia_bp
from routes.notificaciones import notificaciones_bp


app = Flask(__name__)
CORS(app, origins="*")
socketio = SocketIO(app, cors_allowed_origins="*")

# Configuración de la base de datos MySQL
app.config.from_pyfile('config.py')

# Inicializar MySQL
mysql.init_app(app)

# Registrar Blueprints
app.register_blueprint(logs_chapa_bp)
app.register_blueprint(asistencia_bp)
app.register_blueprint(notificaciones_bp)

if __name__ == '__main__':
    app.debug = True
    socketio.run(app, host='0.0.0.0', port=5000)
# 📊 Panel de Finanzas Personales (Full-Stack MVP)

Un sistema web interactivo para la gestión y control de finanzas personales. Este proyecto implementa una arquitectura desacoplada con un **Backend API REST** robusto y un **Frontend dinámico** que consume los datos en tiempo real.

---
## 🚀 Demo en Vivo
Podés ver la aplicación funcionando en internet haciendo clic en el siguiente enlace:
🔗 **[Ver Panel de Finanzas en Vivo](https://panel-finanzas.onrender.com)**

## 🚀 Tecnologías Utilizadas

### Backend
* **Python 3.14+**
* **Django 6.0+** (Framework web principal)
* **Django REST Framework (DRF)** (Construcción de la API RESTful)
* **Django CORS Headers** (Gestión de permisos y políticas de origen cruzado)
* **SQLite** (Base de datos relacional ligera por defecto)

### Frontend
* **HTML5** (Estructura semántica)
* **CSS3** (Diseño moderno, responsivo y estilizado)
* **JavaScript Moderno (ES6+)** (Consumo asincrónico de API mediante `Fetch API` y manipulación dinámica del DOM)

---

## 🛠️ Características del Proyecto

* **Arquitectura Desacoplada:** El Backend funciona exclusivamente como una API de datos independientes que responde en formato `JSON`.
* **CRUD Completo de Transacciones:** Registro y listado automatizado de ingresos y gastos.
* **Cálculo en Tiempo Real:** El Frontend procesa dinámicamente el listado de movimientos para computar el saldo neto general del usuario y aplicar estilos condicionales (verde para saldos positivos, rojo para negativos).
* **Persistencia de Datos:** Todos los movimientos se almacenan de forma segura en la base de datos a través del ORM de Django.

---

## 🔧 Instalación y Configuración Local

### Prerrequisitos
Tener instalado Python en el sistema y clonar este repositorio.

### 1. Configuración del Backend (Django)

1. **Crear y activar el entorno virtual:**
   ```powershell
   python -m venv env
   .\env\Scripts\Activate.ps1

2. Instalar las dependencias necesarias:
PowerShell
pip install django djangorestframework django-cors-headers




3. Ejecutar las migraciones para armar la base de datos:
PowerShell
python manage.py makemigrations
python manage.py migrate




4. Levantar el servidor de desarrollo:
PowerShell
python manage.py runserver


La API estará disponible en: http://127.0.0.1:8000/api/transacciones/
2. Configuración del Frontend
Dirigirse a la carpeta frontend/.
Abrir el archivo index.html utilizando un servidor local (se recomienda la extensión Live Server de VS Code) para evitar restricciones de CORS del navegador.
El panel interactivo se abrirá típicamente en: http://127.0.0.1:5500/frontend/index.html

📂 Estructura del Repositorio
### 📂 Estructura del Repositorio

```text
panel-finanzas/
├── config/                 # Configuración global del proyecto Django
├── core/                   # Aplicación principal de la API (Modelos, Vistas, Serializadores)
├── frontend/               # Interfaz de usuario (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── app.js
├── env/                    # Entorno virtual de Python (ignorado en Git)
├── db.sqlite3              # Base de datos local (ignorado en Git)
├── manage.py               # Administrador de comandos de Django
└── README.md               # Documentación del proyecto




---



                                       Stefano Bourlot

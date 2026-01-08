# 🛒 API REST de Productos

API Backend construida con **Node.js**, **Express** y **PostgreSQL** (vía Sequelize). Permite la gestión completa de un inventario de productos (CRUD) con validaciones de datos.

## 🚀 Tecnologías

* **Node.js** (Entorno de ejecución)
* **Express** (Framework web)
* **PostgreSQL** (Base de datos relacional)
* **Sequelize** (ORM para manejo de BD)
* **Dotenv** (Variables de entorno)

## 📋 Requisitos Previos

* Node.js (v18 o superior)
* PostgreSQL instalado y corriendo
* pgAdmin (Opcional, para visualizar la BD)

## 🔧 Instalación y Configuración

1.  **Clonar el repositorio**
    ```bash
    git clone <URL_DE_TU_REPO>
    cd api-productos
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**
    Crea un archivo `.env` en la raíz basado en el ejemplo:
    ```bash
    cp .env.example .env
    ```
    
    Edita el archivo `.env` con tus credenciales de PostgreSQL:
    ```env
    PORT=3000
    DB_NAME=tienda_productos
    DB_USER=tu_usuario
    DB_PASS=tu_contraseña
    DB_HOST=localhost
    ```

4.  **Ejecutar el Servidor**
    * Modo Desarrollo (con reinicio automático):
        ```bash
        npm run dev
        ```
    * Modo Producción:
        ```bash
        npm start
        ```

    > Al iniciar, la aplicación sincronizará automáticamente las tablas en la base de datos.

## 📡 Documentación de la API

La API corre por defecto en `http://localhost:3000/api`.

### Productos

| Método | Endpoint | Descripción | Ejemplo de Body (JSON) |
| :--- | :--- | :--- | :--- |
| **GET** | `/products` | Obtener todos los productos | N/A |
| **GET** | `/products/:id` | Obtener un producto por ID | N/A |
| **POST** | `/products` | Crear un nuevo producto | `{ "name": "Mouse", "sku": "MOU-01", "price": 250, "stock": 10 }` |
| **PUT** | `/products/:id` | Actualizar un producto | `{ "price": 300, "stock": 5 }` |
| **DELETE**| `/products/:id` | Eliminar un producto | N/A |

## 🧪 Pruebas

Puedes probar los endpoints usando **Postman** o **Thunder Client** importando la colección de pruebas o accediendo a las rutas manualmente.

---
Desarrollado por Jan Cobian


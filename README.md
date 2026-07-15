# The Data Hub

The Data Hub is a robust RESTful API built with **Node.js** and **Express**. It provides a structured way to manage blog posts, featuring CRUD operations, custom logging middleware, and professional error handling.

## 🚀 Key Features

*   **CRUD Operations**: Full support for Creating, Reading, Updating, and Deleting blog posts.
*   **Logging Middleware**: Custom middleware that logs every incoming HTTP request (Method and URL) to the terminal.
*   **Robust Error Handling**: Returns appropriate HTTP status codes like `404 Not Found` for missing resources and `400 Bad Request` for invalid input.
*   **Data Validation**: Ensures that only valid blog entries (with title and content) are added.
*   **Auth Scaffolding**: Includes a mock login endpoint to simulate authentication.

## 🛠 Tech Stack

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Testing Tool**: Thunder Client / Postman

## ⚙️ Installation & Usage

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/vandanamahant/the-data-hub.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install express
    ```
3.  **Run the server**:
    ```bash
    node server.js
    ```
4.  **Access the API**:
    The server will run on `http://localhost:5000`.

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/blogs` | Fetch all available blog posts |
| GET | `/blogs/:id` | Fetch a specific blog by ID |
| POST | `/blogs` | Create a new blog post |
| PUT | `/blogs/:id` | Update an existing blog post |
| DELETE | `/blogs/:id` | Delete a blog post |
| POST | `/login` | Mock login authentication |
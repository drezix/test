
# SneakerAPI

SneakerAPI is a RESTful API designed for managing a sneaker store. It provides endpoints for user authentication, CRUD operations for sneakers, user management, and admin functionality. The API also includes Swagger documentation for easy access to the endpoints.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [Sneakers](#sneakers)
  - [Users](#users)
- [Swagger Documentation](#swagger-documentation)
- [License](#license)

## Installation

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- You will need to have MongoDB running, either locally or using a cloud provider like [MongoDB Atlas](https://www.mongodb.com/atlas/database).

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/drezix/test.git
    cd test
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following variables:
    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

4. Run the application:
    ```bash
    npm start
    ```

The server will start at `http://localhost:3000`.

## Usage

### Install Database

To install the initial database, use the following endpoint:
```http
POST /install
```

## Authentication

- To register a user:
    ```http
    POST /auth/register
    ```

- To login and retrieve a token:
    ```http
    POST /auth/login
    ```

Include the token in the Authorization header of any authenticated requests as a Bearer token.

## Endpoints

### Sneakers

- **GET /sneaker**: List all sneakers.
- **POST /sneaker**: Create a new sneaker (admin only).
- **PUT /sneaker/:id**: Update a sneaker by ID (admin only).
- **DELETE /sneaker/:id**: Delete a sneaker by ID (admin only).

### Users

- **GET /user**: List all users.
- **DELETE /user/:id**: Delete a user by ID (admin only).

## Swagger Documentation

You can access the full API documentation with Swagger at:

```
http://localhost:3000/api-docs
```

This provides detailed information about each endpoint, parameters, and responses.

## License

This project is licensed under the MIT License.

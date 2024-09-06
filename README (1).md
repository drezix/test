
# SneakerAPI

SneakerAPI é uma API RESTful projetada para gerenciar uma loja de sneakers. Ela fornece endpoints para autenticação de usuários, operações CRUD para sneaker, gerenciamento de usuários e funcionalidade administrativa. A API também inclui documentação Swagger para fácil acesso aos endpoints.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Autenticação](#autenticação)
- [Endpoints](#endpoints)
  - [Sneakers](#sneakers)
  - [Usuários](#users)
- [Documentação Swagger](#swagger)
- [Licença](#licença)

## Instalação

### Pré-requisitos

- Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
- Você precisará ter o MongoDB rodando, localmente ou usando um provedor de nuvem como o [MongoDB Atlas](https://www.mongodb.com/atlas/database).

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/drezix/test.git
    cd test
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute a aplicação:
    ```bash
    npm start
    ```

O servidor será iniciado em `http://localhost:3000`.

## Uso

### Instalar Banco de Dados

Para instalar o banco de dados inicial, use o seguinte endpoint:
```http
POST /install
```

## Autenticação

- Registrar usuário:
    ```http
    POST /auth/register
    ```

- Logar e receber um token:
    ```http
    POST /auth/login
    ```

Inclua o Token no header de Authorization de qualquer requisição que necessite um Bearer token. 

## Endpoints

### Sneakers

- **GET /sneaker**: Lista todos os sneaker.
- **POST /sneaker**: Cria um novo sneaker (admin).
- **PUT /sneaker/:id**: Atualiza o sneaker (admin).
- **DELETE /sneaker/:id**: Deleta o sneaker (admin).

### Users

- **PUT /user/:id**: Atualiza um usuário (admin).
- **DELETE /user/:id**: Deleta um usuário (admin).
- **GET /user**: Lista todos os usuários. (admin)
- **GET /user/:id**: Lista o usuário pelo ID. (admin)

## Swagger

Você pode acessar a documentação completa da API com o Swagger em:

```
http://localhost:3000/api-docs
```

This provides detailed information about each endpoint, parameters, and responses.

## Licensça

Este projeto é licenciado sob a Licença MIT.

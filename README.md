# E-Commerce Website

A full-stack e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication (Register/Login)
- Product catalog with categories
- Shopping cart functionality
- Secure checkout process
- User profile management
- Order history
- Admin dashboard (coming soon)

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account (for database)

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd ecommerce-web
```

### 2. Server Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

#### Server Dependencies
```bash
npm install express
npm install mongoose
npm install dotenv
npm install bcryptjs
npm install jsonwebtoken
npm install cors
npm install colors
npm install --save-dev nodemon
```

### 3. Client Setup
Navigate to the client directory and install dependencies:
```bash
cd ../client
npm install
```

#### Client Dependencies
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-router-dom
npm install @reduxjs/toolkit
npm install react-redux
npm install axios
```

## Environment Variables

### Server (.env)
Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

### Development Mode

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the client (in a new terminal):
```bash
cd client
npm start
```

The client will run on `http://localhost:3000` and the server on `http://localhost:5000`.

### Seeding the Database

To add sample products to the database:
```bash
cd server
npm run data:import
```

To remove all products:
```bash
npm run data:destroy
```

## API Endpoints

### Auth Routes
- POST `/api/users/register` - Register a new user
- POST `/api/users/login` - Login user
- GET `/api/users/profile` - Get user profile (Protected)
- PUT `/api/users/profile` - Update user profile (Protected)

### Product Routes
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create a product (Admin only)
- PUT `/api/products/:id` - Update a product (Admin only)
- DELETE `/api/products/:id` - Delete a product (Admin only)

### Order Routes
- POST `/api/orders` - Create new order (Protected)
- GET `/api/orders/myorders` - Get user orders (Protected)
- GET `/api/orders/:id` - Get order by ID (Protected)

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- Material-UI for styling
- React Router for navigation
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 
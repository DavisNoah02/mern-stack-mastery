# 1.Express Server Setup

## Overview
This project demonstrates a basic server setup using **Node.js**, **Express.js**, and **Nodemon**.

### What is Node.js?
- **Node.js** is a JavaScript runtime that allows you to run JavaScript code on the server side.
- It is used to build scalable, high-performance applications.

### What is Express.js?
- **Express.js** is a lightweight and flexible web framework for Node.js.
- It simplifies the process of building web servers and APIs.

### What is Nodemon?
- **Nodemon** is a development tool that automatically restarts your Node.js application when file changes are detected.
- It improves development efficiency by eliminating the need to manually restart the server.

---

## Installation and Setup

### Prerequisites
- Install [Node.js](https://nodejs.org/) (includes npm).

### Steps to Set Up the Project

1. **Initialize the Node.js Project**
   Run the following command to create a `package.json` file with default settings:
   ```bash
   npm init -y
   ```

2. **Install Express**
   Install the Express.js library:
   ```bash
   npm install express
   ```

3. **Install Nodemon**
   Install Nodemon as a development dependency:
   ```bash
   npm install --save-dev nodemon
   ```

4. **Create the Server File**
   Create a file named `server.js` and add the following code:
   ```javascript
   const express = require('express');

   // Create an app instance
   const app = express();

   // Define a route handler for the default home page
   app.get('/', (req, res) => {
       res.send('Hello, World!');
   });

   // Listen for requests
   app.listen(4000, () => {
       console.log("Server is listening on port 4000");
   });
   ```

5. **Run the Server**
   - Using Node.js:
     ```bash
     node server.js
     ```
   - Using Nodemon (recommended for development):
     ```bash
     npx nodemon server.js
     ```

6. **Access the Server**
   Open your browser and navigate to:
   ```
   http://localhost:4000
   ```
   You should see the message: `Hello, World!`.

---

## Scripts in `package.json`
To simplify running the server, add the following scripts to your `package.json` file:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Now you can:
- Start the server in production mode:
  ```bash
  npm start
  ```
- Start the server in development mode:
  ```bash
  npm run dev
  ```

---

## Summary
- **Node.js**: Runs JavaScript on the server.
- **Express.js**: Simplifies server and API creation.
- **Nodemon**: Automatically restarts the server during development.
<br/>
<br/>
<br/>

# 2.Using Environment Variables with dotenv

### What is dotenv?
- **dotenv** is a package that loads environment variables from a `.env` file into your Node.js application.

### Steps to Set Up dotenv

1. **Install dotenv**:
   ```bash
   npm install dotenv
   ```

2. **Create a `.env` File**:
   Add your environment variables to a `.env` file in the root of your project. For example:
   ```
   PORT=4000
   MESSAGE=Hello, World!
   ```

3. **Load dotenv in Your Code**:
   Add the following line at the top of your `server.js` file:
   ```javascript
   require('dotenv').config();
   ```

4. **Use the Variables**:
   Access the variables in your code using `process.env`. For example:
   ```javascript
   const port = process.env.PORT || 3000;
   const message = process.env.MESSAGE || 'Default Message';
   ```

5. **Run the Server**:
   Start the server as usual:
   ```bash
   node server.js
   ```
   or
   ```bash
   npx nodemon server.js
   ```

### Note:
- Do not commit your `.env` file to version control (e.g., GitHub). Add it to your `.gitignore` file:
   ```
   .env
   ```
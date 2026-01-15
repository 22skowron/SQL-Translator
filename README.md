# SQL Translator

A simple web application designed for the company management board to streamline the retrieval of key information from its internal database. The application showcases how natural language queries can be translated into SQL with a help of a LLM and executed against the relational database, allowing for intuitive information retrieval without requiring knowledge of SQL syntax. 


Currently, the application is implemented for the fictitious _Sakila LLC_ company, using the **[Sakila Database](https://dev.mysql.com/doc/sakila/en/sakila-introduction.html "Go to official Sakila db description page")** as a sample dataset.

# Interface

The app operates in a browser and has a simple interface which (after successful authorization) allows the user to enter the query in natural language and get an accurate answer from AI assistant based on the results retrieved from the database.

# About the Sakila Database

The **[Sakila Database](https://dev.mysql.com/doc/sakila/en/sakila-introduction.html "Go to official Sakila db description page")** is a multi-table, relational database originally developed by the MySQL team as a learning resource. It simulates a video rental store, containing tables for films, actors, staff, rentals, payments, customers, and others. Sakila database is commonly used to demonstrate SQL querying, complex joins, and database management techniques in educational environments.

### Local setup instructions:

1. Clone the repository:

   ```
   git clone https://github.com/22skowron/SQL-Translator.git
   ```

2. Frontend setup (terminal 1):

   ```
   cd ./client
   npm install
   ng serve
   ```

3. Backend setup (terminal 2):
   ```
   cd ./server
   npm install
   node ./index.js
   ```

Before running the project make sure that you have the `.env` file with the proper environment variable declarations inside your `/server` directory. You can look up which variables you need to declare in `env.example`.

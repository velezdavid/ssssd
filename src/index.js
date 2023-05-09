// src/index.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/books", bookRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;

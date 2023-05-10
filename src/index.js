// src/index.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const ControlIdiomaRoutes = require("./routes/controlIdiomaRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/control-idioma", ControlIdiomaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;

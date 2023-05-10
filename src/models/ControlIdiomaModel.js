const mongoose = require("mongoose");

// Definir esquema del modelo Aprendizaje
const controlIdiomaSchema = new mongoose.Schema({
  ID_estudiante: Number,
  ID_idioma: Number,
  porcentaje_lectura: String,
  porcetaje_escritura: String,
  porcetaje_escuchar_hablar: String,
});

const controlIdioma = mongoose.model("controlIdioma", controlIdiomaSchema);

module.exports = controlIdioma;

// src/db.js

const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://facci:facci@cluster0.kidus.mongodb.net/books";

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error(`Error conectando a MongoDB: ${err}`);
    } else {
      console.log("Conexión exitosa con MongoDB");
    }
  }
);

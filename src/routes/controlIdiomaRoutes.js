const express = require("express");
const controlIdiomaController = require("../controllers/controlIdiomaController");

const router = express.Router();

router.get("/", controlIdiomaController.getAll);

router.get("/:id", controlIdiomaController.getById);

router.post("/", controlIdiomaController.create);

router.put("/:id", controlIdiomaController.update);

router.delete("/:id", controlIdiomaController.delete);

module.exports = router;

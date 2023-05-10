const ControlIdioma = require("../models/ControlIdiomaModel");

exports.getAll = async (req, res) => {
  try {
    const controlIdioma = await ControlIdioma.find();
    res.json(controlIdioma);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const controlIdioma = await ControlIdioma.findById(req.params.id);
    if (controlIdioma) {
      res.json(controlIdioma);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.create = async (req, res) => {
  try {
    const controlIdioma = new ControlIdioma(req.body);
    await controlIdioma.save();
    res.status(201).json(controlIdioma);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const controlIdioma = await ControlIdioma.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (controlIdioma) {
      res.json(controlIdioma);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const controlIdioma = await ControlIdioma.findByIdAndDelete(req.params.id);
    if (controlIdioma) {
      res.json(controlIdioma);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

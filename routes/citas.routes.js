const express = require('express');
const router = express.Router();
const Cita = require('../models/Cita');

// Registrar una nueva cita médica
router.post('/', async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    await nuevaCita.save();
    res.status(201).json(nuevaCita);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las citas
router.get('/', async (req, res) => {
  try {
    const citas = await Cita.find();
    res.json(citas);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Obtener una cita por ID
router.get('/:id', async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id);
    if (!cita) return res.status(404).json({ message: 'Cita no encontrada' });
    res.json(cita);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Eliminar una cita por ID
router.delete('/:id', async (req, res) => {
  try {
    const citaEliminada = await Cita.findByIdAndDelete(req.params.id);
    if (!citaEliminada) {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }
    res.status(200).json({
      message: 'Cita eliminada exitosamente',
      eliminado: citaEliminada,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

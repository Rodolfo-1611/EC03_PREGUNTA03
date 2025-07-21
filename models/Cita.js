const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, 
  nombrePaciente: { type: String, required: true },
  dni: { type: String, required: true },
  especialidad: { type: String, required: true },
  medico: { type: String, required: true },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  motivo: { type: String },
  estado: {
    type: String,
    enum: ['Pendiente', 'Atendida', 'Cancelada'],
    default: 'Pendiente'
  }
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const citasRoutes = require('./routes/citas.routes'); 

dotenv.config();
const app = express();

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(" Conectado a la base de datos Mongo");
  })
  .catch((err) => {
    console.error(" Error al conectar a la base de datos Mongo", err);
  });


app.use('/api/citas', citasRoutes); 

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

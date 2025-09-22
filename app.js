const express = require(express);
const app = express();
const PORT = process.env.PORT  8080;

app.get(, (req, res) = {
  res.send(¡Hola Mundo desde GCP con CICD!  - Prueba de cambios);
});

app.listen(PORT, () = console.log(`Servidor corriendo en puerto ${PORT}`));

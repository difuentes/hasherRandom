const express = require('express');

//crear servidor 
const app = express();

//asignar puerto dispo si no encuentra por defecto 
const port = process.env.PORT || 4060;
//habilitar leer los valores del body
app.use(express.json());

//rutas de la app
app.use('/api/hash',require('./routes/hasher'));


//arrancar la app
app.listen(port,'0.0.0.0' ,()=>{
    console.log(`entra con el puerto ${port}`);
})
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db.js');
const router = require('./router.js');


//Middleware
app.use(express.json());
app.use(router);

console.log("Como no vaya, se lía")

//Connecting to the database 
db.then(()=>{
    //Starting Server
    app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));

const express = require('express');
const app = express();
const port = 3000;
const db = require("./db.js")


//Starting Server
db.then(()=>{

    app.listen(port, () => console.log(`Servidor levantado en http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));

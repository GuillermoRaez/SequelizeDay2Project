const router = require('express').Router();


//Verificar siempre que esta en comentario cuando el proyecto no esta completo.
const naveRouter = require('./routers/naveRouter');
const pasajerosRouter = require('./routers/pasajeroRouter');

router.use('/naves', naveRouter);
router.use('/pasajeros', pasajerosRouter);

module.exports = router;
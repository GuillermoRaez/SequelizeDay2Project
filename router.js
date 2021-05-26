const router = require('express').Router();


//Verificar siempre que esta en comentario cuando el proyecto no esta completo.
const naveRouter = require('./routers/naveRouter');
const pasajerosRouter = require('./routers/pasajeroRouter');
const loginRouter = require('./routers/loginRouter');

router.use('/naves', naveRouter);
router.use('/pasajeros', pasajerosRouter);
router.use('/login', loginRouter);

module.exports = router;
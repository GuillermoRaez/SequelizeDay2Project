const router = require('express').Router();
const pasajeroController = require('../controllers/pasajeroController');



//API CRUD PASAJERO

router.get('/', async (req,res) => {
    try{

        res.json(await pasajeroController.allPassengers());

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    };
});


router.get('/:id', async (req,res) => {
    try{
        const id = req.params.id;

        res.json(await pasajeroController.passengerId(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });

    };
});


router.post('/', async (req,res) => {
    try {
        const body = req.body;
        res.json(await pasajeroController.newPassenger(body));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.put('/', async (req,res) => {
    try{
        const cuerpoDeDatos = req.body;
        res.json(await pasajeroController.modifyPassenger(cuerpoDeDatos)); 
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

router.delete('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await pasajeroController.deletePassenger(id)); 
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


// router.update();

// router.delete();

module.exports = router;
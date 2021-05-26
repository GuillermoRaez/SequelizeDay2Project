const jwt = require('jsonwebtoken');
const secret = "Mucho Alien suleto por ahí";

const authenticate = (req, res, next) => {

    try {

        if(!req.headers.authorization){
            // return newError("No tienes autorización");
            return "no tenias token";

        }

        let token = req.headers.autorization.split(' ')[1];

        let auth = jwt.verify(token,secret);

        if(auth.pasajeroId != req.params.id){
            throw new Error("No tienes permiso para realizar esta acción");
        }

        return next();

    } catch (error) {
        res.status(500).json({
            message: error.message
        });

    }
}


module.exports = authenticate;
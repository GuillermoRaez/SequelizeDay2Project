const pasajeroController = require('./pasajeroController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Mucho Alien suelto por ahí";

class LoginController {
    async validate(nombreCheck, passwordCheck){

        let pasajero = await pasajeroController.namePassenger(nombreCheck);

        let password = pasajero.password;

        let verificar = await bcrypt.compare(passwordCheck,password);

        if(!verificar){
            return new Error("El password y el email no coinciden");
        }

        let payload = {
            pasajeroId: pasajero.id,
            createdAt: new Date,
        };

        return jwt.sign(payload,secret)
    } 
}

let loginController = new LoginController();
module.exports = loginController;
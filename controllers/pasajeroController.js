const { Pasajero } = require('../models');
const bcrypt = require('bcrypt');


class Viajero { 

    async allPassengers(){

        return Pasajero.findAll();

    }

    async namePassenger(nombre){
        return Pasajero.findOne({
            where: {nombre}
        })
    }

    async passengerId(id){

        return Pasajero.findByPk(id);
    }

    async newPassenger(body){

        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);

        body.password = passwordHashed;

        return Pasajero.create(body);

    }

    async modifyPassenger(cuerpoDeDatos){
        return Pasajero.update(
            //Datos que cambiamos..
            {apellido1: cuerpoDeDatos.apellido1, apellido2: cuerpoDeDatos.apellido2},
            //Donde...
            {where: {id: cuerpoDeDatos.id}}
        )
    }

    async deletePassenger(id){

        return Pasajero.destroy({where: {id: id}});
    }

}

let pasajeroController = new Viajero();
module.exports = pasajeroController;
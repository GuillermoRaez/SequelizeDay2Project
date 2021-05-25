const { Pasajero } = require('../models');


class Viajero { 

    async allPassengers(){

        return Pasajero.findAll();


    }

    async passengerID(id){

        return Pasajero.findByPk(id);
    }

    async newPassenger(body){

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
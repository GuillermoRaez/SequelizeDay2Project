const { Nave } = require('../models');


class Spaceship { 

    async allNaves(){

        return Nave.findAll();


    }

    async NaveId(id){

        return Nave.findByPk(id);
    }

    async newNave(body){

        return Nave.create(body);

    }

    async modifyNave(cuerpoDeDatos){
        return Nave.update(
            //Datos que cambiamos..
            {nombre: cuerpoDeDatos.nombre, tipo: cuerpoDeDatos.tipo},
            //Donde...
            {where: {id: cuerpoDeDatos.id}}
        )
    }

    async deleteNave(id){

        return Nave.destroy({where: {id: id}});
    }

}

let naveController = new Spaceship();

module.exports = naveController;
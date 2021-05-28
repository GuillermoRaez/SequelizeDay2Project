'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasajeroalien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pasajeroalien.init({
    pasajeroId: DataTypes.INTEGER,
    alienId: DataTypes.INTEGER,
    dialucha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pasajeroalien',
  });
  return Pasajeroalien;
};
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    nickName: { type: DataTypes.STRING, allowNull: true }
  };
  return sequelize.define('people', attributes, {
    timestamps: false
  });
}
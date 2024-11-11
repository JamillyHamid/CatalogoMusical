'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('Generos', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'Generos',
      timestamps: false,
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Generos');
  }
};

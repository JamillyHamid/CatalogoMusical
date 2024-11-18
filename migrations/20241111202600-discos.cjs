'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('Discos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anoLancamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capa: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }, {
      tableName: 'Discos',
      timestamps: false,
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Discos');
  }
};

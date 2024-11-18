'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('Artistas', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      generoMusical: {
        type: DataTypes.STRING, 
        allowNull: true,
      }, 
      discoFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Discos',
          key: 'id',
      },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    }, {
      tableName: 'Artistas',
      timestamps: false,
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Artistas');
  }
};

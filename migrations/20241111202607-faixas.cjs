'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable('Faixas', {
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
      duracao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      musica: {
        type: DataTypes.STRING, 
        allowNull: true,
      },
      discoFk: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Discos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    }, {
      tableName: 'Discos',
      timestamps: false,
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Faixas');
  }
};

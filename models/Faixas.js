import { DataTypes } from "sequelize";
import { sequelize } from "../dbconfig";

const Faixas = sequelize.define('Faixas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracao: {
    type: DataTypes.TIME, 
    allowNull: true,
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
  }
});

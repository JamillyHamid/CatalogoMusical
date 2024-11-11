import { DataTypes } from "sequelize";
import { sequelize } from "../dbconfig";

const Discos = sequelize.define('Discos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
  });
  
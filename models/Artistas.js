import { DataTypes } from "sequelize";
import { sequelize } from "../dbconfig";

const Artistas = sequelize.define('Artistas', {
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
    generoMusical: {
      type: DataTypes.STRING, 
      allowNull: true,
    }
  });
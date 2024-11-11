import { DataTypes } from "sequelize";
import { sequelize } from "../dbconfig";

const Generos = sequelize.define('Generos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    }
});
  
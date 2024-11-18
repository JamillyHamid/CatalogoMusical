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
});

const createArtistaTable = async () =>{
  try {
      await Artista.sync();
      console.log('Tabela Artista criada ou já existente no banco de dados!');
  } catch (err) {
      console.error('Erro ao sincronizar tabela para criação ou verificação da mesma:', err);
  }
};

const createArtista = async (nome, generoMusical) =>{
  try {
      await Artista.create({
          nome,
          generoMusical
      });
      console.log('Artista inserido com sucesso!');
  } catch (err) {
      console.error('Erro ao inserir candidato:', err);
  }
};
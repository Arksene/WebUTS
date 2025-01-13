import { Sequelize, STRING } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const nilaiMhs = db.define(
  "nilai",
  {
    NPM: DataTypes.STRING,
    Nama: DataTypes.STRING,
    IPK: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default nilaiMhs;

(async () => {
  await db.sync();
})();

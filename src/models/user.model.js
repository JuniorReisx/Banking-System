import { DataTypes } from "sequelize";
import { database } from "../database/db.js";

const User = database.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullName: { type: DataTypes.STRING, allowNull: false },
  CPF: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  bankBalance: { type: DataTypes.STRING, allowNull: false },
  dateOfBirth: { type: DataTypes.DATE, allowNull: false }
});

export { User };

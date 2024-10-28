import { Sequelize } from "sequelize";
import "dotenv/config";
import chalk from "chalk";

const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

const tryConnectSequelize = async () => {
  try {
    await database.authenticate();
    console.log(chalk.green("Connection successful"));

    await database.sync({ /*force: true,*/ logging: false });
    console.log(chalk.yellow("Database synced successfully"));
  } catch (error) {
    console.error(chalk.red("Connection error: ", error));
  }
};

export { tryConnectSequelize, database };

import { User } from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
import "dotenv/config";
import chalk from "chalk";

const SECRET_KEY = process.env.SECRET_KEY;

const signIn = async (req, res) => {
  const { CPF, password, amountToDeduct } = req.body;

  try {
    const user = await User.findOne({ where: { CPF } });

    if (!user) {
      return res.status(401).json({
        statusCode: 401,
        message: "User not found",
        data: { CPF },
      });
    }
    const validPassword = bcrypt.compareSync(password, user.password); 

    if (!validPassword) {
      return res.status(401).json({
        statusCode: 401,
        message: "Unauthorized",
      });
    }

    const currentBalance = parseFloat(user.bankBalance);
    if (currentBalance < amountToDeduct) {
      return res.status(400).json({
        statusCode: 400,
        message: "Insufficient balance for the transaction",
      });
    }

    user.bankBalance = (currentBalance - amountToDeduct).toString();
    await user.save();

    const token = jwt.sign({ CPF: user.CPF }, SECRET_KEY, { expiresIn: '1h' });

    return res.status(200).json({
      statusCode: 200,
      message: "Login successful and balance updated",
      data: {
        token,
        newBalance: user.bankBalance, 
      },
    });
  } catch (error) {
    console.error(chalk.red(error));
    return res.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
};

export default signIn;

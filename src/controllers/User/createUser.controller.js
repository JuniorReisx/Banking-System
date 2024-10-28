import { User } from "../../models/user.model.js";
import checkUserExists from "../../utils/checkUserExists.js";

const createUser = async (req, res) => {
  try {
    const { CPF } = req.body;

    const userExists = await checkUserExists(CPF);
    if (userExists) {
      return res.status(400).json({ message: 'User with this CPF already exists' });
    }

    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

export default createUser;

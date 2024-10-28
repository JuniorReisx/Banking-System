import { User } from '../models/user.model.js';

const checkUserExists = async (cpf) => {
  try {
    const user = await User.findOne({ where: { CPF: cpf } });
    return user !== null;
  } catch (error) {
    throw new Error('Error checking user existence');
  }
};

export default checkUserExists;

import { User } from "../models/user.model.js";

const checkEmailExists = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !!user; 
};

export default checkEmailExists;

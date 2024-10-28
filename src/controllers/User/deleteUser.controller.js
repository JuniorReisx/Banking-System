import { User } from "../../models/user.model.js";

const deleteUserByCPF = async (req, res) => {
  const { CPF } = req.params; 

  try {
    const user = await User.findOne({ where: { CPF } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();

    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Error deleting user' });
  }
};

export default deleteUserByCPF;

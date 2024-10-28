import { User } from "../../models/user.model.js";

const updateUserByCPF = async (req, res) => {
  const { CPF } = req.params;

  try {
    const user = await User.findOne({ where: { CPF } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.update(req.body);

    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Error updating user' });
  }
};

export default updateUserByCPF;

import { User } from "../../models/user.model.js";

const getUser = async (req, res) => {
    const { CPF } = req.params;

    try {
        const user = await User.findOne({ where: { CPF: CPF } });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ message: 'Error fetching user' });
    }
}

export default getUser;

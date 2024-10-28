import { User } from "../../models/user.model.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Error fetching users' });
    }
};

export default getAllUsers;

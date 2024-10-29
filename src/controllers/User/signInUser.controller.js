import { User } from "../../models/user.model.js";

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Email e senha são obrigatórios!" });
    }

    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) {
      return res.status(404).json({ Error: "user not found" });
    }else{
        res.status(200).json({ "Sucessy": user });
    }

  } catch (error) {
    return res.status(400).json({ errorMessage: error.message });
  }
};

export default signInUser;

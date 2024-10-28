import { Router } from "express";
import signIn from "../controllers/User/authUser.controller.js";
import getAllUsers from "../controllers/User/getAllUsers.controller.js";
import getUser from "../controllers/User/getUser.controller.js";
import createUser from "../controllers/User/createUser.controller.js";
import updateUserByCPF from "../controllers/User/updateUser.controller.js";
import deleteUserByCPF from "../controllers/User/deleteUser.controller.js";

const userRouter = Router();

userRouter.get("/users", getAllUsers); // Pega todos os usuários
userRouter.get("/users/:CPF", getUser); // Pega um usuário específico pelo CPFauthUser
userRouter.post("/users/login", signIn); // Fazer login
userRouter.post("/users", createUser); // Adiciona um novo usuário
userRouter.put("/users/:CPF", updateUserByCPF); // Atualiza um usuário pelo CPF
userRouter.delete("/users/:CPF", deleteUserByCPF); // Deleta um usuário pelo CPF

export { userRouter };

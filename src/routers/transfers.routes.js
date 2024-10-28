import { Router } from "express";

const transfersRouter = Router();

transfersRouter.get("/transfers"); //Pega todas as transferencias
transfersRouter.get("/transfers/:id"); //Pega um transferencia especifica
transfersRouter.post("/transfers"); //Realizar um transferencia

//para o usuario poder fazer uma transação ele precisa fazer o login ou
//para o usuario poder fazer uma transação ele precisa colocar a senha dele, CPF do destinatario e valor que ele quer tranferir

export { transfersRouter };

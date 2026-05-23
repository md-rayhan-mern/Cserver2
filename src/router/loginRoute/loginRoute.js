import express from "express"
import user from "../../model/user/user.js";
import { loginController } from "../../controllers/login/login.js";
const loginRouter = express.Router();

loginRouter.post("/login", loginController);

export default loginRouter
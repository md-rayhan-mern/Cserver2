import express from "express";
import { createUserController } from "../../controllers/user/userController.js";
const userRout = express.Router();

userRout.post("/", createUserController);

export default userRout;

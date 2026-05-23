import express from "express";
import { createUserController, getUserController, getUserIdController } from "../../controllers/user/userController.js";
const userRout = express.Router();

userRout.post("/user", createUserController);
userRout.get("/user", getUserController);
userRout.get("/user/:id", getUserIdController);

export default userRout;

import asyncRapper from "../../utils/asyncRapper/asyncRapper.js";
import apiResponse from "../../utils/responseTemplate/responseHandler.js";
import { newUserService } from "../../service/setUser/setUser.js";
import { getUserService, getUserById } from "../../service/getUser/getUser.js";

export const createUserController = asyncRapper(async (req, res, next) => {
  const Ubody = req.body;
  const newUser = await newUserService(Ubody);
  //reaponse area
  res.status(201).json(new apiResponse(201, "Created successfully", newUser));
});

export const getUserController = asyncRapper(async (req,res,next) => {
  const allUser = await getUserService();
  res.status(200).json(new apiResponse(200, "user found", allUser));
});

export const getUserIdController = asyncRapper(async (req, res,next) => {
  const id = req.params.id;
  const user = await getUserById(id);
  res.status(200).json(new apiResponse(200, "check", user));
  
})
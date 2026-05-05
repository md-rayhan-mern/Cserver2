import asyncRapper from "../../utils/asyncRapper/asyncRapper.js";
import apiResponse from "../../utils/responseTemplate/responseHandler.js";
import { newUserService } from "../../service/setUser/setUser.js";

export const createUserController = asyncRapper(async (req, res, next) => {
  const Ubody = req.body;
  const newUser = await newUserService(Ubody);
  //reaponse area
  res.status(201).json(new apiResponse(201, "Created successfully", newUser));
});

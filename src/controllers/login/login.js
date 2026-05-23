import apiResponse from "../../utils/responseTemplate/responseHandler.js";
import { login } from "../../service/getUser/getUser.js"; 
import asyncRapper from "../../utils/asyncRapper/asyncRapper.js";
import createToken from "../../utils/createToken/createToken.js";
import AppError from "../../utils/customError/customError.js";
import User from "../../model/user/user.js";

export const loginController = asyncRapper(async (req , res , next) => {
    const logUser = await login(req.body);
    if(!logUser) next(new AppError("email or password wrong", 404));
    const {accessToken, refreshToken} = createToken(logUser._id);
    await User.findByIdAndUpdate(logUser._id, {refreshToken: refreshToken}).select('-refreshToken');
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 
    })
    res.status(200).json(new apiResponse(200, "Login success", logUser, {accesstoken: accessToken}))
});
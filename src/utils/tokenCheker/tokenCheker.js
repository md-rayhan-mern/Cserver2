import asyncRapper from "../asyncRapper/asyncRapper.js"
import AppError from "../customError/customError.js";
import User from "../../model/user/user.js";
import jwt from "jsonwebtoken";
import apiResponse from "../responseTemplate/responseHandler.js";

const tokenCheck = asyncRapper(async(req , res , next) => {
    const cookies = req.cookies;
    console.log(cookies);
    
    if(!cookies?.refreshToken) next(new AppError(404, "refresh token not found"));

    const refreshToken = cookies.refreshToken;
    const foundUser = await User.findOne({refreshToken});
    if(!foundUser) next(new AppError(403, "Token is expored or wrong"));

    jwt.verify(refreshToken,  process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if(err || foundUser._id.toString() !== decoded.id){
            next (new AppError(403, "Token didnot match or changed"));
        }
        console.log(decoded.id);
      
        
        const accessToken = jwt.sign({id: decoded.id}, process.env.ACCESS_TOKEN_SECRET,  { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
        res.status(200).json(new apiResponse(200, "success token", {accessToken: accessToken}));
    })


});
export default tokenCheck;
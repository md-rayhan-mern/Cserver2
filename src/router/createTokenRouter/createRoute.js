import express from "express";
import accessTokenCreate from "../../utils/tokenCheker/tokenCheker.js"

const tokenRoute = express.Router();

tokenRoute.post("/token", accessTokenCreate);

export default tokenRoute;
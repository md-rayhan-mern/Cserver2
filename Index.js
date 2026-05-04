//Server runing and mounting application in this file
import express from "express";
import cors from "cors";

//express app start area
const app = express();
//express app start area
//cors policy include
cors()
//cors policy include

//server listen area
const serverListen = async () => {
  try {
    //server create
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Server is runing port : ${port}`);
    });
  } catch (error) {
    console.error(`Server starting problem : ${error.message}`);
    process.exit(1);
  }
};
serverListen();
//server listen area

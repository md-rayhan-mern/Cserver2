//Server runing and mounting application in this file
import express from "express";
import corsOrigin from "./src/utils/corsOrigin/corsOrigin.js";
import globalError from "./src/middleware/globalError/globalError.js";
import connectDB from "./src/config/database/database.js";

//express app start area
const app = express();
//express app start area
//cors policy include
app.use(corsOrigin);
//cors policy include
//Body parser area
app.use(
  express.json({
    limit: "10kb",
    strict: true,
    type: ["application/json", "text/plain"],
  }),
);
//Body parser area
//all routing

//all routing
//global error handler
app.use(globalError);
//global error handler
//server listen area
const serverListen = async () => {
  try {
    //Database connection
    await connectDB();
    //Database connection
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

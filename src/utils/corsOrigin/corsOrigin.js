import cors from "cors";

const allowedOrigin = ["http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigin.includes(origin)) {
      callback(null, true);
    } else {
      callback(
        new Error("CORS নীতি অনুযায়ী এই সাইট থেকে রিকোয়েস্ট অনুমোদিত নয়!"),
      );
    }
  },
  methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

export default cors(corsOptions);

import "express-async-errors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
connectDB();

app.use("/api/v1/auth", userRouter);
app.use("/api/v1/post", postRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Server Has Started Successfully" });
});

app.listen(port, () => {
  console.log(`Server Started at ${port}`.bgBlue);
});

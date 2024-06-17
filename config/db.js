import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected successfully ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Failed to Connect To Database ${error.message}`.bgRed.white);
  }
};

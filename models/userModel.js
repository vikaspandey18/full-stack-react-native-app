import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "please add name"], trim: true },
    email: {
      type: String,
      required: [true, "please add email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please add password"],
      trim: true,
      min: 6,
      max: 64,
    },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;

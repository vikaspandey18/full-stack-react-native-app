import { createtoken } from "../helpers/tokenHelper.js";
import User from "../models/userModel.js";

export const registerController = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(404).json({ msg: "User Already Exisit" });
  } else {
    const user = await User.create(req.body);
    if (!user) {
      return res.status(404).json({ msg: "Failed to Register" });
    }
    return res.status(201).json({ msg: "Register Successfully" });
  }
};

export const loginController = async (req, res) => {
  const user = await User.findOne(req.body, { password: 0 });
  console.log(user);
  if (user) {
    const token = createtoken({ _id: user._id });
    return res.status(200).json({ user, token });
  } else {
    return res.status(400).json({ msg: "failed to find user" });
  }
};

export const updateUserController = async (req, res) => {
  const { name, password, email } = req.body;
  const user = await User.findOne({ email });
  if (password && password.length < 6) {
    return res.status(400).json({ msg: "Password Should More Then 6 Digit" });
  }
  const updatedUser = await User.findOneAndUpdate(
    { email },
    {
      name: name || user.name,
      password: password || user.password,
    },
    { new: true }
  );
  updatedUser.password = undefined;
  return res
    .status(200)
    .json({ msg: "Profile Updated Please Login", updatedUser });
};

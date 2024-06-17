import express from "express";
import {
  loginController,
  registerController,
  updateUserController,
} from "../controllers/userController.js";
import { requiredSingIn } from "../helpers/tokenHelper.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.put("/update-user", requiredSingIn, updateUserController);

export default router;

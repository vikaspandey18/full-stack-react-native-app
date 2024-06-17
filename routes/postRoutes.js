import express from "express";
import { requiredSingIn } from "../helpers/tokenHelper.js";
import {
  createPostController,
  deletePostController,
  getAllPostController,
  getUserPostsController,
  updatePostController,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/create-post", requiredSingIn, createPostController);
router.get("/get-all-post", getAllPostController);
router.get("/get-user-post", requiredSingIn, getUserPostsController);
router.delete("/delete-post/:id", requiredSingIn, deletePostController);
router.put("/update-post/:id", requiredSingIn, updatePostController);

export default router;

import Post from "../models/postModel.js";

export const createPostController = async (req, res) => {
  req.body = { ...req.body, postedBy: req.auth._id };
  const post = await Post.create(req.body);
  if (post) {
    return res.status(201).json({ msg: "Post Created Successfully", post });
  } else {
    return res.status(400).json({ msg: "Failed to Create Post" });
  }
};

export const getAllPostController = async (req, res) => {
  const post = await Post.find()
    .populate("postedBy", "_id name")
    .sort({ createdAt: -1 });
  if (post) {
    return res.status(201).json({ msg: "All Post Data", post });
  } else {
    return res.status(400).json({ msg: "Failed to Get All Post" });
  }
};

export const getUserPostsController = async (req, res) => {
  const userPosts = await Post.find({ postedBy: req.auth._id });
  if (userPosts) {
    return res.status(201).json({ msg: "User Posts", userPosts });
  } else {
    return res.status(400).json({ msg: "No Post Found" });
  }
};

export const deletePostController = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete({ _id: id });
  if (post) {
    return res.status(200).json({ msg: "Deleted Successfully" });
  } else {
    return res.status(400).json({ msg: "Failed to Delete" });
  }
};

export const updatePostController = async (req, res) => {
  // const { title, description } = req.body;
  const post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  if (post) {
    return res.status(200).json({ msg: "Post Updated Successfully", post });
  } else {
    return res.status(400).json({ msg: "Failed to Update Post" });
  }
};

import express from "express";

import {
  addPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../controllers/post-controllers.js";

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
import { createRouter } from "h3";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.ts";
const postRouter = createRouter();

postRouter.get("/", getPosts)
  .get("/:id", getPost)
  .post("/", createPost)
  .put("/:id", updatePost)
  .delete("/:id", deletePost);

export { postRouter };
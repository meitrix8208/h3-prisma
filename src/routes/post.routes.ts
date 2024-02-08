import { createRouter } from "h3";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.ts";
const postRouter = createRouter();

postRouter.get("/posts/get", getPosts)
  .get("/posts/:id", getPost)
  .post("/posts/post", createPost)
  .put("/posts/:id", updatePost)
  .delete("/posts/:id", deletePost);

export { postRouter };
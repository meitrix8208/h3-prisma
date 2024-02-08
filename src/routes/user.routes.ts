import { createRouter } from "h3";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.ts";
const userRouter = createRouter();

userRouter.get("/users/get", getUsers)
  .get("/users/:id", getUser)
  .post("/users/post", createUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

export { userRouter };

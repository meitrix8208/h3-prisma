import { createRouter } from "h3";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
const userRouter = createRouter();

userRouter.get("/", getUsers)
  .get("/:id", getUser)
  .post("/", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

export { userRouter };

import { createRouter, eventHandler, useBase } from "h3";
import { userRouter } from "./user.routes";
import { postRouter } from "./post.routes";
import { profileRouter } from "./profile.routes";

const GlobalRouter = createRouter().get("/ls", eventHandler(() => {
  return { message: "Welcome to the API" };
}));

GlobalRouter.use("/users/*", useBase("/users", userRouter.handler));
GlobalRouter.use("/posts/*", useBase("/posts", postRouter.handler));
GlobalRouter.use("/profiles/*", useBase("/profiles", profileRouter.handler));

export { GlobalRouter };

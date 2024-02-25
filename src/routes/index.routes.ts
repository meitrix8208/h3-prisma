import { createRouter, useBase } from "h3";

import { userRouter } from "./user.routes";
import { postRouter } from "./post.routes";
import { profileRouter } from "./profile.routes";

const newRouter = createRouter();

newRouter.use("/users/**", useBase("/users", userRouter.handler));
newRouter.use("/posts/**", postRouter.handler);
newRouter.use("/profiles/**", profileRouter.handler);

export { newRouter };

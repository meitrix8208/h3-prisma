import { createRouter } from "h3";

import { userRouter } from "./user.routes";
import { postRouter } from "./post.routes";
import { profileRouter } from "./profile.routes";


const router = createRouter();
const newRouter = createRouter();

newRouter.use("/users/**", userRouter.handler);
newRouter.use("/posts/**", postRouter.handler);
newRouter.use("/profiles/**", profileRouter.handler);
router.use("/**", newRouter.handler);

export { router };

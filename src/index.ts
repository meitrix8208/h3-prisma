import { createApp, eventHandler, useBase } from "h3";
import morgan from "morgan";
import { userRouter } from "./routes/user.routes";
import { profileRouter } from "./routes/profile.routes";
import { postRouter } from "./routes/post.routes";
export const app = createApp();

const logger = morgan("dev");

app.use(
  eventHandler((event) => {
    const { req, res } = event.node;
    logger(req, res, (error) => {
      if (error) {
        console.error(error);
      }
    });
  })
);

app.use(useBase("/api/users", userRouter.handler));
app.use(useBase("/api/profiles", profileRouter.handler));
app.use(useBase("/api/posts", postRouter.handler));

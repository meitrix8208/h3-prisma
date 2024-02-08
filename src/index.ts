import { createApp, defineRequestMiddleware, eventHandler, useBase } from "h3";
import { router } from "./routes/index.routes";
import morgan from "morgan";
export const app = createApp();

const logger = morgan("dev");

app.use(defineRequestMiddleware(eventHandler((event) => {
  const { req, res } = event.node;

  logger(req, res, (error) => {
    if (error) {
      console.error(error);
    }
  });
})));

app.use( router.handler);

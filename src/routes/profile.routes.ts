import { createRouter } from "h3";
import {
  createProfile,
  deleteProfile,
  getProfile,
  getProfiles,
  updateProfile,
} from "../controllers/profile.controller.ts";
const profileRouter = createRouter();

profileRouter.get("/profiles/get", getProfiles)
  .get("/profiles/:id", getProfile)
  .post("/profiles/post", createProfile)
  .put("/profiles/:id", updateProfile)
  .delete("/profiles/:id", deleteProfile);

export { profileRouter };

import { createRouter } from "h3";
import {
  createProfile,
  deleteProfile,
  getProfile,
  getProfiles,
  updateProfile,
} from "../controllers/profile.controller";

const profileRouter = createRouter();

profileRouter.get("/", getProfiles)
  .get("/:id", getProfile)
  .post("/", createProfile)
  .put("/:id", updateProfile)
  .delete("/:id", deleteProfile);

export { profileRouter };

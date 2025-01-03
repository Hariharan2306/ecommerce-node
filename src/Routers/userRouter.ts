import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  fetchUserDataController,
  updateUserPasswordController,
} from "../Controllers/userController";

const userRouter = Router();

userRouter.get("/fetch-details/:userName", fetchUserDataController);
userRouter.put("/update-password", updateUserPasswordController);
userRouter.post("/create-user", createUserController);
userRouter.delete("/delete-user/:userName", deleteUserController);

export default userRouter;

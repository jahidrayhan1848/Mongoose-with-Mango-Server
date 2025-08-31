import { Router } from "express";
import { getrUsers, registerUser } from "./user.controller";


const userRoute = Router();

userRoute.post ("/user",registerUser)
userRoute.get ("/users",getrUsers)

export default userRoute ;
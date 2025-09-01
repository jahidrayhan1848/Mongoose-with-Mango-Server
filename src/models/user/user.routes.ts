import { Router } from "express";
import { getrUsers, registerUser } from "./user.controller";


const userRoute = Router();

userRoute.post ("/",registerUser)
userRoute.get ("/",getrUsers)

export default userRoute ;        
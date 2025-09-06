import { Router } from "express";
import userRoute from "../user/user.routes";
import mangoRoute from "../mango/mango.route";
import orderRoute from "../orders/order.routes";



const routes = Router()

routes.use("/user",userRoute)
routes.use("/mango",mangoRoute)
routes.use("/order",orderRoute)

export default routes;
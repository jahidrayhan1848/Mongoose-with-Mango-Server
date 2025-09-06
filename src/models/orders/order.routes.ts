import { Router } from "express";
import { orderController } from "./order.controller";



const orderRoute = Router();
orderRoute.post("/",orderController.CreateOrder);
orderRoute.get("/",orderController.getOrder);
  

export default orderRoute;
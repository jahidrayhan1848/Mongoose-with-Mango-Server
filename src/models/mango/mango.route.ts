import { Router } from "express";
import { mangoController } from "./mango.controllers";



const mangoRoute = Router();
mangoRoute.post ("/",mangoController.createMango)
mangoRoute.get ("/:mangoId",mangoController.getmangoById)
mangoRoute.patch("/:mangoId",mangoController.updateMango)
mangoRoute.delete("/:mangoId",mangoController.deleteMangoById)
mangoRoute.get ("/",mangoController.getMango)






export default mangoRoute

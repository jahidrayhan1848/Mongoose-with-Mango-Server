import  { Request, Response } from "express";

import order from "./order.model";



const CreateOrder = async (req:Request,res:Response)=>{
    const orderList = await order.create(req.body)

res.send ({
    success:true,
    message : "order create succesfully",
    data : orderList,
})

}


export const orderController ={
    CreateOrder
}

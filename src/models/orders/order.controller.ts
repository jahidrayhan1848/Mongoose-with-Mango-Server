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

const getOrder = async (req:Request,res:Response)=>{
    const orderList = await order.find(req.body)

res.send ({
    success:true,
    message : "Mango order getting  create succesfully",
    data : orderList,
})

}


export const orderController ={
    CreateOrder,getOrder
}

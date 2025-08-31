import User from "./user.model";
import express, { Request, Response } from "express";

   const registerUser =async (req : Request,res : Response ) => {
        const payLoad = req.body;
        const user = new User (payLoad)
          const data =await user.save()
            res.send({
        success :true,
        message : "user Registred complete" ,
        data

    })
    }
   const getrUsers =async (req : Request,res : Response ) => {
        const payLoad = req.body;
    
          const data =await User.find()
            res.send({
        success :true,
        message : "user Registred complete" ,
        data

    })
    }

    export {registerUser,getrUsers}
    
  
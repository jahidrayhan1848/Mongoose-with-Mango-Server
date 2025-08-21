import User from "./user.model";
import express, { Request, Response } from "express";

    export const registerUser =async (req,res) => {
        const payLoad = req.body;
        const user = new User (payLoad)
          const data =await user.save()
            res.send({
        success :true,
        message : "user Registred complete" ,
        data

    })

   
    }

  
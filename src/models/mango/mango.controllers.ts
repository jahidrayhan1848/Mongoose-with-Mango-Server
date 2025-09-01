import { Request, Response } from 'express';
import Mango from './mango.model';

const createMango = async (req: Request,res:Response)=>{
   try {
     const data = await Mango.create(req.body);
     res.send({
        success :true,
        message : "mango created successfully" ,
        data,

    })
   }
   catch (error){
      res.send({
        success :false,
        message : "mango created unsuccessfully" ,
      error,

    })

   }
    
}

const getMango =async (req: Request,res:Response)=>{
    try {
        const data = await Mango.find()
         res.send({
        success :true,
        message : "mango created successfully" ,
        data,

    })

    }
    catch(err){
         res.send({
        success :true,
        message : "mango created Unsuccessfully" ,
        err,

    })

    }

}

const getmangoById = async (req: Request,res:Response)=>{


    try {
        const mangoId = req.params.mangoId

        const data = await Mango.findById(mangoId)
         res.send({
        success :true,
        message : "mango created successfully" ,
        data,

    })

    }
    catch(err){
         res.send({
        success :true,
        message : "mango created Unsuccessfully" ,
        err,

    })

    }

}

const updateMango = async (req: Request,res:Response)=>{

     try {
        const mangoId = req.params.mangoId

        const data = await Mango.findByIdAndUpdate(mangoId,req.body,{new:true, runValidators:true})
         res.send({
        success :true,
        message : "mango updated successfully" ,
        data,

    })

    }
    catch(err){
         res.send({
        success :true,
        message : "error" ,
        err,

    })

    }

}


const deleteMangoById = async (req: Request,res:Response)=>{

     try {
        const mangoId = req.params.mangoId

        const data = await Mango.findByIdAndUpdate(mangoId)
         res.send({
        success :true,
        message : "mango deleted successfully" ,
        data,

    })

    }
    catch(err){
         res.send({
        success :true,
        message : "error" ,
        err,

    })

    }


}

export const mangoController = {
    createMango,getmangoById,getMango,updateMango,deleteMangoById 
}
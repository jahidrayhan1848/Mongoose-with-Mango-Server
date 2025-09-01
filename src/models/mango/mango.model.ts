import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema <IMango> ({
      name : {type : String, trim : true ,  required: true},
    variety : {type : String, trim : true ,  required: true},
    unit : {type : String, enum : ["kg","ton"], default:"kg" , required: true},
    price: {type:Number, min : 0},
    stock : {type:Number, min : 0},
    origin : {type: String, default: "unknown"} ,
    season : {type : String,enum :["Summer" ,  "Winter"]} 

}, {timestamps: true});



const Mango = model<IMango>("Mango", mangoSchema)

export default Mango
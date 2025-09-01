import { model, Schema } from "mongoose";
import IOrder from "./order.interface";

const orderAdressSchema = new Schema({
  zipcode : String,
  
 state : String,
  country : String,
street : String,


    
})

const orderModel = new Schema<IOrder>({
    user: {
      type: Schema.Types.ObjectId,
 
      required: true,
    },
    mango: {
      type: Schema.Types.ObjectId,
      ref: "Mango",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    address: {type : orderAdressSchema, required : true}
});


const order = model('order',orderModel);


export default order ;

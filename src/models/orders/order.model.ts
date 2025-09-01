import { Schema } from "mongoose";
import IOrder from "./order.interface";



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
    address: {
      zipcode: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
      street: { type: String, required: true, trim: true },
    },
})
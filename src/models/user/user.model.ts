import { model, Schema } from "mongoose";
import { IUSER } from "./user.interface";



const userSchema = new Schema <IUSER>({
     name: { 
    type: String,  required:true,trim : true, min :3 ,max :125  },
  email: { 
    type: String, required: true,validate:{
      validator: function (v){
         return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)

      },
      message: props => `${props.value} email is not valid`
    },
    immutable :true,
      unique: true
   },
  phone: { type: String ,required: [true,"your phone number is not valid"]},
  password: { type: String,required: true},
  role: {
    type: String,
    enum: {values:  ["Admin", "Customer"],message:"{VALUE} is not supported "}
  ,
    required: true

    
  }

});
 const User = model <IUSER> ("user",userSchema);

 export default User ; 
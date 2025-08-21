import { model, Schema } from "mongoose";
import { IUSER } from "./user.interface";



const userSchema = new Schema <IUSER>({
     name : {type :String, required:true,trim : true, min:3,max:123} ,
     email : { type : String, required: true,
      validate :{
         validator: function (v){
            return  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);

         },
         message: props=>  `${props.value} is not a valid email !`


      },
     },
     phone : {type :String , required: true},
     password : { type : String , required: true},
     role : {
        type : String,
        enum : ["Admin", "customer"], required: true
     }

});
 const User = model <IUSER> ("user",userSchema);

 export default User ; 
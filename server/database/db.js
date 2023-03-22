
import mongoose from "mongoose";



export const Connection= async(username,password)=>{
   const URL=  `mongodb+srv://${username}:${password}@ecommerce-web.zesr5sf.mongodb.net/?retryWrites=true&w=majority`;
    try{

         await   mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
            console.log("Connected To Database SuccessFully");
        }
    catch(error)
    {
        console.log("Error While Connecting to DataBase",error.message);
    }
}
export default Connection;
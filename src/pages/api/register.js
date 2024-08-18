import MongoDb from "@/lib/mongodb.mjs";
import User from "@/models/user"
import bcrypt from 'bcryptjs'
export default async function handler(req,res){
  if(req.method === "POST"){
    const {name, email, password} = req.body;
    console.log(name,email,password)
    await MongoDb();
    const hashedPassword = await bcrypt.hash(password,10);
    await User.create({name,email,password:hashedPassword});
    return res.status(200).json({message:"Registered Succesfully"})
  }else{
    return res.status(400).json({message:"failed to send request"})
  }
}
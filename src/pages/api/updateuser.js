// import MongoDb from "@/lib/mongodb.mjs";
// import User from "@/models/user";
// export default async function updateuser(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { id, name, email } = req.body;
//       if (!id || !name || !email) {
//         return res.status(400).json({ message: "all things are required" });
//       }
//       await MongoDb();
//       const userupdate = await User.findByIdAndUpdate(id,{name,email},{new: true})
//       if(userupdate){
//          console.log(userupdate)
//          return res.status(200).json({userupdate})
//       }else {
//          return res.status(401).json({message:"User will not updated"})
//       }
//     } catch (error) {
//       return res.status(402).json({message:"Interval Server Error"})
//     }
//   }
// }

// create second
import MongoDb from '@/lib/mongodb.mjs';
import User from '@/models/user';

export default async function updateuser(req,res) {
  if(req.method === "POST"){
      try {
        const { id, name, email } = req.body;
        console.log(id,name,email)
        if(!id || !name || !email){
          return res.status(400).json({message:"Please give complete data"})
        }
        await MongoDb();
        const userupdate = await User.findByIdAndUpdate(id,{name,email},{new:true})
        if(!userupdate){
          return res.status(401).json({message:"user not found"})
        }
        return res.status(200).json({userupdate})
      } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
      }
  } else{
    return res.status(402).json({message:`Method ${req} is not allowed`})
  }
}

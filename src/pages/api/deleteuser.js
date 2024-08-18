import MongoDb from '@/lib/mongodb.mjs';
import User from '@/models/user';

export default async function DeleteUser(req,res) {
 if(req.method === "POST"){
    try{
        const {id} = req.body;
        if(!id){
            return res.status(400).json({message:"Please Provide the id"})
        }
        await MongoDb()
        const deleteduser =  await User.findByIdAndDelete(id)
        if(!deleteduser){
            return res.status(401).json({message:"User will not deleted"}) 
        }
        return res.status(200).json({message:"User Deleted Successfully"})
    } catch(error) {
        return res.status(500).json({message:"Internal Server Error", error})
    }
 } else{
    return res.status(402).json({message:`Method ${req} not define correctly`})
 }
}

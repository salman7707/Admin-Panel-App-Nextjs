import MongoDb from "@/lib/mongodb.mjs";
import User from "@/models/user";

export default async function getdata(req, res) {
  if (req.method === "POST") {
    try {
      const { id } = req.body;
      await MongoDb();
      const user = await User.findById(id).select("name email");
      if (!user) {
        return res.status(400).json({ message:"Id is Required"});
      }
      return res.status(200).json({ user });
    } catch (error) {
        console.log("error fetching data")
        return res.status(500).json({message:"Internal Server Error"})
    }
  } else {
    return res.status(401).json({message:"Method ${req} Not Allowed"})
  }
}

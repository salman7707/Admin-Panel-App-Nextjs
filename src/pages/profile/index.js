import { signOut, useSession, getSession} from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
export default function index() {
  const [name, setInputName] = useState("");
  const [email, setInputEmail] = useState("");
  const Router = useRouter();
  const {data:session} = useSession()

  useEffect(()=>{
    const FetchUseData = async () => {
      if(!session || !session.user){
         return;
      }
      try {
        const res =  await fetch("/api/getdata",{
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify({id:session.user.id})
        })
        const data = await res.json();
        if(res.status === 200){
          console.log(data)
          setInputName(data.user.name)
          setInputEmail(data.user.email)
        }else{
          console.log("failed to fetch usser data", data.message)
        }
      } catch (error) {
        console.log("failed to send data",error)
      }
     }    
      FetchUseData();
  } ,[session])
  const handlehchange = async (e) => {
       e.preventDefault();
          // create second
      // second request
      try {
        const res = await fetch("api/updateuser",{
          method: "POST",
          headers: {
            "Content-Type":"Application/json",
          },
          body:JSON.stringify({id:session.user.id, name ,email})
        })
        // const data = await res.json();
          if (res.status === 200){
          const data = await res.json();
          console.log(data)
          setInputName(data.userupdate.name);
          setInputEmail(data.userupdate.email);
          alert("Data Update Successfully");
        } else {
          console.log("Error in fetching", data.message);
        }
      } catch (error) {
        console.log("error while Fetching", error);
      }   
  }
  async function DeleteUser(e){
     e.preventDefault();
     try{
        const res = await fetch( "api/deleteuser",{
         method:"POST",
         headers:{
          "Content-Type":"application/json"
         },
         body:JSON.stringify({id:session.user.id})
        } )
      if(!res){
        const data = await res.json()
        console.log(data.message)
      }
      alert("User Deleted Successfully")
      Router.push("/login")
      signOut()
      } catch(error){
        console.log("error while fetch",error)
     }
  }
  return (     
      <div className="h-full flex items-start z-0 overflow-auto justify-start w-full bg-[#0F172A]">
        <div className="w-[67%] h-[400px] mx-12 my-14 shadow-2xl rounded-md px-6 bg-[#1E293B]">
          <h2 className="font-semibold text-base py-6">Edit Profile</h2>
          <form className="space-y-4" onSubmit={handlehchange}>
            <div className="flex flex-col w-[40%]">
              <label className="text-[#a9a9b1] text-sm font-semibold py-4">
                Username
              </label>
              <input  
                type="text"
                value={name}
                onChange={(e)=>setInputName(e.target.value)}
                className="bg-transparent text-base border-2 border-[#2a334f] ml-1 py-2 px-6 focus:outline-none rounded-md text-white"
              />
            </div>
            <div className="flex flex-col w-[40%]">
              <label className="text-[#a9a9b1] text-sm font-semibold py-4">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e)=>setInputEmail(e.target.value)}
                className="bg-transparent border-2 text-base border-[#2a334f] ml-1 focus:outline-none py-2 px-6 rounded-md text-white"
              />
            </div>
            <div className="py-8 px-1 space-x-6">
               <button type="submit" className=" bg-[#2e6ab9] py-2 px-6 rounded-md font-semibold">Update Profile</button>
               <button type="button" onClick={DeleteUser} className=" bg-[#2e6ab9] py-2 px-6 rounded-md font-semibold">Delete Account</button>
            </div>
            
          </form>
        </div>
      </div>
  );
}

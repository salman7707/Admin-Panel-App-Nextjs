import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  let Router = useRouter();

  async function HandleSubmit(e) {
    e.preventDefault();
    if(name === "" || email===""|| password===""){
       return (
        alert("please Give complete Data") && null
       )
    }
    try {
      const data = await fetch("/api/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({name, email, password})
      })
      console.log("fetch portion work perfectly")
      const res = data.json()
      if(res.status === 200){
        console.log("User Registered Successfully")
      }
    } catch (error) {
      
    }

  }
  function routeToReg(){
    Router.push("/register")
  }
  return (
      <div className="w-full bg-blue-100 h-screen flex items-center justify-center">
        <div className="w-[600px] flex  items-center justify-center h-[450px] shadow-lg rounded bg-blue-200">
          <form className="flex flex-col" onSubmit={HandleSubmit}>
            {errorMessage && (
              <p className="text-xl font-semibold ">{errorMessage}</p>
            )}
            <h1 className="text-4xl font-bold flex items-center justify-center mb-4 text-black">
              Register
            </h1>
            <label
              className="text-xl font-semibold text-gray-700 "
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-3 w-60 p-2 rounded text-black"
              placeholder="Email"
            />
            <label
              className="text-xl font-semibold text-gray-700 "
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3 w-60 p-2 rounded text-black"
              placeholder="Email"
            />
            <label
              className="text-xl font-semibold text-gray-700"
              htmlFor="email"
            >
              Password
            </label>
            <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 w-60 p-2 rounded text-black"
            />
            <div className="flex items-center justify-center">
              <button
                className="text-lg bg-black w-20 rounded  py-2"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p  className=" text-gray-600 text-lg">If User Is Already Registered</p>
              <button onClick={routeToReg} className="text-gray-700 font-semibold cursor-pointer text-lg pl-1">Login</button>
            </div>
          </form>
        </div>
      </div>
  );
}

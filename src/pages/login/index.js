import React, { useState } from "react";
import { redirect, useRouter } from "next/router";
import { signIn } from "next-auth/react"
import Sidebar from "@/components/sidebar"

export default function LoginPage() {
  const [email, setEmail] = useState("salman@gmail.com");
  const [password, setPassword] = useState("123456");
  const [errorMessage, setErrorMessage] = useState(null);
  let Router = useRouter();

  async function HandleSubmit(e) {
    e.preventDefault();
    setErrorMessage("")
    try {
      const res = await signIn("credentials",{
        email,
        password,
        redirect:false
      })
      if(!res.ok){
        setErrorMessage("Invalid Email and Password")
        return null
      } else {
        alert("Login Successfull")
        console.log("succesfully login")
        window.location.href = "/dashboard"
      }
    } catch (error) {
      console.log(error)
    }
  }
  const HandleClick = () => {
  };
  function routeToReg() {
    Router.push("/");
  }
  return (
    <div className="flex h-full">
    <div className="flex bg-[#0F172A] w-[100%] py-10 px-10">
      <div className=" bg-[#1E293B] max-w-[70%] h-[390px] w-[60%] p-3 rounded-md">
        <form className="flex flex-col" onSubmit={HandleSubmit}>
          {errorMessage && (
            <p className="text-xl text-black font-semibold ">{errorMessage}</p>
          )}
          <h1 className=" text-[#d4d4d8] text-xl font-bold animate-pulse pl-5">Login</h1>
        <div className="flex flex-col space-y-7 mt-10">
                    
          <div className="flex flex-col w-60 ml-2 space-y-4">
            <label className="text-[#a9a9b1] text-sm font-semibold" htmlFor="name">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-transparent border-2 py-2 pl-4 focus:outline-none rounded-md border-[#2a334f] shadow-lg"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col w-60 ml-2 space-y-4">
            <label className="text-[#a9a9b1] text-sm font-semibold" htmlFor="name">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-2 py-2 pl-4 focus:outline-none rounded-md border-[#2a334f] shadow-lg"
              placeholder="Password"
            />
          </div>
        </div>
          <div className="mt-14 ml-2 mb-4">
          <div className="flex items-center space-x-2">
            <button className=" bg-[#2e6ab9] py-2 px-6 rounded-md font-semibold" type="submit">
              Sign In
            </button>
            <div className="flex items-center justify-center">
            <p className=" text-gray-600 text-base">
              Don't Have An Account?
            </p>
            <div
              onClick={routeToReg}
              className=" text-[#2e6ab9] font-semibold cursor-pointer text-base pl-1"
            >
              Register
            </div>
          </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
}

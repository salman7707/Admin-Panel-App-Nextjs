import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  let Router = useRouter();

  async function HandleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return alert("please Give complete Data") && null;
    }
    setErrorMessage("")
    try {
      const resUserExists = await fetch("/api/findUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { UserExists } = await resUserExists.json();

      if (UserExists) {
        setErrorMessage("User Already Exsists");
        return;
      }


      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      console.log("fetch portion work perfectly");
      if (res.status === 200) {
        console.log("User Register Successfully");
        setErrorMessage("");
        alert("User Created Successfully");
        Router.push("/login");
      } else {
        const data = await res.json();
        console.log("Please Give Correct Credentials");
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log("error while fetch", error);
    }
  }
  function routeToReg() {
    Router.push("/login");
  }
  return (
    <div className="flex h-full">
      <div className="flex bg-[#0F172A] h-full w-[100%] pt-10 px-10">
        <div className=" bg-[#1E293B] max-w-[70%] h-[500px] w-[65%] p-3 rounded-md">
          <form className="flex flex-col" onSubmit={HandleSubmit}>
            {errorMessage && (
              <p className="text-xl text-black font-semibold ">
                {errorMessage}
              </p>
            )}
            <h1 className=" text-[#d4d4d8] text-xl font-bold  pl-5">
              Register
            </h1>
            <div className="flex flex-col space-y-7 mt-10">
              <div className="flex flex-col w-60 ml-2 space-y-4">
                <label
                  className="text-[#a9a9b1] text-sm font-semibold"
                  htmlFor="name"
                >
                  UserName
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-2 py-2 pl-4 outline-none rounded-md border-[#2a334f] shadow-lg"
                  placeholder="Username"
                />
              </div>

              <div className="flex flex-col w-60 ml-2 space-y-4">
                <label
                  className="text-[#a9a9b1] text-sm font-semibold"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-2 py-2 pl-4 outline-none rounded-md border-[#2a334f] shadow-lg"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col w-60 ml-2 space-y-4">
                <label
                  className="text-[#a9a9b1] text-sm font-semibold"
                  htmlFor="name"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-2 py-2 pl-4 outline-none rounded-md border-[#2a334f] shadow-lg"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mt-14 ml-2 mb-4">
              <div className="flex items-center space-x-2">
                <button
                  className=" bg-[#2e6ab9] py-2 px-6 rounded-md font-semibold"
                  type="submit"
                >
                  Sign Up
                </button>
                <div className="flex items-center justify-center">
                  <p className=" text-gray-600 text-base">Already Have An Account?</p>
                  <div
                    onClick={routeToReg}
                    className="text-[#2e6ab9] font-semibold cursor-pointer text-base pl-1"
                  >
                    Login
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

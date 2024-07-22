import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  let Router = useRouter();

  async function HandleSubmit(e) {
    e.preventDefault();
  }
  const HandleClick = () => {
    
  };
  function routeToReg(){
    Router.push("/")
  }
  return (
      <div className="w-full bg-blue-100 h-screen flex items-center justify-center">
        <div className="w-[600px] flex  items-center justify-center h-[400px] shadow-lg rounded bg-blue-200">
          <form className="flex flex-col" onSubmit={HandleSubmit}>
            {errorMessage && (
              <p className="text-xl font-semibold ">{errorMessage}</p>
            )}
            <h1 className="text-4xl font-bold flex items-center justify-center mb-4 text-black">
              Sign In
            </h1>
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
                onClick={HandleClick}
              >
                Login
              </button>
            </div>
            {/* <div className="flex items-center justify-center">
              <button onClick={routeToReg} className="mt-2 text-white text-xl cursor-pointer px-2 bg-black rounded">If You Already Registered</button>
            </div> */}
          </form>
        </div>
      </div>
  );
}

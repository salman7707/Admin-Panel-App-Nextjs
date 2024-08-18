import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import Logo from "../../public/logo-2.svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { GrAnalytics } from "react-icons/gr";
import { FaRegClipboard } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function sidebar() {
  const [up, setup] = useState(false);
  const [up2, setup2] = useState(true);
  const [up3, setup3] = useState(true);
  const [up4, setup4] = useState(true);
  const [up5, setup5] = useState(true);
  const [up6, setup6] = useState(true);
  const Router = useRouter();

  return (
    <>
      <div className="flex bg-[#1E293B] mt-0 z-20 w-[250px] relative shadow-2xl py-2 ">
        <div className="rounded ml-6 mr-20 fixed left-0 right-0 top-1 scrollbar bottom-0 h-full w-[230px]">
          
          <div className="mt-5">
            <h1 className="text-3xl font-semibold" onClick={()=>Router.push("/dashboard")}>
              <img src={`${Logo.src}`} className="text-white"/>
            </h1>
          </div>
          
          <div className="w-full pr-4">
            <div
              onClick={() => setup(!up)}
              className="cursor-pointer group flex text-[#94A3B8] hover:text-[#624BFF] items-center justify-between py-5 space-x-2"
            >
              <div className="flex items-center">
                <MdHome className="text-xl text-[#627084] group-hover:text-[#624BFF]" />
                <h2 className=" pl-1 font-semibold">Dashboard</h2>
              </div>
              {!up ? (
                <IoIosArrowUp className="text-[#59677A]" />
              ) : (
                <IoIosArrowDown className="text-[#59677A]" />
              )}
            </div>
            {!up ? (
              <div className="pl-2 mt-0 space-y-4 py-2 font-semibold ">
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Analytics
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Project
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Ecommerce
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  CRM
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Finance
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="text-[#475569] mt-2 font-bold">Apps</div>

          <div className="w-full pr-4">
            <div
              onClick={() => setup2(!up2)}
              className="cursor-pointer group flex text-[#94A3B8] hover:text-[#624BFF] items-center justify-between py-5 space-x-2"
            >
              <div className="flex items-center transition-colors duration-600 ease-in-out delay-300">
                <CiShoppingCart className="text-xl text-[#627084] group-hover:text-[#624BFF]" />
                <h2 className=" pl-1 font-semibold ">Ecommerce</h2>
              </div>
              {!up2 ? (
                <IoIosArrowUp className="text-[#59677A]" />
              ) : (
                <IoIosArrowDown className="text-[#59677A]" />
              )}
            </div>
            {!up2 ? (
              <div className="pl-2 mt-0 space-y-4 py-2 font-semibold ">
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  {" "}
                  Analytics
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Project
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Ecommerce
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  CRM
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Finance
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="w-full pr-4">
            <div
              onClick={() => setup3(!up3)}
              className={`cursor-pointer flex text-[#94A3B8] hover:text-[#624BFF] items-center justify-between space-x-2`}
            >
              <div className="flex items-center">
              <CiMail  className="text-base ml-1"/>
                <h2 className=" pl-1 font-semibold">Email</h2>
              </div>
              {!up3 ? (
                <IoIosArrowUp className="text-[#59677A]" />
              ) : (
                <IoIosArrowDown className="text-[#59677A]" />
              )}
            </div>
            {!up3 ? (
              <div className="pl-2 mt-0 space-y-4 py-2 pt-5 font-semibold ">
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  {" "}
                  Analytics
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Project
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Ecommerce
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  CRM
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Finance
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
              </div>
            ) : (
              ""
            )}
          </div>


          <div className="w-full pr-4">
            <div
              onClick={() => setup4(!up4)}
              className={`cursor-pointer flex text-[#94A3B8] ${!up3 ? "py-5" : "py-5"} hover:text-[#624BFF] items-center justify-between space-x-2`}
            >
              <div className="flex items-center">
              <CiFileOn className="text-lg ml-1"/>
                <h2 className=" pl-1 font-semibold">Project</h2>
              </div>
              {!up4 ? (
                <IoIosArrowUp className="text-[#59677A]" />
              ) : (
                <IoIosArrowDown className="text-[#59677A]" />
              )}
            </div>
            {!up4 ? (
              <div className="pl-2 mt-0 space-y-4 py-2 font-semibold ">
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Grid
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  List
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Single
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Create Project
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Finance
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Blog
                </li>
              </div>
            ) : (
              ""
            )}
          </div>


          <div className="w-full pr-4">
            <div
              onClick={() => setup5(!up5)}
              className={`cursor-pointer flex text-[#94A3B8] ${!up5 ? "py-5 -mt-5" : "py-0"} hover:text-[#624BFF] items-center justify-between space-x-2`}
            >
              <div className="flex items-center">
              <GrAnalytics className="text-base ml-1"/>
                <h2 className=" pl-1 font-semibold">CRM</h2>
              </div>
              {!up5 ? (
                <IoIosArrowUp className="text-[#59677A]" />
              ) : (
                <IoIosArrowDown className="text-[#59677A]" />
              )}
            </div>
            {!up5 ? (
              <div className="pl-2 mt-0 space-y-4 py-2 font-semibold ">
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Contacts
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Company
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Deals
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Deals Single
                </li>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="w-full pr-4 mb-10">
            <div
              onClick={() => setup6(!up6)}
              className={`cursor-pointer flex text-[#94A3B8] ${!up6 ? "py-5 " : "py-5"} hover:text-[#624BFF] items-center justify-between space-x-2`}
            >
              <div className="flex items-center">
              <FaRegClipboard  className="text-base ml-1"/>
                <h2 className=" pl-1 font-semibold">Invoice</h2>
              </div>
              {!up6 ? (
                <IoIosArrowUp className="text-[#59677A]" />
              ) : (
                <IoIosArrowDown className="text-[#59677A]" />
              )}
            </div>
            {!up6 ? (
              <div className="pl-2 mt-0 space-y-4 py-2 font-semibold ">
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Contacts
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Company
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Deals
                </li>
                <li className="text-sm text-[#94A3B8] hover:text-[#624BFF]">
                  Deals Single
                </li>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import { TiArrowSortedUp } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { signOut } from "next-auth/react";
import { FiUser } from "react-icons/fi";
import { ImSwitch } from "react-icons/im";
import { LuPanelLeftClose } from "react-icons/lu";

export default function header() {
  const Ref = useRef();
  const router = useRouter();
  const [dropdown, setdropdown] = useState(false);
  const { pathname } = router;
  const handledropdown = () => {
    setdropdown(!dropdown);
  };
  const clickoutside = (e) => {
    if (Ref.current && !Ref.current.contains(e.target)) {
      setdropdown(false);
    }
  };
  useEffect(() => {
    if (dropdown) {
      document.addEventListener("mousedown", clickoutside);
    } else {
      document.removeEventListener("mousedown", clickoutside);
    }
  });
  return (
    <>
      <header className="bg-[#1E293B] relative h-16">
        <div className=" flex items-center justify-end z-10 bg-[#1E293B] fixed h-16 top-0 right-0 mx-0 left-0">
          
          <ul className="">
            {pathname === "/" || pathname === "/login" ? (
              ""
            ) : (
              <div
                ref={Ref}
                onClick={handledropdown}
                className="text-xl font-semibold"
              >
                <div className="px-8 py-2 flex cursor-pointer items-center">
                  <img src="forprofile.webp" className=" w-8 h-8 rounded-3xl" />
                </div>
                {dropdown ? (
                  <>
                    <div className="absolute top-16 right-6 bg-[#1E293B] w-28 rounded-md h-auto">
                      <Link href={"/profile"}>
                        <div className="flex items-center justify-start py-5 px-3 text-center hover:bg-[#0c1220]">
                        <FiUser className="text-base mr-1 text-gray-500"/>
                          <h2 className="text-gray-500 cursor-pointer text-xs ">
                            View Profile
                          </h2>
                        </div>
                      </Link>
                      <div className="border-b-2 w-[80%] mx-auto border-[#334155]"></div>
                      <div
                        className="flex items-center justify-start py-5 px-4 hover:bg-[#0c1220] "
                        onClick={signOut}
                      >
                        <ImSwitch className="text-base mr-1 text-gray-500"/>
                        <h2 className="text-gray-500 text-xs cursor-pointer">
                          Sign Out
                        </h2>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </ul>
        </div>
      </header>
    </>
  );
}

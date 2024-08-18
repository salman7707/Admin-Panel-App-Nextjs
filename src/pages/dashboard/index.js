import React from "react";
import Sidebar from "@/components/sidebar";
import Bag from "../../assets/bag.svg";
import Menu from "../../assets/menu.svg";
import Users from "../../assets/user.svg";
import Target from "../../assets/target.svg";
import Logo from "../../assets/logo-1.svg";
import Logo2 from "../../assets/brand-logo-2.svg";
import Logo3 from "../../assets/brand-logo-3.svg";
import Logo6 from "../../assets/brand-logo-6.svg";
import Logo4 from "../../assets/brand-logo-4.svg";
import Avatar from "../../assets/avatar-11.jpg";
import Avatar2 from "../../assets/avatar-2.jpg";
import Avatar3 from "../../assets/avatar-3.jpg";
import Avatar4 from "../../assets/avatar-4.jpg";
import Avatar5 from "../../assets/avatar-5.jpg";
import Avatar6 from "../../assets/avatar-6.jpg";
import Avatar7 from "../../assets/avatar-7.jpg";
import Avatar8 from "../../assets/avatar-8.jpg";
import Avatar9 from "../../assets/avatar-9.jpg";
import Avatar10 from "../../assets/avatar-10.jpg";
import Avatar12 from "../../assets/avatar-12.jpg";
import Avatar13 from "../../assets/avatar-13.jpg";
import Avatar14 from "../../assets/avatar-14.jpg";
import Avatar15 from "../../assets/avatar-15.jpg";

export default function Dashboard() {
  const card = [
    {
      title: "Projects",
      mainnumber: 18,
      smallnumber: 2,
      image: Bag.src,
      text: "Completed",
    },
    {
      title: "Active Task",
      mainnumber: 132,
      smallnumber: 28,
      image: Menu.src,
      text: "Completed",
    },
    {
      title: "Teams",
      mainnumber: 12,
      smallnumber: 1,
      image: Users.src,
      text: "Completed",
    },
    {
      title: "Productivity",
      mainnumber: "76%",
      smallnumber: "5%",
      color: "green",
      image: Target.src,
      text: "Completed",
    },
  ];
  const data = [
    {
      logo: Logo.src,
      ptext: "Dropbox Design System",
      hours: 34,
      w: 14,
      bg: "#353936",
      btn: "medium",
      color: "yellow",
      img: Avatar.src,
      img2: Avatar2.src,
      img3: Avatar3.src,
      progress: "15%",
      0: true,
    },
    {
      logo: Logo2.src,
      ptext: "Slack Team UI Design",
      hours: 47,
      w: 10,
      bg: "#312A3C",
      btn: "High",
      color: "red",
      img: Avatar4.src,
      img2: Avatar5.src,
      img3: Avatar6.src,
      progress: "35%",
    },
    {
      logo: Logo3.src,
      ptext: "GitHub Satellite",
      hours: 120,
      w: 10,
      bg: "#1C3A4D",
      btn: "Low",
      color: "green",
      img: Avatar7.src,
      img2: Avatar8.src,
      img3: Avatar9.src,
      progress: "75%",
    },
    {
      logo: Logo6.src,
      ptext: "3D Character Modelling",
      hours: 89,
      w: 14,
      bg: "#353936",
      btn: "medium",
      color: "yellow",
      img: Avatar10.src,
      img2: Avatar.src,
      img3: Avatar12.src,
      progress: "63%",
    },
    {
      logo: Logo4.src,
      ptext: "Webapp Design System",
      hours: 108,
      w: 10,
      bg: "#1C3A4D",
      btn: "Track",
      color: "green",
      img: Avatar13.src,
      img2: Avatar14.src,
      img3: Avatar15.src,
      progress: "100%",
    },
  ];
  return (
    <div className="bg-[#0F172A] w-auto h-full mb-10 m-0 p-0">
      <div className="bg-[#624BFF] z-10 w-full h-52 px-8 flex justify-between pt-10">
        <h2 className="text-2xl text-[#1E293B] font-semibold">Projects</h2>
        <div className=" text-white border-md bg-[#1E293B] h-10 py-2 px-4 rounded-lg font-semibold">
          Create New Project
        </div>
      </div>

      <div className="px-8 -mt-28 z-50">
        <div className=" flex flex-wrap justify-between space-x-4">
          {card.map((card) => (
            <div className="bg-[#1E293B] flex-1 hover:-translate-y-2 hover:ease-in-out hover: hover:duration-700 transition-transform rounded-md lg:w-auto h-44">
              <div className="flex justify-between px-4 pt-5">
                <h2 className="text-[#64748B] font-semibold text-lg">
                  {card.title}
                </h2>
                <div className="bg-[#333476] rounded-lg px-2 py-2">
                  <img src={card.image} className="w-6 h-auto" />
                </div>
              </div>
              <div className="px-4 pt-5 space-y-3">
                <h2 className="text-[#64748B] font-bold text-4xl">
                  {card.mainnumber}
                </h2>
                <h3
                  className={`space-x-8 ${
                    card.color ? `text-${card.color}-500` : ""
                  }`}
                >
                  {card.smallnumber}{" "}
                  <span className="text-[#64748B] pl-2 font-semibold">
                    {card.text}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto mt-5 flex justify-between">
          
          <div className="bg-[#1E293B] w-[67%] h-auto pb-10 rounded-md">
            <h2 className="px-4 py-4 text-[#64748B] font-bold">
              Active Projects
            </h2>
            <table className="w-full">
              <thead className="">
                <tr className="bg-[#334155] h-10">
                  <td className="pr-3 pl-6 text-[#CBD5E1] font-semibold text-sm text-start">
                    Project Name
                  </td>
                  <td className="px-8 text-[#CBD5E1] font-semibold text-sm">
                    Hours
                  </td>
                  <td className="px-6 text-[#CBD5E1] font-semibold text-sm">
                    Priority
                  </td>
                  <td className="px-4 text-[#CBD5E1] font-semibold text-sm">
                    Members
                  </td>
                  <td className="pl-[26.5px] pr-[47px] text-[#CBD5E1] font-semibold text-sm">
                    Progress
                  </td>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr
                    className="bg-[#1E293B] border-b border-b-[#334155] hover:bg-[#0F172A]"
                    key={index}
                  >
                    <td className="flex px-6 py-4 items-center space-x-3">
                      <img src={data.logo} />
                      <h2 className="text-[#94A3B8] hover:text-[#624BFF] text-sm font-bold">
                        {data.ptext}
                      </h2>
                    </td>
                    <td className="text-[#94A3B8] px-8">{data.hours}</td>
                    <td className="px-6">
                      <div
                        className={`bg-[${data.bg}] px-1.5 w-${data.w} rounded-md text-${data.color}-500 font-bold text-xs`}
                      >
                        {data.btn}
                      </div>
                    </td>
                    <td className="flex px-3">
                      <img
                        src={data.img}
                        className="z-0 hover:z-10 w-8 border-2 border-[#1E293B] h-auto rounded-full"
                      />
                      <img
                        src={data.img2}
                        className="z-0 hover:z-10 -ml-4 border-2 border-[#1E293B] w-8 h-auto rounded-full"
                      />
                      <img
                        src={data.img3}
                        className="w-8 z-0 hover:z-10 -ml-3 border-2 border-[#1E293B] h-auto rounded-full"
                      />
                      <div className="bg-[#624BFF] z-0 text-[#1E293B] text-center w-8 h-auto -ml-4 border-[#1E293B] rounded-full border-2">
                        +5
                      </div>
                    </td>
                    <td className="text-[#fff] px-6 ">
                      <div className="flex items-center justify-between">
                        {data.progress}
                        <div className="rounded-md border-[#1E293B] bg-[#334155] h-1.5 w-6">
                          <div
                            className={` rounded-md bg-[#624BFF] h-1.5`}
                            style={{ width: data.progress }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#1E293B] w-[31%] h-auto pb-10 rounded-md">
            <div className="border-b border-[#334155] ">
              <h2 className="text-[#64748B] pt-5 pb-4 font-bold px-4">
                Revenue by Location
              </h2>
            </div>
            <div className="px-4 my-4 space-y-8">
              <div>
                <div className="flex mb-2  items-center justify-between">
                  <h2 className="text-[#64748B] font-semibold">
                    United States
                  </h2>
                  <h2>$22,120</h2>
                </div>
                <div className="bg-[#334155] h-2 w-full mx-auto rounded-md">
                  <div className="h-2 w-[40%] bg-[#624BFF] rounded-md"></div>
                </div>
              </div>

              <div>
                <div className="flex mb-2  items-center justify-between">
                  <h2 className="text-[#64748B] font-semibold">
                    India
                  </h2>
                  <h2>$12,100</h2>
                </div>
                <div className="bg-[#334155] h-2 w-full mx-auto rounded-md">
                  <div className="h-2 w-[20%] bg-orange-400 rounded-md"></div>
                </div>
              </div>

              <div>
                <div className="flex mb-2  items-center justify-between">
                  <h2 className="text-[#64748B] font-semibold">
                    United Kindom
                  </h2>
                  <h2>$8,864</h2>
                </div>
                <div className="bg-[#334155] h-2 w-full mx-auto rounded-md">
                  <div className="h-2 w-[35%] bg-[#0DCAF0] rounded-md"></div>
                </div>
              </div>
              
              <div>
                <div className="flex mb-2  items-center justify-between">
                  <h2 className="text-[#64748B] font-semibold">
                    Pakistan
                  </h2>
                  <h2>$4,006</h2>
                </div>
                <div className="bg-[#334155] h-2 w-full mx-auto rounded-md">
                  <div className="h-2 w-[15%] bg-green-500 rounded-md"></div>
                </div>
              </div>
              
              <div>
                <div className="flex mb-2  items-center justify-between">
                  <h2 className="text-[#64748B] font-semibold">
                    Sweden
                  </h2>
                  <h2>$6,106</h2>
                </div>
                <div className="bg-[#334155] h-2 w-full mx-auto rounded-md">
                  <div className="h-2 w-[40%] bg-yellow-500 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

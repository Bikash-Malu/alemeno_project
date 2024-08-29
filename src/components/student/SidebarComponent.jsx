import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDashboard, MdOutlineAddToQueue } from "react-icons/md";
import { SiConfluence } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

const SidebarComponent = () => {
  const getInitialSidebarState = () => window.innerWidth >= 640;

  const [isSidebarOpen, setIsSidebarOpen] = useState(getInitialSidebarState);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 640;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Menus = [
    { title: "Courses", icon: <MdOutlineAddToQueue size={20} />, path: "/courses" },
    { title: "Enrolled Courses", icon: <MdDashboard size={20} />, path: "/course-enroll" },
    { title: "Profile", icon: <CgProfile size={20} />, path: "/profile" },
    { title: "Logout", icon: <IoLogOutOutline size={20} />, path: "/logout" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          isSidebarOpen ? "w-56" : "w-16"
        } bg-black h-screen p-3 pt-8 relative duration-300 text-white`}
      >
        {!isMobile && (
          <IoIosArrowBack
            size={25}
            color="white"  
            className={`absolute cursor-pointer top-9 w-7 border-2 rounded-full -right-2 text-gray-500 border-slate-500 ${
              !isSidebarOpen && "rotate-180"
            }`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        )}
        <div className="flex gap-x-4 items-center">
          <SiConfluence
            color="white"
            size={30}
            className={`cursor-pointer duration-500 ${
              isSidebarOpen && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !isSidebarOpen && "scale-0"
            }`}
          >
           Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-[rgba(255,255,255,0.17)] text-white text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              {Menu.dropdown ? (
                <div className="relative">
                  {Menu.dropdown}
                </div>
              ) : (
                <Link to={Menu.path || "#"} className="flex items-center gap-x-4 w-full justify-between">
                  <span>{Menu.icon}</span>
                  <span
                    className={`flex items-center w-full ${
                      !isSidebarOpen && "hidden"
                    } origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;

// Sidebar.js
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="p-2 text-gray-700 md:hidden"  // Show on mobile only
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <i className="fas fa-bars"></i> {/* Font Awesome Icon for the menu */}
      </button>

      {/* Sidebar */}
      <Sidebar
        className={`fixed top-0 left-0 h-full transition-transform transform bg-white shadow-md md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static`}
        aria-label="Sidebar with navigation"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={<i className="fas fa-home"></i>}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={<i className="fas fa-user"></i>}>
              Profile
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={<i className="fas fa-cog"></i>}>
              Settings
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={<i className="fas fa-sign-out-alt"></i>}>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SideBar;

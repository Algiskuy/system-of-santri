import React, { useState } from "react";
import logo from "../assets/long-logo.svg";
import { NavLink } from "react-router-dom";

const Nav = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navPage = [
    {
      path: "/myprofile",
      name: "Profile",
    },
    {
      path: "/kurikulum/sprint-1",
      name: "Kurikulum",
    },
    {
      path: "/presensi",
      name: "Presensi",
    },
    {
      path: "/data-santri",
      name: "Data Santri",
    },
  ];

  return (
    <div className=" w-full fixed lg:static z-50 top-0 left-0">
      {/* <div className="flex top-[-100px fixed z-[99] items-center sm:w-full bg-[#008C74] shadow-[0_3px_20px_rgba(0,0,0,0.25)] sm:h-[9vh] 3xl:h-max py-3 sm:px-[3%] px-7 rounded-b-xl sm:rounded-b-3xl"> */}
      <div className="flex fixed z-[99] items-center w-full bg-[#008C74] shadow-[0_3px_20px_rgba(0,0,0,0.25)] min-h-[9vh] max-h-[9vh] p-3 rounded-b-xl">
        <div className="flex justify-between w-full">
          <div className="flex items-center w-52 sm:w-96">
            <img
              src={logo}
              alt="logo"
              className="w-[50%] sm:w-[35%] lg:w-[25%] "
            />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="sm:hidden flex items-center cursor-pointer md:hidden"
          >
            <svg
              name={open ? "close" : "menu"}
              className=" text-white mr-3 cursor-pointer"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.66666 7C3.66666 6.44772 4.11437 6 4.66666 6H23.3333C23.8856 6 24.3333 6.44772 24.3333 7C24.3333 7.55228 23.8856 8 23.3333 8H4.66666C4.11437 8 3.66666 7.55228 3.66666 7ZM3.66666 14C3.66666 13.4477 4.11437 13 4.66666 13H23.3333C23.8856 13 24.3333 13.4477 24.3333 14C24.3333 14.5523 23.8856 15 23.3333 15H4.66666C4.11437 15 3.66666 14.5523 3.66666 14ZM3.66666 21C3.66666 20.4477 4.11437 20 4.66666 20H23.3333C23.8856 20 24.3333 20.4477 24.3333 21C24.3333 21.5523 23.8856 22 23.3333 22H4.66666C4.11437 22 3.66666 21.5523 3.66666 21Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div
          className={`left-0 sm:flex sm:items-center sm:justify-end absolute sm:static font-bold grid gap-8 sm:gap-[5%] pt-[23%] px-[7%] sm:px-0 sm:pt-0 sm:pb-0 pb-[8%] bg-[#008C74] sm:bg-none sm:z-auto z-[-1] w-full transition-all duration-[0.5s] sm:duration-[0s] ease-in shadow-[0_3px_20px_rgba(0,0,0,0.5)] sm:shadow-none ${
            open ? "top-0" : "top-[-600%]"
          }`}
        >
          {navPage.map((data, index) => {
            return (
              <NavLink key={index} to={data.path}>
                <div>
                  {/* <a href="" className="flex gap-4">
                    <p className="text-white">{data.name}</p>
                  </a> */}
                  <p className="text-white ml-5 min-w-max ">{data.name}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Nav;

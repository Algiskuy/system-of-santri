import React, { useState } from "react";
import logo from "../assets/long-logo.svg";
import { NavLink } from "react-router-dom";

const NavSprint = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navPage = [
    {
      path: "/kurikulum/sprint-1",
      name: "Sprint 1",
    },
    {
      path: "/kurikulum/sprint-2",
      name: "Sprint 2",
    },
    {
      path: "/kurikulum/sprint-3",
      name: "Sprint 3",
    },
  ];

  return (
    <div className=" w-full fixed z-50 top-0 left-0">
      <div className="flex fixed z-[99] border-b-[2px] border-[#008C74] sm:w-full mt-[10vh] px-7">
        <div className="flex w-full">
          <div className="flex items-center">
            <p>Front End</p>
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
          className={`left-0 sm:flex sm:items-center sm:justify-end absolute sm:static font-bold grid gap-8 sm:gap-[5%] pt-[23%] px-[7%] sm:px-0 sm:pt-0 sm:pb-0 pb-[8%] sm:bg-none sm:z-auto z-[-1] w-full  duration-[0.5s] ${
            open ? "top-0" : "top-[-600%]"
          }`}
        >
          {navPage.map((data, index) => {
            return (
              <NavLink key={index} to={data.path}>
                <div>
                  <div href="#" className="flex gap-4">
                    <p className="text-sm my-[15%] border flex-[0_0_100%] border-[#008C74] hover:bg-[#008C74] duration-500 hover:text-white py-1.5 px-3 rounded-3xl">
                      {data.name}
                    </p>
                  </div>
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

export default NavSprint;

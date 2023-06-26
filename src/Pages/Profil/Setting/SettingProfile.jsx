import React, { useState } from "react";
import Profile from "../../../assets/img/jecky.jpg";
import IconEditFoto from "../../../assets/icons/settingfoto.png";

export default function SettingProfile({ setSettingProfile }) {
  const handlerSubmitProfile = () => {};

  return (
    <>
      <form onSubmit={handlerSubmitProfile}>
        <div className="fixed inset-0 z-40 bg-black/50 sm:flex justify-center items-center pt-[12vh] sm:pt-[8vh]">
          <div className="relative bg-white p-5 rounded-xl mx-4">
            {/*header*/}
            <div className=" flex justify-center mb-5">
              <h1 className="font-bold text-xl">Edit Profile</h1>
              <button
                onClick={() => setSettingProfile(false)}
                className=" absolute top-2 right-2 text-xl p-2"
              >
                X
              </button>
            </div>
            {/*content*/}
            <div>
              <div className="flex justify-center">
                <div>
                  <div className="relative flex justify-center ">
                    <button className="absolute top-36 right-4 border-2 border-black bg-white/50 rounded-full p-2">
                      <img src={IconEditFoto} alt="edit foto" width="40" />
                    </button>
                  </div>
                  <img
                    src={Profile}
                    alt="Opps,Sorry!"
                    width="210"
                    className="rounded-full "
                  />
                </div>
              </div>
              <div className="flex justify-between sm:gap-10 mt-5 ">
                <h4>Nama:</h4>
                <input
                  type="text"
                  className="border border-black/20 outline-none px-2 rounded-md"
                />
              </div>
              <div className="flex justify-between sm:gap-10 mt-5 ">
                <h4>Email:</h4>
                <input
                  type="email"
                  className="border border-black/20 outline-none px-2 rounded-md"
                />
              </div>
              <div className="flex justify-between sm:gap-10 mt-5 ">
                <h4>Study:</h4>
                <input
                  type="text"
                  className="border border-black/20 outline-none px-2 rounded-md"
                />
              </div>
              <div className="flex justify-between sm:gap-10 mt-5 ">
                <h4>Jabatan:</h4>
                <input
                  type="text"
                  className="border border-black/20 outline-none px-2 rounded-md"
                />
              </div>
              <div className="flex justify-between sm:gap-10 mt-5 ">
                <h4>Telp:</h4>
                <input
                  type="text"
                  className="border border-black/20 outline-none px-2 rounded-md"
                />
              </div>
              <div className="text-center">
                <button className=" bg-[#008C74] px-[40%] py-2 mt-4 rounded-2xl text-white font-bold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

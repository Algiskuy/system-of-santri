import React from "react";
import { MySkill, Pendidikan, Pengalaman } from "../../Component/DataFake";
import CakeResume from "./DataProfile/Index";

const RightMyProfil = () => {
  return (
    <>
      <div className="w-full sm:w-1/3 mx-2 ">
        <div className="bg-[#008C74] text-white py-2 pr-1 ">
          <h1 className="text-center font-bold text-2xl pb-2">My Skill</h1>
          {MySkill.map((item, index) => (
            <ul
              key={index}
              className="h-36 scrollbar-thin scrollbar-thumb-gray-600  scrollbar-thumb-rounded  pl-4 "
            >
              <li>{item.skill1}</li>
              <li>{item.skill2}</li>
              <li>{item.skill3}</li>
              <li>{item.skill4}</li>
              <li>{item.skill5}</li>
              <li>{item.skill6}</li>
              <li>{item.skill7}</li>
              <li>{item.skill8}</li>
            </ul>
          ))}
        </div>
        <div className="border-2 border-[#008C74] my-1 py-1 pr-1">
          <h1 className="text-center font-bold text-2xl py-1 text-[#008C74]">
            Pengalaman
          </h1>
          <div className="h-[19rem] sm:h-[21rem] lg:h-[18.3rem] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded">
            {Pengalaman.map((item, index) => (
              <ul key={index} className="border-b-2 pl-4 py-1">
                <li className="text-[#008C74] font-medium ">{item.divisi}</li>
                <li className="text-[#008C74]">{item.tempat}</li>
                <li className="text-sm font-serif ">{item.waktu}</li>
                <li className="text-sm font-serif ">{item.alamat}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="bg-[#008C74] text-white py-1 pr-1">
          <h1 className="text-center font-bold text-2xl pb-2">Pendidikan</h1>
          <div className="h-[13.5rem] sm:h-36 lg:h-[6.5rem] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded">
            {Pendidikan.map((item, index) => (
              <ul key={index} className="mb-2  pl-4 ">
                <li className="font-bold">{item.tempat}</li>
                <li>{item.divisi}</li>
                <li>{item.waktu}</li>
                <li>{item.alamat}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* CakeResume */}
      <div className="sm:hidden w-full mx-2">
        <CakeResume />
      </div>
    </>
  );
};

export default RightMyProfil;

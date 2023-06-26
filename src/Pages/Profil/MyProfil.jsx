import React from "react";
import LeftMyProfil from "./LeftMyProfil";
import RightMyProfil from "./RightMyProfil";

const MyProfil = () => {
  return (
    <>
      {/* pembungkus */}
      <div className="flex justify-between pt-[10vh] flex-wrap sm:flex-nowrap">
        {/* left */}
        <LeftMyProfil />
        {/* Right */}
        {/* <RightMyProfil /> */}
      </div>
    </>
  );
};

export default MyProfil;

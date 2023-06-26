import React, { useState } from "react";
import Jecky from "../../assets/img/jecky.jpg";
import logoEditProfile from "../../assets/logo/create_24px_outlined.svg";
import Index from "./DataProfile/Index";
import SettingProfile from "./Setting/SettingProfile";

const LeftMyProfil = () => {
  const [settingProfile, setSettingProfile] = useState(false);
  return (
    <>
      <div className=" mx-1 w-full mb-2 ">
        <div className=" border-2 border-[#008C74] ">
          {/* Atas */}
          <div className="">
            <div className="bg-[#008C74] flex justify-between">
              {/* <div className="relative -mb-14 bg-black px-6 pt-8"> */}
              <div className="-mb-12 mt-5 ml-5">
                <img
                  src={Jecky}
                  alt="Jecky"
                  width={200}
                  className="rounded-full"
                />
              </div>
            </div>
            {/* Bawah */}
            <div className="px-2 pt-16">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Jecky Thatsumi Ozawa</h1>
                <button
                  onClick={() => setSettingProfile(true)}
                  className="bg-white border border-[#008C74] h-max rounded-lg -mt-10"
                >
                  <img src={logoEditProfile} alt="edit profil" />
                </button>
                {settingProfile ? (
                  <SettingProfile setSettingProfile={setSettingProfile} />
                ) : null}
              </div>
              <br />
              <p className="font-bold">Musyrif Pondok</p>
              <p className="font-medium">Engineer Developer</p>
              <p className="font-medium">jeckyramadhan03@gmail.com</p>
              <p className="text-sky-600"> 0210-6543-0987</p>
              <br />
              <p className="min-h-[27vh] max-h-[27vh] sm:min-h-[12vh] sm:max-h-[12vh] overflow-hidden break-words">
                {"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae aspernatur nobis placeat ut fugiat at totamharum. Id obcaecati blanditiis exercitationem culpa, ut inciduntnemo quasi optio provident harum! Lorem ipsum dolor sit ametconsectetur adipisicing elit. In, repellendus inventore?Voluptas odit aspernatur ipsa totam cum, ducimus consecteturmolestias temporibus harum libero non illo rem, maxime modi!Ipsam, error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eligendi rerum atque rem quae commodi odio debitis fuga omnis. Quae eligendi harum, ullam eum repellendus atque natus! Illo, beatae sed.".substr(
                  0,
                  300
                )}
              </p>
            </div>
          </div>
        </div>
        {/* Bawah */}
        <div className="hidden sm:block">
          <Index />
        </div>
      </div>
    </>
  );
};
export default LeftMyProfil;

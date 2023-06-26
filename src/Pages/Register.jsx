import LProgrammer from "../assets/img/programmer.png";
import IPassword from "../assets/icons/keys.png";
import IShow from "../assets/icons/hide.png";
import IPilihJurusan from "../assets/icons/Pilihjurusan.png";
import IUser from "../assets/icons/user.png";
import IEmail from "../assets/icons/email.png";
import ITelp from "../assets/icons/phone.png";

const Register = ({ setSignUp }) => {
  return (
    <>
      <form action="">
        <div className="bg-bglogreg sm:flex justify-around items-center bg-cover bg-center pt-10 sm:py-32 min-h-[100vh]">
          <div className="flex px-5">
            <img
              src={LProgrammer}
              alt="Pondok Programmer"
              className="sm:pt-0 w-[40%] sm:w-full"
            />
            {/* Tambahan di tampilan mobile */}
            <div className="text-white ml-5 sm:hidden">
              <p className="text-4xl font-bold">Welcome</p>
              <p className="text-2xl font-semibold mt-12">Sign Up</p>
            </div>
          </div>
          <div className="bg-white py-5 px-4 sm:px-10 border-4 rounded-2xl">
            <div className="flex relative justify-center">
              <p className=" text-center text-[#008C74] text-4xl font-bold">
                Sign Up
              </p>
              <button
                onClick={() => setSignUp(false)}
                className="absolute top-0 right-0 text-2xl"
              >
                x
              </button>
            </div>
            {/* Jurusan */}
            <div className="flex mt-5 ">
              <div className="flex border-b border-gray-500 w-full pb-1">
                <img src={IPilihJurusan} alt="email" width={40} />
                <input
                  type="text"
                  placeholder="Pilih jurusan"
                  className="ml-5 outline-none text-lg bg-transparent w-[80%]"
                />
              </div>
            </div>{" "}
            {/* Nama Lengkap */}
            <div className="flex mt-5 ">
              <div className="flex border-b border-gray-500 w-full pb-1">
                <img src={IUser} alt="email" width={40} />
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="ml-5 outline-none text-lg bg-transparent w-[80%]"
                />
              </div>
            </div>{" "}
            {/* Email */}
            <div className="flex mt-5 ">
              <div className="flex border-b border-gray-500 w-full pb-1">
                <img src={IEmail} alt="email" width={40} />
                <input
                  type="email"
                  placeholder="Masukan Email"
                  className="ml-5 outline-none text-lg bg-transparent w-[80%]"
                />
              </div>
            </div>{" "}
            {/* Nomor Telepon */}
            <div className="flex mt-5 ">
              <div className="flex border-b border-gray-500 w-full pb-1">
                <img src={ITelp} alt="email" width={40} />
                <input
                  type="text"
                  placeholder="Masukan Nomor Telepone"
                  className="ml-5 outline-none text-lg bg-transparent w-[80%]"
                />
              </div>
            </div>{" "}
            {/* password */}
            <div className="relative flex border-b border-gray-500 mt-5 pb-1">
              <img src={IPassword} alt="email" width={40} />
              <input
                type="password"
                placeholder="Masukan Password Anda"
                className="ml-5 outline-none text-lg bg-transparent w-[65%] sm:w-[70%]"
              />
              <button className="absolute right-1">
                <img src={IShow} alt="show/hidden" />
              </button>
            </div>
            {/* Konfirmasi Password */}
            <div className="relative flex border-b border-gray-500 mt-5 pb-1">
              <img src={IPassword} alt="email" width={40} />
              <input
                type="password"
                placeholder="Masukan Password Anda"
                className="ml-5 outline-none text-lg bg-transparent w-[65%] sm:w-[70%]"
              />
              <button className="absolute right-1">
                <img src={IShow} alt="show/hidden" />
              </button>
            </div>
            {/* Button buat data */}
            <button className="flex justify-center border-2 bg-[#008C74] hover:bg-[#006d5b] text-white rounded-lg w-full mt-5">
              <p className="font-medium py-2">Register</p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Register;

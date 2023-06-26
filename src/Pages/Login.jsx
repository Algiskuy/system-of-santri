import { useState } from "react";
import LProgrammer from "../assets/img/programmer.png";
import IEmail from "../assets/icons/email.png";
import IPassword from "../assets/icons/keys.png";
import IShow from "../assets/icons/hide.png";
import Register from "./Register";
// import MyProfil from "../Profil/MyProfil";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  // Mengubah nilai signIn menjadi true
  const signInPage = () => {
    setSignIn(true);
  };

  // Periksa apakah perlu melempar user ke halaman Sign Up
  if (signIn) {
    return <Register setSignIn={setSignUp} />;
  }
  // Mengubah nilai signUp menjadi true
  const signUpPage = () => {
    setSignUp(true);
  };

  // Periksa apakah perlu melempar user ke halaman Sign Up
  if (signUp) {
    return <Register setSignUp={setSignUp} />;
  }

  const handleSubmit = () => {
    // e.preventDefault();
    signInPage();
    signUpPage();
  };

  return (
    <>
      <div className="bg-bglogreg sm:flex justify-around items-center bg-cover bg-center pt-20 sm:py-32 min-h-[100vh]">
        <div className="flex px-5">
          <img
            src={LProgrammer}
            alt="Pondok Programmer"
            className="sm:pt-0 w-[40%] sm:w-full"
          />
          {/* tambahan di Sign in hp */}
          <div className="text-white ml-5 sm:hidden">
            <p className="text-4xl font-bold">Welcome</p>
            <p className="text-2xl font-semibold mt-12">Sign In</p>
          </div>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white py-[33.5px] px-4 sm:px-10 border-4 rounded-2xl"
        >
          <p className=" text-center text-[#008C74] text-4xl font-bold hidden sm:block">
            Sign In
          </p>
          <div className="mt-5 text-gray-600">
            <h5>Email</h5>
          </div>
          <div className="flex border-b border-gray-500 ">
            <img src={IEmail} alt="email" width={40} />
            <input
              type="text"
              placeholder="Masukan Email Anda"
              className="ml-5 outline-none text-lg bg-transparent w-[80%]"
            />
          </div>
          {/* password */}
          <div className="mt-5 text-gray-600">
            <h5>Password</h5>
          </div>
          <div className="relative flex border-b border-gray-500 ">
            <img src={IPassword} alt="password" width={40} />
            <input
              type="password"
              placeholder="Masukan Password Anda"
              className="ml-5 outline-none text-lg bg-transparent w-[65%] sm:w-[70%]"
            />
            <button className="absolute right-1">
              <img src={IShow} alt="show/hidden" />
            </button>
          </div>
          {/* Forget Paswword */}
          <div className="flex justify-between font-serif text-sm mt-10">
            <div>
              <input type="checkbox" />
              <label htmlFor="" className="ml-1 text-[#008C74]">
                Remember Me!
              </label>
            </div>
            <button>
              <p>Forget Password?</p>
            </button>
          </div>
          {/* Button Kirim Data login */}
          <button
            onClick={() => handleSubmit()}
            // onClick={signInPage}
            className="flex justify-center bg-[#008C74] hover:bg-[#006d5b] text-white  rounded-lg w-full mt-5"
          >
            <p className="font-medium py-2 ">Sign In</p>
          </button>
          <div className="flex justify-between my-3">
            <div className="w-full mr-2 pt-4">
              <hr className="w-full border- border-black/40" />
            </div>
            <p>or</p>
            <div className=" w-full ml-2 pt-4">
              <hr className="w-full border-black/40" />
            </div>
          </div>
          <button
            // onClick={signUpPage}
            onClick={() => handleSubmit()}
            className="flex justify-center bg-[#008C74] hover:bg-[#006d5b] text-white  rounded-lg w-full mt-5"
          >
            <p className="font-medium py-2">Sign Up</p>
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;

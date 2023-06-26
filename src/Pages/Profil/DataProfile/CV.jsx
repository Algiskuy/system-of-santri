import { useNavigate } from "react-router-dom";
import Back from "../../../assets/icons/back.png";
const CV = () => {
  const navigate = useNavigate();
  return (
    <>
      <form action="" className="pt-[12vh]">
        <div className="flex ml-8">
          <button onClick={() => navigate(-1)}>
            <img src={Back} alt="" />
          </button>
          <span>CV</span>
        </div>
        <div className=" grid sm:grid-cols-2 text-center">
          <div>
            <h3 className="mt-2 py-2 font-serif font-bold">Technical Skill</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border-2 rounded-lg p-3"
            ></textarea>
          </div>
          <div>
            <h3 className="mt-2 py-2 font-serif font-bold">Pendidikan</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border-2 rounded-lg p-3"
            ></textarea>
          </div>
          <div>
            <h3 className="mt-2 py-2 font-serif font-bold">
              Personal Background
            </h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border-2 rounded-lg p-3"
            ></textarea>
          </div>
          <div>
            <h3 className="mt-2 py-2 font-serif font-bold">Pengalaman</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border-2 rounded-lg p-3"
            ></textarea>
          </div>
        </div>
        <div className="text-center my-5">
          <button
            onClick={() => navigate("/myprofil")}
            className="bg-[#2F8473] text-white py-2 px-24"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </>
  );
};
export default CV;

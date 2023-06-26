import { useNavigate } from "react-router-dom";
import { DataPortofolio } from "../../../Component/DataFake";
import Back from "../../../assets/icons/back.png";

const Portofolio = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* pembungkus */}
      <div className="px-4 pt-14 pb-12">
        <div className="py-5 flex">
          <button onClick={() => navigate(-1)}>
            <img src={Back} alt="back" />
          </button>
          <h1 className="text-2xl font-bold font-serif ">
            My recent portofolio
          </h1>
        </div>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DataPortofolio.map((item, index) => (
            <div key={index} className="p-5 bg-[#D9D9D9] ">
              <div className="">
                <img src={item.image} alt="image" />
              </div>
              <h1 className="text-center font-bold text-2xl font-serif mt-6 ">
                {item.judul}
              </h1>
              <p className="text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Portofolio;

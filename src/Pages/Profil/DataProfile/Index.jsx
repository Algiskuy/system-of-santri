import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Bawah */}
      <div className="grid grid-flow-row gap-4 mt-4">
        <Link to="/cv" className="w-full">
          <p className="bg-[#008C74] rounded-md text-center py-2 text-white font-bold text-lg ">
            CV
          </p>
        </Link>
        <Link to="/portofolio" className="w-full">
          <p className="bg-[#008C74] rounded-md text-center py-2 text-white font-bold text-lg ">
            Portofolio
          </p>
        </Link>
        <button className="bg-[#008C74] rounded-md text-center py-2 text-white font-bold text-lg ">
          Laporkan Masalah
        </button>
      </div>
    </>
  );
};

export default Index;

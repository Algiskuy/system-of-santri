import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Pages/Profile";
// import Kurikulum from "../Pages/Kurikulum";
import Presensi from "../Pages/Presensi";
import Dashboard from "../Pages/Dashboard";
import DataSantri from "../Pages/DataSantri";
import Navbar from "../Component/Navbar";
import NotFound from "../Pages/NotFound";
import NavPath from "./NavPath";
import NavRoute from "./NavRoute";
import MyProfile from "../Pages/Profil/MyProfil";
import CV from "../Pages/Profil/DataProfile/CV";
import Portofolio from "../Pages/Profil/DataProfile/Portofolio";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Path = () => {
  return (
    <div>
      <Router>
        <Navbar>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" exact element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/myprofile" element={<MyProfile />} />
            {/* <Route path="kurikulum" element={<Kurikulum />} /> */}
            <Route path="/presensi" element={<Presensi />} />
            <Route path="/data-santri" element={<DataSantri />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route
              path="kurikulum/*"
              element={
                <NavPath>
                  <NavRoute />
                </NavPath>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Navbar>
      </Router>
    </div>
  );
};

export default Path;

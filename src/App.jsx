import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Layout from "./components/layout/Layout";
import Signin from "./pages/user/Signin";
import Signup from "./pages/user/Signup";
import Demographic from "./pages/user/Demographic";
import Transparency from "./pages/user/Transparency";
import AccoutSetting from "./pages/user/AccoutSetting";
import Geotagging from "./pages/user/Geotagging";
import ProjectManagement from "./pages/user/ProjectManagement";
import SigninAdmin from "./pages/admin/Signin";
import AddProject from "./pages/admin/AddProject";
import AddEvent from "./pages/admin/AddEvent";
import Pending from "./pages/admin/Pending";
import AdminDashboard from "./pages/admin/Dashboard";
import SigninMain from "./pages/user/SigninMain";
import ResidentProfiling from "./pages/user/ResidentProfiling";
import GeotaggingAdmin from "./pages/admin/Geotagging";
import Setting from "./pages/admin/Setting";
import ManageResident from "./pages/admin/ManageResident";
import Official from "./pages/admin/Official";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Layout />}>
            {/* user routes */}
            <Route index element={<Dashboard />} />
            <Route path="/user/transparency" element={<Transparency />} />
            <Route path="/user/demographic" element={<Demographic />} />
            <Route path="/user/setting/:id" element={<AccoutSetting />} />
            <Route path="/user/geotagging" element={<Geotagging />} />
            <Route
              path="/user/ProjectManagement"
              element={<ProjectManagement />}
            />
            <Route
              path="/user/residentprofiling"
              element={<ResidentProfiling />}
            />
          </Route>
          <Route index element={<SigninMain />} />
          <Route path="/user/signin" element={<Signin />} />
          <Route path="/user/signup" element={<Signup />} />

          {/* admin routes */}
          <Route path="/admin/signin" element={<SigninAdmin />} />
          <Route path="/admin/official" element={<Official />} />
          <Route path="/admin/addproject" element={<AddProject />} />
          <Route path="/admin/addevent" element={<AddEvent />} />
          <Route path="/admin/pending" element={<Pending />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/geotagging" element={<GeotaggingAdmin />} />
          <Route path="/admin/setting" element={<Setting />} />
          <Route path="/admin/manageresident" element={<ManageResident />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

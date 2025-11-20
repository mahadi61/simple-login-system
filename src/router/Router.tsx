import { Route, Routes } from "react-router";
import DashboardLayout from "../dashboard/DashboardLayout";
import AdminUsers from "../pages/AdminUsers";
import AllUsers from "../pages/AllUsers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const Router = () => {
  return (
    <Routes>
      {/* login and reg page */}
      <Route path="/" element={<Home />}>
        <Route path="" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      {/* dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<AllUsers />} />
        <Route path="admin-users" element={<AdminUsers />} />
      </Route>
    </Routes>
  );
};

export default Router;

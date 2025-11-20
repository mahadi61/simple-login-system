import { Link, Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-gray-500 text-white p-5 flex flex-col">
          <h2 className="text-2xl text-center font-bold mb-6">Dashboard</h2>

          {/* Sidebar Buttons */}
          <Link
            to="/dashboard"
            className={`mb-3 p-3 rounded-md text-center ${
              location.pathname === "/dashboard"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            All Users
          </Link>
          <Link
            to="/dashboard/admin-users"
            className={`mb-3 p-3 rounded-md text-center ${
              location.pathname === "/dashboard/admin-users"
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Admin Users
          </Link>
        </div>

        {/* Right Content */}
        <div className="w-3/4 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

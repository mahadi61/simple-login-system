import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="w-full shadow-md py-4 px-8 flex justify-between items-center bg-white">
      {/* Logo or Title */}
      <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>

      {/* Right Side Buttons */}
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/*  Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-bold mb-8">Login</h2>

        <form className="w-80">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-md"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md"
          >
            Login
          </button>
        </form>
        <p>
          New user?{" "}
          <Link to={"/registration"} className="hover:underline text-blue-500">
            Sing Up Now
          </Link>
        </p>
      </div>

      {/* Image */}
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;

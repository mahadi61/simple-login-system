import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          // If backend returns error status (400, 500 etc)
          return res.json().then((err) => {
            throw new Error(err.message || "Something went wrong");
          });
        }
        return res.json();
      })
      .then((result) => {
        console.log("Login success:", result);
        alert("Login successful!");

        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="flex h-screen">
      {/* Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-bold mb-8">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-80">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mb-3">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 mb-3">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md"
          >
            Login
          </button>
        </form>

        <p className="mt-3">
          New user?{" "}
          <Link to="/registration" className="text-blue-500 hover:underline">
            Sign Up Now
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

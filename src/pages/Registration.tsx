import { useForm } from "react-hook-form";
import { Link } from "react-router";

// interface for form data
interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationForm>();

  const onSubmit = async (data: RegistrationForm) => {
    // Remove confirmPassword before sending to backend
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dob,
      gender: data.gender,
      password: data.password,
    };

    // send data to backend
    fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
        console.log("Success:", result);
        alert("Registration successful!");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert("Error: " + error.message);
      });
  };
  return (
    <div className="flex h-screen">
      {/* Left Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h2 className="text-3xl font-bold mb-8">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-80">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500 mb-3">{errors.fullName.message}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mb-3">{errors.email.message}</p>
          )}

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("phone", {
              required: "Phone number is required",
              minLength: { value: 10, message: "Enter a valid phone number" },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 mb-3">{errors.phone.message}</p>
          )}

          {/* Date of birth */}
          <input
            type="date"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("dob", { required: "Date of birth is required" })}
          />
          {errors.dob && (
            <p className="text-red-500 mb-3">{errors.dob.message}</p>
          )}

          {/* Gender */}
          <select
            className="w-full mb-1 p-3 border rounded-md"
            {...register("gender", { required: "Please select gender" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 mb-3">{errors.gender.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          {errors.password && (
            <p className="text-red-500 mb-3">{errors.password.message}</p>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-1 p-3 border rounded-md"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 mb-3">
              {errors.confirmPassword.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md"
          >
            Register
          </button>
        </form>

        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login Here
          </Link>
        </p>
      </div>

      {/* Image */}
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Registration;

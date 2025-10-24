import React, { useState, useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaUserPlus,
  FaImage,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("Profile updated:", user);
            e.target.reset();
            toast.success("✅ Register successful!");
          })
          .catch((err) => console.log("Profile update failed:", err));
      })
      .catch((error) => {
        console.log("Register error:", error.message);
        toast.error("❌ Invalid email or password!");
      });
  };

  const handleGoogleLogin = () => {
      signInWithGoogle()
      .then((result) => {
          console.log(result.user);
          toast.success("✅ Login successful!");
          navigate(from, {replace: true});
        })
        .catch((error) => {
          console.log(error);
          toast.error("❌ Invalid email or password!");
        });
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-200">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Create Account ✨
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaUser className="text-purple-500 mr-3" />
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full outline-none"
              />
            </div>
          </div>

      
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Email
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaEnvelope className="text-purple-500 mr-3" />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

   
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Profile Image URL
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaImage className="text-purple-500 mr-3" />
              <input
                type="url"
                name="photo"
                required
                placeholder="Paste your image URL"
                className="w-full outline-none"
              />
            </div>
          </div>


          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Password
            </label>
            <div className="flex items-center border rounded-lg p-3">
              <FaLock className="text-purple-500 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Create a password"
                className="w-full outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2.5 rounded-lg font-medium hover:opacity-95 hover:shadow-md transition-all"
          >
            <FaUserPlus /> Register
          </button>


          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              <FaGoogle /> Google
            </button>
            <button
              type="button"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <FaFacebook /> Facebook
            </button>
          </div>

 
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-600 font-semibold hover:underline"
            >
              Login Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

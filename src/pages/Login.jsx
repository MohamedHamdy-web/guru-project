import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
        setMessage("Login successful ✅");

        console.log("User:", data);
      } else {
        setMessage("Invalid email or password ❌");
      }
    } catch {
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center min-h-[85vh] px-4">
        <form onSubmit={handleLogin} className="w-full max-w-md text-center">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">Hello Again!</h2>

          <p className="text-sm text-gray-500 mb-6">
            Welcome Back You've Been Missed!
          </p>

          <p className="text-sm text-gray-500 mb-8">
            To login enter your email address and password
          </p>

          {/* Username */}
          <div className="relative mb-6 text-left">
            <label className="text-sm">Email or Username</label>
            <input
              type="text"
              className="w-full border-b border-orange-400 py-2 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative mb-6 text-left">
            <label className="text-sm">Password</label>
            <input
              type={show ? "text" : "password"}
              className="w-full border-b border-orange-400 py-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-0 top-8 text-orange-500 cursor-pointer"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Remember */}
          <div className="flex items-center gap-2 mb-8">
            <input type="checkbox" className="accent-orange-500" />
            <span className="text-sm">Remember me</span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gray-100 text-red-500 font-medium hover:bg-red-500 hover:text-white transition"
          >
            Login
          </button>

          {/* Message */}
          {message && <p className="mt-4 text-sm text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;

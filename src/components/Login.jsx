
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      const data = await res.json();
     
      

      if (data.accessToken) { 
        setToken(data.accessToken);
        setMessage("Login Success ✅");
      } else {
        setMessage("Login Failed ❌");
      }

    
      setTimeout(() => setMessage(""), 3000);

    } catch (error) {
      console.error(error);
      setMessage("Error occurred ❌");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-5 bg-[#eaeaea]">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <img 
            src="/logo.png"
            alt="logo" 
            className="w-6 h-6"
          />
          <span className="text-orange-500">Minimal</span>
          <span className="flex">
            <span className="text-pink-500">Shop</span>
            <span className="text-orange-500">ping</span>
          </span>
        </h1>

        <img 
          src="/User.png" 
          alt="profile" 
          className="w-6 h-6 rounded-full"
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center mt-24">
        <h2 className="text-2xl font-semibold text-gray-800">
          Hello Again!
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Welcome Back You've Been Missed!
        </p>

        <p className="text-gray-500 text-sm mt-6 mb-8 text-center">
          To login enter your username and password
        </p>

        <div className="w-[420px]">
          {/* Username */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="username"
              className="w-full bg-transparent border-b border-orange-400 py-2 outline-none placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Eye className="absolute right-2 top-2 text-orange-400 w-4 cursor-pointer" />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-transparent border-b border-orange-400 py-2 outline-none placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {show ? (
              <EyeOff
                onClick={() => setShow(false)}
                className="absolute right-2 top-2 text-orange-400 w-4 cursor-pointer"
              />
            ) : (
              <Eye
                onClick={() => setShow(true)}
                className="absolute right-2 top-2 text-orange-400 w-4 cursor-pointer"
              />
            )}
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="accent-orange-500 w-4 h-4"
            />
            <span className="text-gray-600 text-sm">
              Remember me
            </span>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="
              w-full py-3 rounded-full
              bg-white text-pink-500
              shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              transition duration-300
            "
          >
            Login
          </button>

        
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("Success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

        
          {token && (
            <p className="mt-2 text-sm text-gray-700 break-all">
              {/* Token: {token} */}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
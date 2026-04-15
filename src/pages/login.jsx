import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Input from "../components/input";

const Login = () => {
  const navigate = useNavigate();

  // 🔥 State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Handle Login
  const handleLogin = () => {
    if (!email || !password) {
      setError("⚠ Please enter email and password");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("⚠ No account found. Please signup first");
      return;
    }

    if (user.email !== email || user.password !== password) {
      setError("❌ Invalid email or password");
      return;
    }

    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-full relative overflow-hidden text-white">

      {/* 🎥 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[3px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* 💡 Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* 💪 Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md p-8 md:p-10 
          bg-white/10 backdrop-blur-xl 
          border border-white/20 
          rounded-2xl shadow-2xl"
        >

          {/* 🔥 Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-center 
          bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 
          bg-clip-text text-transparent mb-6">
            Welcome Back 💪
          </h1>

          {/* Inputs */}
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />

            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          {/* ❌ Error */}
          {error && (
            <p className="text-red-400 text-sm mt-3 text-center">
              {error}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-6">

            <button
              onClick={handleLogin}
              disabled={!email || !password}
              className="py-3 rounded-xl text-lg font-semibold 
              bg-gradient-to-r from-blue-500 to-cyan-400
              shadow-lg shadow-blue-500/30
              hover:scale-105 hover:shadow-blue-500/50 
              disabled:opacity-40 disabled:cursor-not-allowed
              active:scale-95
              transition duration-300"
            >
              Login →
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="py-3 rounded-xl text-lg font-semibold 
              bg-white/10 border border-white/20 
              hover:bg-white/20 transition"
            >
              Create Account
            </button>

          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Login;
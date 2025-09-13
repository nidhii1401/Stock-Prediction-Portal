import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { username, password };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userData
      );

      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log("Invalid Credentials!", error);
      setError("Invalid Credentials!");
    } finally {
      setLoading(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
        <div className="w-full max-w-lg rounded-xl bg-gray-800 p-8 shadow-xl md:p-10">
          <h3 className="mb-6 text-center text-3xl font-bold text-white">
            Login to your Account
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="text-danger mb-2">{error}</div>}

            {loading ? (
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                disabled
              >
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Logging in...</span>
              </button>
            ) : (
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

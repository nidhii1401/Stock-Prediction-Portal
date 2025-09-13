import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <header className="bg-gray-900 text-white shadow-lg py-4">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link
          className="flex items-center text-2xl font-bold tracking-tight cursor-pointer"
          to={"/"}
        >
          📈Stock Prediction Portal
        </Link>

        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <button
              className="btn rounded-full px-5 py-2 font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transform-gpu"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <Button
                text="Login"
                url="/login"
                class="btn rounded-full px-5 py-2 font-medium border border-blue-500 text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
              />
              &nbsp;
              <Button
                text="Register"
                url="/register"
                class="btn rounded-full px-5 py-2 font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transform-gpu"
              />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

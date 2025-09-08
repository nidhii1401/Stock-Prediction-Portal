import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/css/style.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;

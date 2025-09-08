import React from "react";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>

      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative z-10 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl text-center border border-blue-700 transform hover:scale-102 transition-all duration-300 ease-in-out">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4 tracking-tight">
            Stock Prediction Portal <span className="text-blue-300">📈</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
            Unlock the future of financial markets with our powerful Stock
            Prediction Portal. Leveraging cutting-edge machine learning
            techniques, including <strong>Keras</strong>,{" "}
            <strong>TensorFlow</strong>, and <strong>LSTM models</strong>, all
            seamlessly integrated within a robust{" "}
            <strong>Django framework</strong>. We provide data-driven forecasts
            by meticulously analyzing key market indicators like{" "}
            <strong>100-day and 200-day</strong> moving averages, empowering you
            to make informed and confident trading and investment decisions.
          </p>
          <Button
            text="Get Started"
            class="inline-block px-10 py-3 font-bold text-xl text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-full shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-teal-400 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-70 transform hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

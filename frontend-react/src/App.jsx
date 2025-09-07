import React from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-gray-800 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <Home/>
      </main>
      <Footer/>
    </div>
  );
};


export default App
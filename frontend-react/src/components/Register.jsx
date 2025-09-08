import React from 'react';

const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-lg rounded-xl bg-gray-800 p-8 shadow-xl md:p-10">
        <h3 className="mb-6 text-center text-3xl font-bold text-white">Create an Account</h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
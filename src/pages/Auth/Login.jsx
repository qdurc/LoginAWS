import React from "react";
import LoginImage from "../../assets/LoginImage.webp";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div
        className="w-1/2 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        <div className="text-white max-w-md text-center">
          <h1 className="text-6xl font-bold mb-6">
            Turn Your Ideas into Reality
          </h1>
          <p className="text-lg">
            Start for free and get attractive offers from the community
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-50">
        <div className="max-w-lg w-full px-6 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Login
          </h2>
          <p className="mb-6 text-gray-500 text-center">
            Welcome Back! Please enter your details.
          </p>

          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="explain@mail.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Buttons */}
            <div>
              <Link to="/home">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                >
                  Log in
                </button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                  <button
                    type="button"
                    className="w-full border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100"
                  >
                    Register
                  </button>
                </Link>
            </div>
            
            {/* Google Sign-in */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-sm text-gray-500">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100"
            >
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="Google"
                className="mr-2"
              />
              Sign In With Google
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Can't wait for you to join us!
          </p>
        </div>
      </div>
    </div>
  );
};

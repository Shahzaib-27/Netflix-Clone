import React from "react";

export default function MainSection() {
  return (
    <main className="bg-[url('/img3.jpeg')]  backdrop-blur-md min-h-screen flex items-center
     justify-center px-4">
      <div className="bg-black/80 backdrop-blur-md p-8 rounded-md w-full max-w-md
       text-white
      shadow-lg">
        
        <h1 className="text-2xl font-bold mb-2">
          Sign In
        </h1>
        
        <h2 className="text-sm text-gray-400 mb-6">
          Enter your email or phone number
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Email or mobile number"
                className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                required
            />

            <button
                className="bg-red-600 hover:bg-red-700 py-3 rounded font-semibold 
                transition-all duration-200 ease-in-out"
            >
                Continue
            </button>
        </form>

        {/* Help Dropdown */}
        <select className="mt-4 w-full bg-gray-800 text-sm p-2 rounded focus:outline-none">
          <option>Get Help</option>
          <option>Forgot email or mobile number?</option>
          <option>Learn more about sign-in</option>
        </select>

        {/* Footer Text */}
        <p className="text-xs text-gray-400 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 text-xs hover:underline">
          Learn more
        </a>

      </div>
    </main>
  );
}
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Text */}
        
        <p className="mb-6 text-sm text-white">
          Questions?{" "}
          <a href="#" className="underline hover:text-white">
            Contact us
          </a>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <a href="#" className="hover:underline text-white">FAQ</a>
          <a href="#" className="hover:underline text-white">Help Center</a>
          <a href="#" className="hover:underline text-white">Terms of Use</a>
          <a href="#" className="hover:underline text-white">Privacy</a>
          <a href="#" className="hover:underline text-white">Cookie Preferences</a>
          <a href="#" className="hover:underline text-white">Corporate Information</a>
        </div>

        {/* Bottom Text */}
        <span className="">
          <p className="mt-20  text-xs text-white flex text-center items-center justify-center">
              @ {new Date().getFullYear()}<h1 className="ml-1"> Netflix Pakistan</h1>
          </p>
        </span>

      </div>
    </footer>
  );
}
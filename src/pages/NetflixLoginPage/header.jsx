import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center">
          
          <button
            onClick={() => navigate("/")}
            className="focus:outline-none"
          >
            <img
              src="/Netflix_Logo_PMS.png"
              alt="Netflix"
              className="w-28 sm:w-32 md:w-40 cursor-pointer"
            />
          </button>

        </div>
      </nav>
    </header>
  );
}
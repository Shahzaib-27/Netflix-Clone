import { useNavigate } from "react-router-dom";

export default function HeaderFile() {
  const navigate = useNavigate();

  return (
    <header className="bg-black fixed top-0 w-full z-50 ">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">
        
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="focus:outline-none"
        >
          <img
            src="/img.png"
            alt="Netflix"
            className="w-28 sm:w-32 md:w-36 hover:opacity-80 transition"
          />
        </button>

        {/* Sign In Button */}
        <button
          onClick={() => navigate("/netflixloginpage")}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition"
        >
          Sign In
        </button>

      </nav>
    </header>
  );
}
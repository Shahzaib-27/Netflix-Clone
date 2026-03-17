import React from "react";

export default function MainFile() {
  return (
    <main className="bg-[url('/img3.jpeg')] text-white min-h-screen flex items-center justify-center px-4">
      
      <section className="max-w-3xl text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Unlimited movies, TV <br /> shows, and more
        </h1>
        
        <h5 className="text-lg sm:text-xl mb-4 font-medium">
          Starts at Rs 250. Cancel anytime.
        </h5>
        
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Ready to watch? Enter your email to create or <br />
          restart your membership.
        </p>

        {/* Call to Action Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full sm:flex-1 p-3 text-black outline-none placeholder:text-white border-1 border-white rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold transition w-full sm:w-auto text-white "
          >
            Get Started
          </button>
        </form>

      </section>
    </main>
  );
}
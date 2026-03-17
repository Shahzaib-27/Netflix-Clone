import React from "react";

function FooterData() {
  return (
    <footer className="bg-[#141414] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

          {/* CTA Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to watch? Enter your email to create or restart your membership.
            </h3>

            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full sm:w-[400px] px-4 py-3 rounded bg-[#333] placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out"
              />
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded font-semibold transition-all duration-300 ease-in-out">
                Get Started &gt;
              </button>
            </form>
          </div>

          {/* Contact Link */}
          <div className="text-center mb-12">
            <a
              href="#"
              target="_blank"
              className="text-white hover:underline"
            >
              Questions? Contact us.
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 text-gray-400 text-sm mb-12 text-white">
            <div className="flex flex-col space-y-3 ">
              <a href="#" className="hover:underline">FAQ</a> 
              <a href="#" className="hover:underline">Investor Relations</a>
              <a href="#" className="hover:underline">Privacy</a> 
              <a href="#" className="hover:underline">Speed Test</a >
            </div>
            <div className="flex flex-col space-y-3 ">
              <a href="#" className="hover:underline">Help Center</a>
              <a href="#" className="hover:underline">Jobs</a>
              <a href="#" className="hover:underline">Cookie Preferences</a>
              <a href="#" className="hover:underline">Legal Notices</a>
            </div>
            <div className="flex flex-col space-y-3 ">
              <a href="#" className="hover:underline">Account</a>
              <a href="#" className="hover:underline">Ways to Watch</a>
              <a href="#" className="hover:underline">Corporate Information</a>
              <a href="#" className="hover:underline">Only on Netflix</a>
            </div>
            <div className="flex flex-col space-y-3 ">
              <a href="#" className="hover:underline">Media Center</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </div>
          </div>

          {/* Language Selector */}
          <div className="mb-12 text-center">
            <select className="bg-[#333] text-white px-4 py-2 rounded focus:outline-none">
              <option value="">Select your Language</option>
              <option value="pk">Pakistan</option>
              <option value="in">India</option>
              <option value="us">United States</option>
            </select>
        </div>

          {/* Bottom Text */}
          <div className="text-gray-500 text-center text-sm">
            <h3 className="mb-2">Netflix Pakistan</h3>
            <p>
              @ {new Date().getFullYear()} This page is protected by Google reCAPTCHA to ensure you're not a bot. 
              <a href="#" className="hover:underline text-white"> Learn more.</a>
            </p>
          </div>
        </div>
        
    </footer>
  );
}

export default FooterData;
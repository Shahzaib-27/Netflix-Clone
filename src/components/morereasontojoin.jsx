import React from "react";

export default function MoreReasonsToJoin() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: "fa-solid fa-tv",
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favorites easily and always have something to watch.",
      icon: "fa-regular fa-circle-down",
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: "fa-solid fa-swatchbook",
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: "fa-solid fa-user-tie",
    },
  ];

  return (
    <section className="py-16 bg-black text-white mt-10 mb-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12">More Reasons to Join</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-[linear-gradient(180deg,#0f0c29_0%,#1a1a2e_100%)] h-[350px]  p-6 rounded-lg 
              flex flex-col justify-center items-center text-center hover:bg-gray-800 transition-all duration-300 ease-in-out "
            >
              <i className={`${reason.icon} text-4xl mb-4 text-white`}></i>
              <h5 className="text-xl font-semibold mb-2">{reason.title}</h5>
              <p className="text-gray-300 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
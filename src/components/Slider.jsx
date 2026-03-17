import React, { useRef } from "react";

export default function Slider() {
  const sectionRef = useRef(null);

  const handleScrollLeft = () => {
    sectionRef.current.scrollBy({ left: -700, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    sectionRef.current.scrollBy({ left: 700, behavior: "smooth" });
  };

  const movies = [
    { src: "animal.jpg", alt: "Movie 1" },
    { src: "azaad.jpg", alt: "Movie 2" },
    { src: "war 2.jpg", alt: "Movie 3" },
    { src: "trap.jpg", alt: "Movie 4" },
    { src: "jawan.jpg", alt: "Movie 5" },
    { src: "saiyaara.jpg", alt: "Movie 6" },
    { src: "tehran.jpg", alt: "Movie 7" },
    { src: "final destinations.jpg", alt: "Movie 8" },
    { src: "alice in borderland.jpg", alt: "Movie 9" },
    { src: "son of sardaar 2.jpg", alt: "Movie 10" },
  ];

  return (
    <section className="trending py-10 bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>

        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700/70 text-white p-4 rounded-full hover:bg-gray-800 z-20"
            aria-label="Scroll left"
          >
            &#10094;
          </button>

          {/* Movie Slider */}
          <div
            ref={sectionRef}
            className="mr-13 ml-4 mb-25  flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth px-10  element"
          >
            {movies.map((movie, idx) => (
              <div
                key={idx}
                className=" relative flex-shrink-0 w-[200px] sm:w-[180px] md:w-[220px] lg:w-[200px]    "
              >
                <img
                  src={movie.src}
                  alt={movie.alt}
                  className="w-full h-[300px] sm:h-[260px] md:h-[280px] lg:h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-all ease-in-out duration-300 scrollbar-none element"
                />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700/70 text-white p-4 rounded-full hover:bg-gray-800 z-20"
            aria-label="Scroll right"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
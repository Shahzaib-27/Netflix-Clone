import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Netflix?",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning 
      TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
      You can watch as much as you want, whenever you want without a single 
      commercial, all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    {
      question: "How much does Netflix cost?",
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.`,
    },
    {
      question: "Where can I watch?",
      answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection.`,
    },
    {
      question: "How do I cancel?",
      answer: `Netflix is flexible. There are no pesky contracts and no commitments. 
      You can easily cancel your account online in two clicks. There are no cancellation fees. Start or stop your account anytime.`,
    },
    {
      question: "What can I watch on Netflix?",
      answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      question: "Is Netflix good for kids?",
      answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#141414] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#222] rounded-md overflow-hidden hover:bg-[#333]" 
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-6  text-white text-lg font-medium  transition-all duration-300 ease-in-out focus:outline-none cursor-pointer"
                >
                  {faq.question}
                  <span className={`text-2xl font-bold transition-all duration-300 ease-in-out
                    ${openIndex === index ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                <div
                  className={`px-6 pb-5 text-gray-300 text-base transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p>{faq.answer}</p>
                </div>
                
              </div>
            ))}
          </div>
          
        </div>
    </section>
  );
}
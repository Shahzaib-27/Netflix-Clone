import React from "react";

import HeaderData from "../components/header.jsx";
import MainSecData from "../components/main_section.jsx";
import FooterAPP from "../components/Footer.jsx";
import Slider from "../components/Slider.jsx";
import MoreReasonToJoin from "../components/morereasontojoin.jsx"
import FrequentlyAskedQuestionsPage from "../components/FrequentlyAskedQuestions.jsx"

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeaderData />
      <MainSecData />
      <Slider />
      <MoreReasonToJoin />
      <FrequentlyAskedQuestionsPage />
      <FooterAPP />
    </div>
  );
}
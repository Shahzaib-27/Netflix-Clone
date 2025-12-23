import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutData from "./Components/Layout/Layout.jsx";

export default function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LayoutData/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

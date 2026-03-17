
import HomePage from "./components/Home.jsx"

import  NetflixLoginPage from "./pages/NetflixLoginPage/index.jsx"


import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/netflixloginpage" element={<NetflixLoginPage />} />
        </Routes> 
       
    </BrowserRouter>
  )
}

export default App
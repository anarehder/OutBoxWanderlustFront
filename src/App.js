import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import TicketsPage from "./pages/TicketsPage";
import { mainColor } from "./constants/colors.js";
import { CityContext } from "./contexts/CityContext.js";
import { useState } from "react";

export default function App() {
  const [city, setCity] = useState(CityContext);

  return (
    <PagesContainer>
      <CityContext.Provider value={[city, setCity]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tickets" element={<TicketsPage />} />
          </Routes>
        </BrowserRouter>
      </CityContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.div`
  background-color:  ${mainColor};
  width: 100%;
  height: 100vh;
`
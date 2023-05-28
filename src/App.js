import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import { mainColor } from "./constants/colors.js"

export default function App() {

  return (
    <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.div`
  background-color:  ${mainColor};
  width: 100%;
  height: 100vh;
  padding: 25px;
`
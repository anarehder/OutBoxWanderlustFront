import styled from "styled-components";
import { textPrimaryColor } from "../../constants/colors.js"

export const HomePageContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${textPrimaryColor};
  }
`
import styled from "styled-components";
import { textSecondaryColor, mainColorButton, mainColorLight } from "../../constants/colors.js";

export const TicketsPageContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${textSecondaryColor};
  font-size: 40px;
`

export const GifContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
  }
`
export const TicketsAll = styled.div  `
  margin-top: 50px;
  display: flex;
  gap: 25px;
  font-size: 25px;
  text-align: center;
`

export const Tickets = styled.div  `
  width: calc(100vw - 275px);
  gap: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OneTicket = styled.div  `
display: flex;
flex-direction: column;
width: 300px;
  img {
    width: 200px;
    margin: 0 auto;
  }
  h2 {
    margin-top: 15px;
    text-align: center;
  }
`

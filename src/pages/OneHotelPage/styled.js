import styled from "styled-components";
import { textSecondaryColor } from "../../constants/colors.js";

export const TicketsPageContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${textSecondaryColor};
  font-size: 40px;
  padding-bottom: 15px;
  button {
    position: fixed;
    top: 10%;
    right: 25%;
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Imagens = styled.div`
  display: flex;
  gap: 25px;
  img {
    width: 250px;
    margin: 0 auto;
  }
`

export const OneTicket = styled.div  `
  display: flex;
  gap:40px;
  text-align: start;
  div{
    width: 350px;
    border: 2px solid ${textSecondaryColor};
    padding: 10px;
  }
  h2 {
    margin-top: 15px;
  }
`

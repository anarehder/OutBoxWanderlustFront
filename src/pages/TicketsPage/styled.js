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
  justify-content: flex-start;
  align-items: center;
  div{
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
  }
`

export const Filter = styled.div  `
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`
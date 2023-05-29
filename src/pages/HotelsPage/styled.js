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
  padding-bottom: 15px;
`

export const Voltar = styled.button`
  position: fixed;
  top: 10%;
  right: 25%;
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
    margin-top: 5px;;
    text-align: center;
  }
`

export const Filter = styled.div  `
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  input{
    width: 200px;
    margin: 20px;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: ${mainColorLight};
    border: none;
    border-radius: 3px;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${mainColorButton};
    margin-top: -4px;
  }
`
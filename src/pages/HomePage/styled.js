import styled from "styled-components";
import { textPrimaryColor } from "../../constants/colors.js"

export const HomePageContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Dosis', sans-serif;
  font-size: 25px;
  padding-bottom: 15px;
  h1 {
    color: ${textPrimaryColor};
  }
  div{
    flex-direction: row;
    gap: 10px;
  }
  button{
    margin-left: 15px;
    font-size: 20px;
    line-height: 25px;
  }
  select{
    width: 350px;
    margin: 40px 0 10px 0;
    font-size: 20px;
    line-height: 25px;
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


export const HowToUseContainer = styled.div `
  display: flex;
  margin-top: 30px;
  color: ${textPrimaryColor};
  text-align: center;

  div {
    margin: 10px;
    width: 250px;
  }
  img {
    width: 250px;
    height: 200px;
  }
`
import styled  from "styled-components";

export const SwitchContanier = styled.div`
position: fixed;
width: 100%;
background-color: ${({theme})=> theme.bcg};
transition: 0.5s all ease-in;
transform: translateX(-1130px);
`
export const SwitchWrapper = styled.div`
width: 100%;

transform: translateY(-630px);
margin-left: 50px;
max-width: 1300px;
margin: auto;
padding-top: 1rem;
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;

`
export const SwitchBGC = styled.div`
position: fixed;
width: 65px;
height: 45px;
border-radius: 30px;
background-color:  ${({theme})=> theme.text};
transition: 1s all ease-in;
`
export const ButtonSwitch= styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 5px;
  left: ${({ position }) => (position ? "27px" : "2px")};
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background: ${({theme})=> theme.bcg};
  transition: 0.4s all ease-in;
  outline: none;
  
  .icon {
    fill: ${({theme})=> theme.text};
    width: 100%;
    height: 100%;
  }
`
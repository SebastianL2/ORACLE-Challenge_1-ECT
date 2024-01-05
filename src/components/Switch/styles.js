import styled  from "styled-components";

export const SwitchContanier = styled.div`
position: absolute;
width: 100%;

transition: 0.5s all ease-in;
@media (max-width: 820px) {
    margin-left: 0;
    position: static;
  }
@media (max-width: 768px) {
    margin-left: 0;
    position: static;
  }


@media (max-width: 480px) {
    margin-left: 0;
    position: static;
}
`
export const SwitchWrapper = styled.div`



margin-left: 50px;

margin: auto;
padding-top: 1rem;
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;
@media (max-width: 820px) {
   
    position: static;
  
    margin: auto;
    margin-left: 90px;
    max-width: none;
    padding-top: 1.5rem;
    flex-direction: column;
  }
@media (max-width: 768px) {
    position: static;

    margin: auto;
    margin-left: 90px;
    max-width: none;
    padding-top: 1.5rem;
    flex-direction: column;
}
@media (max-width: 480px) {
    
    position: static;
   
    margin: auto;
    margin-left: 50px;
    max-width: none;
    padding-top: 1rem;
    
}


`
export const SwitchBGC = styled.div`
  position: fixed;
  width: 65px;
  height: 45px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.text};
  transition: 1s all ease-in;

  @media (max-width: 768px) {
    
    position: static;
    
    margin-left: 0;
    margin-top: -21px;
    max-width: none;
    padding-top: 19px;
    
    width: 63px;
    height: 15px;
    border-radius: 30px;
  }

  @media (max-width: 480px) {
    
    width: 35px;
    height: 35px;
    position: static;
    
    margin-left: 0;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
    width: 35px;
    height: auto;
    border-radius: 30px;
}

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
  @media (max-width: 768px) {
    position: absolute;
    width: 37px;
    height: 37px;
    top: 20px;
    transform: translateX(104px);
    .icon {
    
    }
  }
  @media (max-width: 480px) {
    position: relative;
    width: 25px;
    height: 25px;
    top: 10px;
    transform: translateX(34px);
    .icon {
      
   
     width: 15px;
     height: 15px;
    }
  }
  @media (max-width: 393px) {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;

    .icon {
    
    }
  }

`
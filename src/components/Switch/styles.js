import styled  from "styled-components";

export const SwitchContanier = styled.div`
position: fixed;
width: 100%;
height: auto;
background-color: ${({theme})=> theme.bcg};
transition: 0.5s all ease-in;
margin-left: -1130px;

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
width: 100%;

transform: translateY(-630px);
margin-left: 50px;
max-width: 1300px;
margin: auto;
padding-top: 1rem;
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;
@media (max-width: 820px) {
   
    position: static;
    transform: translateY(-1230px);
    margin: auto;
    margin-left: 90px;
    max-width: none;
    padding-top: 1.5rem;
    flex-direction: column;
  }
@media (max-width: 768px) {
    position: static;
    transform: translateY(-1065px);
    margin: auto;
    margin-left: 90px;
    max-width: none;
    padding-top: 1.5rem;
    flex-direction: column;
}
@media (max-width: 480px) {
    
    position: static;
    transform: translateY(-660px);
    margin: auto;
    margin-left: 50px;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
}
@media (min-width: 413px) and (max-width: 414px) {
    
    position: static;
    transform: translateY(-897px);
    margin: auto;
    margin-left: 58px;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
}
@media (min-width: 389px) and (max-width: 390px) {
    position: static;
    transform: translateY(-845px);
    margin: auto;
    margin-left: 58px;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
}
@media (min-width: 392px) and (max-width: 393px) {
    position: static;
    transform: translateY(-853px);
    margin: auto;
    margin-left: 58px;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
}
@media (min-width: 340px) and (max-width: 360px) {
    position: static;
    transform: translateY(-733px);
    margin: auto;
    margin-left: 46px;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
}

@media (min-width: 411px) and (max-width: 412px) {
    
    position: static;
    transform: translateY(-917px);
    margin: auto;
    margin-left: 58px;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
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
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
    width: 53px;
    height: 15px;
    border-radius: 30px;
  }
  @media (max-width: 768px) {
    
    position: static;
    
    margin-left: 0;
    max-width: none;
    padding-top: 1rem;
    flex-direction: column;
    width: 53px;
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
    
    transform: translateX(-10px);
    .icon {
    
    }
  }
  @media (max-width: 480px) {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;

    transform: translateY(10px);
    transform: translateX(-10px);
    .icon {
    
    }
  }
  @media (max-width: 393px) {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;

    transform: translateY(-800px);
    transform: translateX(-10px);
    .icon {
    
    }
  }

`
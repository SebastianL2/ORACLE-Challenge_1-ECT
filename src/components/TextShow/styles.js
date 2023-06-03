import styled, { keyframes} from 'styled-components'
/*const  zoomInOut= keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
`*/

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
const pulseAnimation2 = keyframes`
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
  }
`;
export const Rectangle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 600px;
  left: 70%;
  top: 50px;
  transform: translateY(-5%);
  background:  ${({theme})=> theme.bcg};
  box-shadow: 0px 2px 32px -8px ${({theme})=> theme.rgbe};
  border-radius: 32px;
  
  > img {
    
    width: 286px;
    height: 304px;
    left: 1032px;
    top: 283px;
    
    
  }
  >.ppl{
    width: 306px;
    height: 48px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: ${({theme})=> theme.text};
   
  }

  @media (max-width: 820px) {
    width: 600px;
    height: 340px;
    left: 50%;
    top: 100px;
    transform: translateX(-50%) translateY(-5%);

    > img {
      width: 240px;
      height: 256px;
    }

    > .ppl {
      width: 250px;
    }
  }
  @media (max-width: 768px) {
    width: 580px;
    height: 300px;
    left: 50%;
    top: 90px;
    transform: translateX(-50%) translateY(-5%);

    > img {
      width: 240px;
      height: 256px;
    }

    > .ppl {
      width: 250px;
    }
  }
  @media (max-width: 480px) {
    width: 375px;
    height: 164px;
    left: 50%;
    top: 280px;
    transform: translateX(-50%) translateY(-5%);
    border-radius: 2px;
    align-items: initial;
    > img {
      width: 210px;
      height: 103px;
      transform: translateY(35%);
      margin-left: -10px;
    }

    > .ppl {
      width: 210px;
      margin-left: 160px;
      transform: translateY(-160%);

    }

  
  }
`

export const Out = styled.p`

 position: relative;
   >.ot{ 
    
    width: 336px;
    height: 781px;
    left: 1032px;
    top: 72px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    /* or 36px */


    /* Gray/gray-400 */

    color: #495057;

   }
`
export const Div = styled.div`

  width: 340px;
  height: 600px;
  left: 70%;
  top: 50px;

  .btn {
    box-sizing: border-box;
    display: flex;
    padding: 24px;
    gap: 8px;
    align-items: center;
    width: 106px;
    height: 9px;
    justify-content: center;
    margin-bottom: 131px;
    margin-left: 122px;
    margin-right: 32px;
    border: 1px solid ${({theme})=> theme.text};
    border-radius: 24px;
    background: ${({theme})=> theme.bcg2};
    &:active {
      animation: ${pulseAnimation} 0.3s linear;
    }
  }

  .outs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 276px;
    height: 471px;
    left: 1032px;
    top: 72px;
    background:  ${({theme})=> theme.bcg};
    flex: 1;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 150%;
    text-align: left;
    margin-top: 32px;
    margin-bottom: 22px;
    margin-left: 32px;
    margin-right: 32px;
    color: ${({theme})=> theme.text};
    resize: none;
    border: none;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
    border-color: none;
 }
  ::placeholder {
    color: #0A3871;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  @media (max-width: 820px) {
    width: 500px;
    height: 300px;
    left: 500px;
    

    .btn {
      width: 90px;
      margin-bottom: 100px;
      margin-left: 210px;
    }

    .outs {
      width: 470px;
      height: 200px;
      left: 500px;
      top: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 300px;
    left: 50%;
    

    .btn {
      top: 20px;
      width: 90px;
      margin-bottom: 30px;
      margin-left: 190px;
    }

    .outs {
      width: 470px;
      height: 200px;
      left: 50%;
     
      margin-top: 20px;
      margin-bottom: 10px;
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 375px;
    height: 164px;
    left: 50%;
    top: 280px;
    transform: translateX(10%) translateY(-5%);


    .btn {
      width: 90px;
      height: 1px;
      font-size: 15px;
      margin-bottom: 70px;
      margin-left: 240px;
      transform: scale(0.7); /* Ajusta el valor según tus necesidades */
      animation: ${pulseAnimation2} 0.3s linear;
    }
  
    .outs {
      width: 360px;
      height: 100px;
      
      
      margin-top: 20px;
      margin-bottom: 1px;
      margin-left: -30px;
      margin-right: 10px;
      font-size: 18px;
    }
  }

`
export const Mensaje = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 186px;
  height: 58px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: ${({theme})=> theme.text};
  margin-top: 10px;
  margin-bottom: 0px;

  @media (max-width: 480px) {
    margin-bottom: 0px;
    transform: translateY(-200%);
    font-size: 14px;
    margin-left: 160px;
   
  }
`
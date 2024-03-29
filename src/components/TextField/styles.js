import styled, { keyframes} from 'styled-components'

const shakeAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-3px); }
  40% { transform: translateY(3px); }
  60% { transform: translateY(-3px); }
  80% { transform: translateY(0); }
  100% { transform: translateY(0); }
`;


export const Aviso = styled.div`
  /*animacion*/
 
  color:  ${({theme})=> theme.text};
  position: fixed;
  display: flex;
  align-items: center; /* Alinea verticalmente los elementos */
  left: 250px;
  width: 205px;
  height: 18px;
  top: 509px;
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Open Sans', sans-serif;
  gap: 8px;
  line-height: 19px;
  animation: ${shakeAnimation} 0.7s infinite;
  animation-delay: 5s;

  > img {
    align-self: center; /* Alinea la imagen verticalmente al centro */
    width: 16px;
    height: 16px;
    border-radius: 80px;
    background: white;
    gap: 8px;
  }
  @media (max-width: 480px) {
    left: 10px;
    width: 100%;
    height: auto;
    padding: 5px;
    font-size: 12px;
    line-height: 120%;
    margin-top: -466px;
    margin-left: 75px;
    animation-delay: initial;

    > img {
      width: 14px;
      height: 14px;
    }
  }
  /* Estilos para dispositivos móviles */
  @media (max-width: 767px) {
    left: 10px;
    width: 100%;
    height: auto;
    padding: 5px;
    font-size: 12px;
    line-height: 120%;
    
    animation-delay: initial;

    > img {
      width: 14px;
      height: 14px;
    }
  }

  /* Estilos para tablets */
  @media (min-width: 768px) and (max-width: 1023px) {
    left: 289px;
    width: 180px;
    font-size: 12px;
    line-height: 120%;

    > img {
      width: 14px;
      height: 14px;
    }
  }
`
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


export const Button = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px;
    gap: 24px;
    text-align: center;
    position: fixed;
    margin-top: -20px;
    left: 240px;
    top: 550px;
    

        >.Btn1{
            
            color: ${({theme})=> theme.bcg};
            flex-direction: row;
            align-items: flex-start;
            gap: 8px;
            border: none;
            width: 228px;
            height: 57px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-family: 'Open Sans', sans-serif;
            font-size: 19px;
            line-height: 19px;
            
            /* Dark blue/dark-blue-300 */
          
            background:  ${({theme})=> theme.text};
            border-radius: 24px;
        
            /* Inside auto layout */
            text-align: center;
            flex: none;
            order: 0;
            flex-grow: 0;
            &:active {
            animation: ${pulseAnimation} 0.3s linear;
            }
            &:hover{
              cursor: pointer;
            }
 
        }
        >.Btn2{
            
        box-sizing: border-box;
        
        /* Auto layout */
        width: 228px;
        height: 57px;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        /* Dark blue/dark-blue-300 */

        color:  ${({theme})=> theme.text};
        flex-direction: row;
        align-items: flex-start;
        
        gap: 8px;
        font-size: 19px;
       
        
        /* Light gray */
        
        background:  ${({theme})=> theme.bcg};
        /* Dark blue/dark-blue-300 */
        
        border: 2px solid ${({theme})=> theme.text};
        border-radius: 24px;
        
        /* Inside auto layout */
        text-align: center;
        flex: none;
        order: 1;
        flex-grow: 0;
        &:active {
        animation: ${pulseAnimation} 0.3s linear;
        }
        &:hover{
              cursor: pointer;
        }
        }

    @media (max-width: 820px) {
    left: 220px;
    top: 450px;

    > .Btn1,
    > .Btn2 {
      width: 180px;
      height: 45px;
      font-size: 14px;
      line-height: 17px;
      padding: 16px;
      gap: 6px;
    }
  }

  /* Estilos para pantallas más pequeñas */
  @media (max-width: 768px) {
    left: 120px;
    top: 450px;
    
    > .Btn1,
    > .Btn2 {
      width: 180px;
      height: 45px;
      font-size: 14px;
      line-height: 17px;
      padding: 16px;
      gap: 6px;
      margin-left: 40px;
    }
  }

  /* Estilos para pantallas aún más pequeñas */
  @media (max-width: 480px) {
    left: 18px;
    top: 80px;
    gap: 1px;
    > .Btn1{
      width: 120px;
      height: 40px;
      font-size: 12px;
      line-height: 14px;
      padding: 5px;
    }
    > .Btn2 {
      width: 120px;
      height: 40px;
      font-size: 12px;
      line-height: 14px;
      padding: 5px;
    
      
    }
  }

`
export const Div = styled.div`

`


export const Textarea = styled.div`
  position: fixed;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  width: 577px;
  height: 288px;
  left: 240px;
  top: 168px;
 >textarea{ 
  width: 577px;
  height: 300px;
  outline: none;
  background:  ${({theme})=> theme.bcg};
  font-weight: 400;
  font-size: 25px;
  line-height: 150%;
  color: ${({theme})=> theme.text};
  resize: none;
  border: none;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
 }
  ::placeholder {
    color: ${({theme})=> theme.text};
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

  /* Estilos para pantallas más pequeñas */
 
  @media (max-width: 768px) {
    width: 90%;
    height: 200px;
    margin-left: 30px;
    top: 120px;
    font-size: 18px;
    line-height: 130%;
  
  }
  @media (max-width: 820px) {
    width: 90%;
    height: 30px;
    left: 50px;
    top: 530px;
    font-size: 18px;
    line-height: 130%;
  }

  /* Estilos para pantallas aún más pequeñas */
  @media (max-width: 480px) {
    width: 90%;
    height: 150px;
    left: 10px;
    top: 80px;
    font-size: 16px;
    line-height: 120%;
    margin-top: 70px;
    >textarea{ 
    width: 370px;
    margin-left: -39px;
    margin-top: -15px;
    height: 130px;
    outline: none;
    
    font-weight: 400;
    font-size: 19px;
    line-height: 150%;
    
    resize: none;
    border: 0.1px solid #ccc; /* Ajusta el estilo del borde según tus necesidades */
    border-radius: 2px; 
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
  }
  }

                  
`
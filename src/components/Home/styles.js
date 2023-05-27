import styled from 'styled-components'

export const Container = styled.div `

  position: relative;
  width: 100%;
  height: 100vh;
  
  
  overflow: auto;
  background: #F3F5FC;
  @media (max-width: 767px) {
    width: 100%;
  }
  /* Estilos para dispositivos móviles */
  @media (max-width: 767px) {
    height: 100vh;
  }

  /* Estilos para tablets */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
  }

`
export const Header= styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  position: fixed;
  width: 120px;
  height: 48px;
  left: 40px;
  top: 40px;

  
  @media (max-width: 820px) {
    width: 100px;
    height: 40px;
    left: 20px;
    top: 20px;

    > img {
      width: 80px;
      height: 32px;
    }
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 40px;
    left: 20px;
    top: 20px;

    > img {
      width: 80px;
      height: 32px;
    }
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 32px;
    left: 10px;
    top: 10px;

    > img {
      width: 60px;
      height: 24px;
    }
  }
  
  @media (max-width: 375px) {
    width: 60px;
    height: 32px;
    left: 10px;
    top: 10px;

    > img {
      width: 60px;
      height: 24px;
    }
  }

`

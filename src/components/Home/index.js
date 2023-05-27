import React from 'react'
import { Container,Header } from './styles'
import aluraIcon from '../../imgs/Logo.svg';
export const Home = () => {
  return (
    <Container>
        
       <Header>
       <img src={aluraIcon} alt="alura Logo" />
       </Header>
       
    </Container>
  )
}

import React from 'react'
import { Container,Header } from './styles'
import aluraIcon from '../../imgs/Logo1.svg';
import aluraIcon2 from '../../imgs/Logo2.svg';
import { BsGithub } from 'react-icons/bs';
import { Switch } from '../Switch';
export const Home = ({theme,setTheme}) => {
  
  let imgn = theme === "light" ?  <img src={aluraIcon} alt="alura Logo" /> : <img src={aluraIcon2} alt="alura Logo" />;
  
  return (
    <Container>
        
       <Header>
        {imgn}
        
       </Header>
    
       <Switch theme={theme} setTheme={setTheme}/>
   
      
    </Container>
  )
}

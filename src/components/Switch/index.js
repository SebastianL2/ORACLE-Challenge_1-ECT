import React, { useState } from 'react';
import {SwitchContanier,SwitchWrapper,SwitchBGC,ButtonSwitch} from './styles';
import {BsFillBrightnessLowFill,BsFillMoonFill} from "react-icons/bs";

export const Switch = ({theme,setTheme}) => {
  const [position, setPosition] = useState();

  const changePosition = () =>{
   setPosition(!position);
  }; 
  const changeTheme = () =>{
    if (theme ==='light') {
      setTheme('dark');
      changePosition();
    }else{
      setTheme('light');
      changePosition();
    }
   }; 

  return (
    <SwitchContanier>
      <SwitchWrapper>
        <SwitchBGC>
          <ButtonSwitch
          onClick={()=> changeTheme()}
          position={position}
          ><BsFillBrightnessLowFill className="icon" /></ButtonSwitch>
        </SwitchBGC>
      </SwitchWrapper>
    </SwitchContanier>
  )
}

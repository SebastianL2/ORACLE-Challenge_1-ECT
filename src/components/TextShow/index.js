import React from 'react'
import {Rectangle,Mensaje} from './styles';
import rpIcon from '../../imgs/Muñeco.svg';
import { Output } from './Output';
import { Output2 } from './Output2';
export const TextShow = ({texto,etiqueta,validacion}) => {
 
  console.log(etiqueta);

  return (
    <Rectangle>
      {texto === "" ||validacion===true ? (//if
        <>
          <img src={rpIcon} alt="!aviso" />
          <Mensaje>Ningún mensaje fue encontrado</Mensaje>
          <p className='ppl'>Ingresa el texto que desees encriptar o desencriptar 🗳️.</p>
          {validacion=null}
        </>
      ) : (//else
       etiqueta===1 ? (//if
          <>
           <Output entrada={texto}></Output>
          </>
        ) : (//else
          <Output2 entrada={texto}></Output2>
        )
      
      )}
        
    </Rectangle>
    
   

      
  
  );
  
};


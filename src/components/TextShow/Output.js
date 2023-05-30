import React, { useState } from 'react'
import { Div } from '../TextShow/styles';



export const Output=({entrada}) =>{
  const [copy, setCopy] = useState('Copiar');
 
  const handleCopyClick = () => {
    navigator.clipboard.writeText(entrada)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch((error) => {
        console.error('Error al copiar el texto:', error);
      });
      setCopy('Copiado!');
  };
        const reemplazos = {
                e: 'enter',
                i: 'imes',
                a: 'ai',
                o: 'ober',
                u: 'ufat'
              };
              
              
              const reemplazarTexto = (entrada) => {
                var palabrasClave = /(enter)|(imes)|(ai)|(ober)|(ufat)/i;
                if (palabrasClave.test(entrada)) {
                  
                  return "El texto ya se encuentra encriptado"
                }else{
                  return entrada.replace(/[aeiou]/g, (letra) => reemplazos[letra]);
                }

                
              };

              entrada = reemplazarTexto (entrada);
        return (
        <Div>
         <textarea readOnly className='outs' value={entrada}></textarea>
         <button className='btn' onClick={handleCopyClick}>{copy}</button>
         
        </Div>
         
        );
        
}

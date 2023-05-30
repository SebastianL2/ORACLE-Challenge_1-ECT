import React, { useState } from 'react'
import { Div } from './styles';

export const Output2 = ({entrada}) => {

  
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
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u'
  };
  
  
  const reemplazarTexto = (entrada) => {
    var palabrasClave = /(enter)|(imes)|(ai)|(ober)|(ufat)/i;
    if (palabrasClave.test(entrada)) {
      return entrada.replace(/(enter)|(imes)|(ai)|(ober)|(ufat)/g, (letra) => reemplazos[letra]);
      
    }else{
      return "El texto ya se encuentra desencriptado"
    }
    
  };

  entrada = reemplazarTexto (entrada);
return (
<Div>
<textarea readOnly className='outs' value={entrada}></textarea>
<button className='btn'  onClick={handleCopyClick}>{copy}</button>



</Div>

);
}

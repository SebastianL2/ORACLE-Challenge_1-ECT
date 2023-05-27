import React, {  useState } from 'react';
import { Div, Button, Aviso,Textarea } from './styles';
import avIcon from '../../imgs/Avt.svg';
import { TextShow } from '../TextShow';
export const TextField = () => {
  const [texto, setTexto] = useState('');
  const [entrada, setEntrada] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [etiqueta, setEtiqueta] = useState('');

  const handleButtonClick = (buttonId) => {
    setEtiqueta(buttonId);

    if (/[A-ZÁÉÍÓÚÜáéíóúü]/.test(texto)) {
     
      setEntrada(''); // Restablecer entrada si el texto es inválido
      console.log(texto + " inválido");
      return setShowMessage(true);
    } else {
      
      setEntrada(texto); // Guardar el contenido de texto en entrada
      console.log(texto +" válido");
      return setShowMessage(false);
    }
  };

  return (
    <Div id='msjDiv'>
     
        <Textarea>
          <textarea
            type="text"
            name='texto'
            placeholder="Ingrese el texto aquí"
            value={texto}
            onChange={e=> setTexto(e.target.value)}
          />
        </Textarea>

        <Button>
          <button className='Btn1' onClick={() => handleButtonClick(1)}>Encriptar</button>
          <button className='Btn2' onClick={() => handleButtonClick(2)}>Desencriptar</button>
        </Button>
      
      <Aviso>
        {showMessage && <img id='rdi' src={avIcon} alt="!aviso" />}
        {showMessage && <p id='rdm'>Solo letras minúsculas y sin acentos</p>}
      
      </Aviso>
      <TextShow texto={entrada} etiqueta={etiqueta} validacion={showMessage} />
    </Div>
  );
};
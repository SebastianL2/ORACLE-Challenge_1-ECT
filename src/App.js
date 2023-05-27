
import './App.css';
import { Home } from "./components/Home";
import { TextField } from './components/TextField';
import { TextShow } from './components/TextShow';

function App({texto}) {
  return (
    <div className="App">
     {/*Home*/}
     <Home/>
      {/*Campo de Texto*/}
     <TextField/>
      {/*salida*/}

    </div>
  );
}

export default App;

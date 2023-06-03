
import './App.css';
import { Home } from "./components/Home";
import { TextField } from './components/TextField';
import { Themes} from './components/Themes';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Switch } from './components/Switch';
function App({texto}) {
  const [theme,setTheme] = useState("light");
  return (
    <div className="App">
      <ThemeProvider theme={Themes[theme]}>
     {/*Home*/}
     <Home/>
      {/*Campo de Texto*/}
     <TextField/>
      {/*salida*/}
      <Switch theme={theme} setTheme={setTheme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;

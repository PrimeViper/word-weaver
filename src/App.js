import React,{useState} from 'react';
import Header from './components/Header';

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "black";
    }
  };
  
  return (
    <>
      <Header mode={mode} toggleMode={toggleMode}/>
    </>
    );
}

export default App;
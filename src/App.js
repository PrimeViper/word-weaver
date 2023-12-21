import React,{useState} from 'react';
import Header from './components/Header';
import TextForm from './components/TextForm';

const App = () => {
  const [mode, setMode] = useState("light");
  // const [alert, setalert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
     
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
     
    }
  };
 
  
  return (
    <>
     
      <Header mode={mode} toggleMode={toggleMode}/>
      <TextForm mode={mode} />
    </>
    );
}

export default App;
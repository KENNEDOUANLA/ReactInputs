import Input from './components/input';
import './App.css';
import { useEffect, useState } from 'react';
function App()
{
  const [fileData, setFileData] = useState([]);
  useEffect(()=>{
    console.log("response", fileData);
  },[fileData])
  return (
    <div className="App">
      <Input type="csv" output={setFileData}></Input>
      {fileData.map((ligne, index) =><div key={index}> 
        <div>
          <span>{index}</span>
          
          <span>{ligne["Type de contact"]} |</span>
          <span>{ligne.Email} |</span>
          <span>{ligne.Entreprise} |</span>
          <span>{ligne.Poste} |</span>
          <span>{ligne.Type} |</span>
          <span>{ligne[1]} |</span>
          <span>{ligne.is_company} |</span>
          </div>
      </div>)}
    </div>
  );
}

export default App;

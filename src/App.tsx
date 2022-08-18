import { useState } from 'react';
import './App.css';
import BaseComponent from './components/BaseComponent';

function App() {
  // let divHeight = ""; 
  const [divHeight, setDivHeight] = useState<string>();

  return (
    <div className="App">
      <header className="App-header">
        <BaseComponent
          divHeight={divHeight}
          onChangeDivHeight={(height: string) => setDivHeight(height)}
        />
      </header>
    </div>
  );
}

export default App;

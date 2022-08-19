import { useState } from 'react';
import './App.css';
import BaseComponent from './components/BaseComponent';

function App() {
  const [divHeight, setDivHeight] = useState<string>();
  
  return (
    <div className="App">
      <header className="App-header">
        <BaseComponent // This calls the BaseComponents export which calls the HOC which finally returns the BaseComponent.
          divHeight={divHeight}
          onChangeDivHeight={(height: string) => setDivHeight(height)}
        />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Eheader from './Elements/Eheader';
import CCMyKitchen from './Class Comps/CCMyKitchen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Eheader}
        <CCMyKitchen/>
      </header>
    </div>
  );
}

export default App;

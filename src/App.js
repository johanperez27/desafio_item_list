import logo from './logo.svg';
import './App.css';
import ItemListContainers from './components/ItemListContainers/ItemListContainers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainers greeting={'Holaaaa'} />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Shearchbar from "./searchbar.js";


function App() {
  return (
    <div className="App">
      <Header />
      <Shearchbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <p>ninininininininini</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       {/*  {renderContent()} */}
      </header>
    </div>
  );
}

export default App;

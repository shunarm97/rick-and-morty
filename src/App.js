
import './App.css';
import SearchBox from './components/SearchBox';
import logo2 from './galery/logo2.png'

function App() {


    return (
    <div className="App">
      <header className="App-header">
      <img src={logo2} alt="" className='logo2' />
      {/* <img src="./galery/rick-and-morty-logo-font-free.jpg" alt=""> */}

        <SearchBox />
      </header>
    </div>
  );
}

export default App;

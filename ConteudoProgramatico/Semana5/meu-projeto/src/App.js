import './styles/App.css';

import Header from './components/Header.js'
import Main from './components/Main.js'


function App() {
 

  function soma(a,b){
    return a+b
  }


  return (
    <div className="App">
    <Header />
    <Main/>
     {/* 
      <p>A soma é {soma(2,3)}</p>
      <button>Limpar</button> */}
    </div>
  );
}

export default App;

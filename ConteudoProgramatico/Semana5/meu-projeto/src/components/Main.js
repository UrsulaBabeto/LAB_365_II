import React from "react";
import "../styles/Main.css"
import googlelog from '../images/googlelog.png'

function Main(){
     return (
    <div className="Main">
     <img src={googlelog} />
      <input type="text" name="" id="" />
      <div className="buttons">
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>
      </div>
    </div>
  );
}

export default Main;

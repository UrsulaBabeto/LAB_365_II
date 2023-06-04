import React from "react";
import "../styles/Header.css"

function Header() {
  const nome = "Ursula";
  return (
    <div className="Header">
      <h1>Hello {nome}</h1>
      <h2>Bem-vindo!</h2>
    </div>
  );
}

export default Header;

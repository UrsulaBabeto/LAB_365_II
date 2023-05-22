function enviarFormulario(e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  console.log(`E-mail:${email.value}\n Senha:${password.value}`);
}

//utilizando o id="enviarForm" na tag FORM é utilizado o eventListener
/* const enviarForm = document.getElementById('enviarForm');
enviarForm.addEventListener('submit', enviarFormulario()) 
enviarForm.addEventListener('cancel') 
enviarForm.reset() */

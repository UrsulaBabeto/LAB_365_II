function changeColor() {

  let btnToGreen = document.querySelector(".btnToGreen");
  let textToGreen = document.querySelector(".textToGreen");
  
  let isButtonYellow = btnToGreen.classList.contains("btn-active");
  btnToGreen.classList.toggle("btn-active", !isButtonYellow);
  
  let isTextYellow = textToGreen.classList.contains("text-yellow");
  textToGreen.classList.toggle("text-yellow", !isTextYellow);

}

changeColor()
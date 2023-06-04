function trocarTema() {
  let theme = document.querySelector(".theme");

  let isLightTheme = theme.classList.contains("light-theme");
  theme.classList.toggle("light-theme", !isLightTheme);
}

trocarTema();


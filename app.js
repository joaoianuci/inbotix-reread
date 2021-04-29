window.addEventListener("load", () => {
  const navElement = document.querySelector("nav.navbar");
  const navToggleButton = document.querySelector("button.navbar-toggler");
  navToggleButton.addEventListener("click", () => {
    navElement.toggleAttribute("shadow");
  });
});

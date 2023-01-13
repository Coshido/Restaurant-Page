import "./style.css";
import createFooter from "./footer.js";
import home from "./home.js";
import menu from "./menu.js";

const divContent = document.querySelector("#content");
let homeButton = document.createElement("button");
let menuButton = document.createElement("button");
let activeModule = home();

function createHeader() {
  let header = document.createElement("header");

  let headerLogo = document.createElement("div");
  headerLogo.classList.add("header-logo");
  headerLogo.innerHTML = "Baistrocchi Caffè";
  header.appendChild(headerLogo);

  let navBar = createNav();
  header.appendChild(navBar);
  divContent.appendChild(header);
}

function createNav() {
  let divNav = document.createElement("div");
  divNav.classList.add("nav-bar");

  homeButton.classList.add("nav-button");
  homeButton.innerHTML = "Home";
  homeButton.addEventListener("click", setActiveModule.bind(this, "home"));
  //activeModule = home();
  //setActiveModule("home");

  menuButton.classList.add("nav-button");
  menuButton.innerHTML = "Menù";
  menuButton.addEventListener("click", setActiveModule.bind(this, "menu"));
  //activeModule = menu();

  let contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.innerHTML = "Contacts";

  divNav.appendChild(homeButton);
  divNav.appendChild(menuButton);
  divNav.appendChild(contactButton);

  return divNav;
}

function setActiveModule(string) {
  switch (string) {
    case "home":
      activeModule = home();
      setHighlight(homeButton);
      break;
    case "menu":
      activeModule = menu();
      setHighlight(menuButton);
    default:
      break;
  }
  render();
}

function setHighlight(button) {
  let buttons = [...document.querySelectorAll("button")];
  buttons.map((x) => x.classList.remove("highlight"));
  button.classList.add("highlight");
}

function createMain() {
  let main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(activeModule);
  divContent.appendChild(main);
}

function render() {
  divContent.innerHTML = "";
  createHeader();
  createMain();
  divContent.appendChild(createFooter());
}

render();
setHighlight(homeButton);

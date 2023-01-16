import "./style.css";
import createFooter from "./footer.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const divContent = document.querySelector("#content");
let homeButton = document.createElement("button");
let menuButton = document.createElement("button");
let contactButton = document.createElement("button");

let activeModule = home();

//binding listeners for click events
let homeHandler = setActiveModule.bind(this, "home");
let menuHandler = setActiveModule.bind(this, "menu");
let contactHandler = setActiveModule.bind(this, "contact");

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
  homeButton.addEventListener("click", homeHandler);

  menuButton.classList.add("nav-button");
  menuButton.innerHTML = "Menù";
  menuButton.addEventListener("click", menuHandler);

  contactButton.classList.add("nav-button");
  contactButton.innerHTML = "Contacts";
  contactButton.addEventListener("click", contactHandler);

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
      break;
    case "contact":
      activeModule = contact();
      setHighlight(contactButton);
      break;
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

function menuButtonClick() {
  setActiveModule("menu");
}

render();
setHighlight(homeButton);

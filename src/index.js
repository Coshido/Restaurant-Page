import "./style.css";
import createFooter from "./footer.js";
import home from "./home.js";

const divContent = document.querySelector("#content");
let setActiveModule;

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

  let homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
  homeButton.innerHTML = "Home";
  setActiveModule = home();

  let menuButton = document.createElement("button");
  menuButton.classList.add("nav-button");
  menuButton.innerHTML = "Menù";

  let contactButton = document.createElement("button");
  contactButton.classList.add("nav-button");
  contactButton.innerHTML = "Contacts";

  divNav.appendChild(homeButton);
  divNav.appendChild(menuButton);
  divNav.appendChild(contactButton);

  return divNav;
}

function createMain() {
  let main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(setActiveModule);
  divContent.appendChild(main);
}

function render() {
  createHeader();
  createMain();
  divContent.appendChild(createFooter());
}

render();

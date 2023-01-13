import "./style.css";
import createFooter from "./footer.js";

const divContent = document.querySelector("#content");

function createHeader() {
  let header = document.createElement("header");

  let headerLogo = document.createElement("div");
  headerLogo.classList.add("header-logo");
  headerLogo.innerHTML = "Baistrocchi Caffè";
  header.appendChild(headerLogo);

  divContent.appendChild(header);
}

function createNav() {
  let divNav = document.createElement("div");

  let homeButton = document.createElement("button");
  homeButton.classList.add("nav-button");
}

function createMain() {
  let main = document.createElement("div");
  divContent.appendChild(main);
}

function render() {
  createHeader();
  createMain();
  divContent.appendChild(createFooter());
}

render();

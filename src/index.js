import "./style.css";
import createFooter from "./footer.js";

const divContent = document.querySelector("#content");

function createHeader() {
  let header = document.createElement("header");
  divContent.appendChild(header);
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

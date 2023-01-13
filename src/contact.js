export default function contact() {
  let mainContent = document.createElement("div");
  mainContent.classList.add("main-content-contact");

  let titleDiv = document.createElement("div");
  titleDiv.classList.add("contact-title");
  titleDiv.innerHTML = "Contact us!";

  let phoneDiv = document.createElement("div");
  phoneDiv.classList.add("contact-phone");
  phoneDiv.innerHTML = `<i class="fa-solid fa-phone"></i> 123 4565456`;

  let addressDiv = document.createElement("div");
  addressDiv.classList.add("contact-address");
  addressDiv.innerHTML = `<i class="fa-solid fa-envelope"></i> Piazza del Duomo, Milano, Italy`;

  let mapDiv = document.createElement("div");
  mapDiv.classList.add("map-div");
  mapDiv.innerHTML = map;

  mainContent.appendChild(titleDiv);
  mainContent.appendChild(phoneDiv);
  mainContent.appendChild(addressDiv);
  mainContent.appendChild(mapDiv);

  return mainContent;
}

let map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44768.51311828552!2d9.170668095107601!3d45.46915788642957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e13!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sat!4v1673640163505!5m2!1sit!2sat" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

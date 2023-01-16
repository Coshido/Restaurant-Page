export default function home() {
  let mainContent = document.createElement("div");
  mainContent.classList.add("main-content-home");

  let heroDiv = document.createElement("div");
  heroDiv.classList.add("hero-div");
  heroDiv.innerHTML = "Breakfast like grandma used to make!";

  let actionDiv = document.createElement("div");
  actionDiv.classList.add("action-div");

  let actionImage = document.createElement("div");
  actionImage.classList.add("action-image");
  actionDiv.appendChild(actionImage);

  let actionText = document.createElement("div");
  actionText.classList.add("action-text");
  actionText.innerHTML = `Still waiting? Check out our menù and make a reservation <u>Now!</u>`;
  actionDiv.appendChild(actionText);

  mainContent.appendChild(heroDiv);
  mainContent.appendChild(actionDiv);
  return mainContent;
}

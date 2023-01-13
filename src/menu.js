export default function createMenu() {
  let mainContent = document.createElement("div");
  mainContent.classList.add("main-content-menu");

  let menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  menuTitle.innerHTML = "Our Menù";

  let menuContent = menu.renderMenu(menu);

  mainContent.appendChild(menuTitle);
  mainContent.appendChild(menuContent);
  return mainContent;
}

class Menu {
  constructor() {
    this.menu = [];
  }
  addFood(food) {
    this.menu.push(food);
  }

  renderMenu(menu) {
    let container = document.createElement("div");
    container.classList.add("menu-content");
    this.menu.map((food) => {
      let div = document.createElement("div");
      div.classList.add("food-card");

      let title = document.createElement("div");
      title.classList.add("food-title");
      title.innerHTML = food.name;

      let price = document.createElement("div");
      price.classList.add("food-price");
      price.innerHTML = `${food.price} Euro`;

      let image = document.createElement("div");
      image.classList.add("food-image");
      image.style.background = `url(${food.image})`;
      image.style.backgroundSize = "cover";
      image.style.backgroundPosition = "center";

      div.appendChild(image);
      div.appendChild(title);
      div.appendChild(price);
      container.appendChild(div);
    });
    return container;
  }
}

class Food {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const menu = new Menu();
const eggToast = new Food(
  "Egg Toast",
  7.0,
  "https://source.unsplash.com/FFqNATH27EM"
);
const fruitPancake = new Food(
  "Fruit Pankakes",
  8.5,
  "https://source.unsplash.com/y4K7Ydp2z3Y"
);
const avocadoToast = new Food(
  "Avocado Toast",
  9.0,
  "https://source.unsplash.com/4tPjtttythY"
);
const applePancake = new Food(
  "Apple Pancakes",
  8.0,
  "https://source.unsplash.com/QDM6-fFKP0s"
);
const chocoCereal = new Food(
  "Choco Cereal",
  7.5,
  "https://source.unsplash.com/s_f1RqDVDDo"
);
const veggieBowl = new Food(
  "Veggie Bowl",
  6.0,
  "https://source.unsplash.com/_Uqj5BQb-mw"
);
menu.addFood(eggToast);
menu.addFood(fruitPancake);
menu.addFood(avocadoToast);
menu.addFood(applePancake);
menu.addFood(chocoCereal);
menu.addFood(veggieBowl);

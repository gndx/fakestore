import Card from "@templates/Card";
import "@styles/styles.css";

const $app = document.getElementById("app");
const $observe = document.getElementById("observe");
const API = process.env.API_URL;

localStorage["pagination"] = 5;
let firstIteration = true;

window.onbeforeunload = () => {
  localStorage.removeItem("pagination");
};

const getData = async (api) => {
  try {
    let response = await fetch(api);
    let products = await response.json();

    if (products.length) {
      const output = products.map((product) => Card(product));
      let newItem = document.createElement("section");
      newItem.classList.add("Items");
      newItem.innerHTML = output.join("");
      console.log(newItem);
      $app.appendChild(newItem);
    } else {
      intersectionObserver.unobserve($observe);
      let message = document.createElement("p");
      message.setAttribute("lang", "es");
      message.textContent = "Todos los productos Obtenidos";
      $observe.appendChild(message);
    }
  } catch {
    let msgError = document.createElement("p");
    msgError.textContent = "Error, Productos no disponibles";
    $body.appendChild(msgError);
  }
};

const loadData = async () => {
  if (firstIteration) {
    firstIteration = false;
  } else {
    localStorage["pagination"] =
      parseInt(localStorage.getItem("pagination")) + 10;
  }
  await getData(`${API}?offset=${localStorage.getItem("pagination")}&limit=10`);
};

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadData();
    }
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

intersectionObserver.observe($observe);

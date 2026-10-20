const title = document.querySelector(".delivery");
const deliveryButton = document.querySelector(".delivery-button");
const buybackButton = document.querySelector(".buyback-button");

function explainDelivery(event) {
  event.preventDefault();

  title.textContent ="Find what you need in one place and have it delivered together to your door.";

  deliveryButton.classList.remove("buttonlight2");
  deliveryButton.classList.add("buttonlight3");

  buybackButton.classList.remove("buttonlight3");
  buybackButton.classList.add("buttonlight2");
}

function explainBuyback(event) {
  event.preventDefault();

  title.textContent ="Contact us before you move out. We'll offer a price based on your items' condition and arrange home collection once you accept.";

  buybackButton.classList.remove("buttonlight2");
  buybackButton.classList.add("buttonlight3");


  deliveryButton.classList.remove("buttonlight3");
  deliveryButton.classList.add("buttonlight2");
}

deliveryButton.addEventListener("click", explainDelivery);
buybackButton.addEventListener("click", explainBuyback);

const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");

async function copyEmail() {
  await navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copied!";
}

copyButton.addEventListener("click", copyEmail);
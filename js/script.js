console.log("Hola");
let plnElement = document.querySelector(".js-pln");
let eurElement = document.querySelector(".js-eur");
let gbpElement = document.querySelector(".js-gbp");
let sekElement = document.querySelector(".js-sek");
let usdElement = document.querySelector(".js-usd");
let formElement = document.querySelector(".form");
let resultElement = document.querySelector(".js-result");
let nameElement = document.querySelector(".js-name");


formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let pln = +plnElement.value;
  let usd = +usdElement.value;
  let eur = +eurElement.value;
  let gbp = +gbpElement.value;
  let sek = +sekElement.value;
  let result;
  let name;

  if (usdElement.checked === true) {
    console.log("USD");
    result = pln / usd;
    name = "USD";
  } else if (eurElement.checked === true) {
    result = pln / eur;
    name = "EUR";
  } else if (gbpElement.checked === true) {
    console.log("USD");
    result = pln / gbp;
    name = "GBP";
  } else {
    result = pln / sek;
    name = "SEK";
  }

  resultElement.innerText = result.toFixed(2);
  nameElement.innerText = ` ${name}`;
});

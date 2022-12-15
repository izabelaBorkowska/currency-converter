{
  const welcome = () => {
    console.log("Witaj na mojej stronie :) ");
  };

  welcome();


c 

const calculatResult = (true, pln) => {
  const pln = +plnElement.value;
  const usd = +usdElement.value;
  const eur = +eurElement.value;
  const gbp = +gbpElement.value;
  const sek = +sekElement.value;
  let name;


  switch (true) {
    case usdElement.checked:
      console.log("usd");
      return = pln / usd;
      name = "USD";
     case eurElement.checked:
      return = pln / eur;
      name = "EUR";
     case gbpElement.checked:
      return = pln / gbp;
      name = "GBP";
     default:
      return = pln / sek;
      name = "SEK";
  }
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();


  onst plnElement = document.querySelector(".js-pln");
const eurElement = document.querySelector(".js-eur");
const gbpElement = document.querySelector(".js-gbp");
const sekElement = document.querySelector(".js-sek");
const usdElement = document.querySelector(".js-usd");
const formElement = document.querySelector(".form");
const resultElement = document.querySelector(".js-result");
const nameElement = document.querySelector(".js-name"); 


  const pln = +plnElement.value;
  const usd = +usdElement.value;
  const eur = +eurElement.value;
  const gbp = +gbpElement.value;
  const sek = +sekElement.value;
  const result = calculatResult(true, pln);
  let name;


  resultElement.innerText = result.toFixed(2);
  nameElement.innerText = ` ${name}`;
});

}
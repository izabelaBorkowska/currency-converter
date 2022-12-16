{
  const welcome = () => {
    console.log("Witaj na mojej stronie :) ");
  };

  const calculateResult = (amount) => {
    const eurElement = document.querySelector(".js-eur");
    const gbpElement = document.querySelector(".js-gbp");
    const sekElement = document.querySelector(".js-sek");
    const usdElement = document.querySelector(".js-usd");
    switch (true) {
      case usdElement.checked:
        return `${(amount / usdElement.value).toFixed(2)} USD`;
      case eurElement.checked:
        return `${(amount / eurElement.value).toFixed(2)} EUR`;
      case gbpElement.checked:
        return `${(amount / gbpElement.value).toFixed(2)} GBP`;
      default:
        return `${(amount / sekElement.value).toFixed(2)} SEK`;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const plnElement = document.querySelector(".js-pln");
    const resultElement = document.querySelector(".js-result");

    resultElement.innerText = calculateResult(plnElement.value);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
    welcome();
  };

  init();
}

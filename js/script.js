{
  console.log("Hej wszystkim developerom");


  const calculateResult = (amount, currencySelection) => {
    const PLNtoEUR = 0.2129;
    const PLNtoGBP = 0.1877;
    const PLNtoUSD = 0.2287;

    let resultPLN;
    let resultEUR;
    let resultGBP;
    let resultUSD;


    switch (currencySelection) {
      case "PLN":

        resultPLN = amount * 1;
        resultEUR = amount * PLNtoEUR;
        resultGBP = amount * PLNtoGBP;
        resultUSD = amount * PLNtoUSD;
        break;

      case "EUR":
        resultPLN = amount / PLNtoEUR;
        resultEUR = amount * 1;
        resultGBP = amount * PLNtoGBP / PLNtoEUR;
        resultUSD = amount * PLNtoUSD / PLNtoEUR;
        break;

      case "GBP":
        resultPLN = amount / PLNtoGBP;
        resultEUR = amount * PLNtoEUR / PLNtoGBP;
        resultGBP = amount * 1;
        resultUSD = amount * PLNtoUSD / PLNtoGBP;
        break;

      case "USD":
        resultPLN = amount / PLNtoUSD;
        resultEUR = amount * PLNtoEUR / PLNtoUSD;
        resultGBP = amount * PLNtoGBP / PLNtoUSD;
        resultUSD = amount * 1;
        break;
    }
    updateResultText(resultPLN, resultEUR, resultGBP, resultUSD);
  }


  const updateResultText = (resultPLN, resultEUR, resultGBP, resultUSD) => {
    const resultPLNElement = document.querySelector(".js-resultPLN");
    const resultEURElement = document.querySelector(".js-resultEUR");
    const resultGBPElement = document.querySelector(".js-resultGBP");
    const resultUSDElement = document.querySelector(".js-resultUSD");

    resultPLNElement.innerText = resultPLN.toFixed(2);
    resultEURElement.innerText = resultEUR.toFixed(2);
    resultGBPElement.innerText = resultGBP.toFixed(2);
    resultUSDElement.innerText = resultUSD.toFixed(2);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencySelectionElement = document.querySelector(".js-currencySelection")
    const amountElement = document.querySelector(".js-amount");
    const currencySelection = currencySelectionElement.value;
    const amount = +amountElement.value;

    calculateResult(amount, currencySelection);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit)
  }
  init();
}


















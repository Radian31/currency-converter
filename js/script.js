console.log("Hej wszystkim developerom");


let formElement = document.querySelector(".js-form");
let currencySelectionElement = document.querySelector(".js-currencySelection")
let amountElement = document.querySelector(".js-amount");

let resultPLNElement = document.querySelector(".js-resultPLN");
let resultEURElement = document.querySelector(".js-resultEUR");
let resultGBPElement = document.querySelector(".js-resultGBP");
let resultUSDElement = document.querySelector(".js-resultUSD");


let PLNtoEUR = 0.2129;
let PLNtoGBP = 0.1877;
let PLNtoUSD = 0.2287;


formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currencySelection = currencySelectionElement.value;
  let amount = +amountElement.value;

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

  resultPLNElement.innerText = resultPLN.toFixed(2);


  resultEURElement.innerText = resultEUR.toFixed(2);



  resultGBPElement.innerText = resultGBP.toFixed(2);

  

  resultUSDElement.innerText = resultUSD.toFixed(2);

})
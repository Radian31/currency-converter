{
  console.log("Hej wszystkim developerom");


const calculateResult = (amount, currencySelection) => {
const PLNtoEUR = 0.2129;
const PLNtoGBP = 0.1877;
const PLNtoUSD = 0.2287;

  switch (currencySelection) {
    case "PLN":
  
      return PLN = amount * 1;
      return EUR = amount * PLNtoEUR;
      return GBP = amount * PLNtoGBP;
      return USD = amount * PLNtoUSD;
   
     
    case "EUR":
      return PLN = amount / PLNtoEUR;
      return EUR = amount * 1;
      return GBP = amount * PLNtoGBP / PLNtoEUR;
      return USD = amount * PLNtoUSD / PLNtoEUR;
      
    case "GBP":
      return PLN = amount / PLNtoGBP;
      return EUR = amount * PLNtoEUR / PLNtoGBP;
      return GBP = amount * 1;
      return USD = amount * PLNtoUSD / PLNtoGBP;
      
    case "USD":
      return PLN = amount / PLNtoUSD;
      return EUR = amount * PLNtoEUR / PLNtoUSD;
      return GBP = amount * PLNtoGBP / PLNtoUSD;
      return USD = amount * 1;
      
  }
}
const updateResultText =(resultPLN,resultEUR,resultGBP,resultUSD) =>{
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

  const resultPLN = calculateResult(amount, currencySelection);
  const resultEUR = calculateResult(amount, currencySelection);
  const resultGBP = calculateResult(amount, currencySelection);
  const resultUSD = calculateResult(amount, currencySelection);

  updateResultText(resultPLN,resultEUR,resultGBP,resultUSD);

  onFormSubmit();

  


  



 

  

  

}

const init =() => {
  const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", onFormSubmit)
}
init();

}
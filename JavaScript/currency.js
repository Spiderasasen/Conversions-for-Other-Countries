document.addEventListener("DOMContentLoaded", () => {
    //getting the selected countries currency
    const selectedCurrency = localStorage.getItem("selectedCurrency");

    //getting the items inside the currency sections
    const usdInput = document.getElementById("USD-input"); //usd itself
    const currencyInput = document.getElementById("country-currency-input") //countries currency itself
    const gallonsUSDInput = document.getElementById("gallon-per-usd-input") //how much it cost per gallon of gas in the us with us currency
    const litersCurrencyInput = document.getElementById("liter-per-country-currency-input") //hoe much it cost per liter of gas using a country with the countries currency

    //finding all the labels with currency in the name
    const currencyLabels = document.querySelectorAll("label[for*='currency']");

    //replacing the text in the label
    currencyLabels.forEach((label) => {
       //replacing Country-Currency with the actual name of the currency
        if (label.textContent.includes("Country-Currency")){
            label.textContent = selectedCurrency;
        }
        //replacing the liter per currency with the actual currency name
        else if (label.textContent.includes("Liter per Currency")){
            label.textContent = `Liter per ${selectedCurrency}`
        }
    });

    //replacing the text in the placeholder
    if (selectedCurrency){ //just checking that the currency has been selected
        currencyInput.placeholder = `Enter value in ${selectedCurrency}`;
        litersCurrencyInput.placeholder = `Enter value in Liter/${selectedCurrency}`;
    }
})
document.addEventListener("DOMContentLoaded", () => {
    //clear button
    const clearDataButton = document.getElementById("clear-data-button");

    //getting the selected country
    const selectedCountry = localStorage.getItem("selectedCountry");

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

    //if the country is a us territory then replace the placeholder and label for the gas to gallon exp. Puerto Rico
    if (selectedCountry === "British Virgin Islands" || selectedCountry === "U.S Virgin Islands" || selectedCountry === "Guam" || selectedCountry === "Northern Mariana Islands" || selectedCountry === "American Samoa") {
        litersCurrencyInput.placeholder = `Enter Value in Gallons/${selectedCountry}`;
    }

    /*checking on the currency*/

    //if the currency is the usa dollar
    if (selectedCurrency === "US Dollar"){
        //function for gallons to liters (for pureto rico)

        //gallons to liters
        const gallonToLiters = (gallonsPrice) => {
            return gallonsPrice / 3.78541
        }

        //liters to gallon
        const literToGallons = (litersPrice) => {
            return litersPrice * 3.78541
        }

        //copying the number from one side to the other
        //usa
        usdInput.addEventListener("input", () =>{
            //getting the number from the usd section
            const usdValue = parseFloat(usdInput.value);

            //setting the currency input and placing it at the other end
            currencyInput.value = usdValue.toFixed(2);
        });
        //usa territory
        currencyInput.addEventListener("input", () =>{
            //getting the number from the us territory
            const currencyValue = parseFloat(currencyInput.value);

            //setting the number into the other place
            usdInput.value = currencyValue.toFixed(2);
        });

        //checking if the US territory is Puerto Rico
        if (selectedCountry === "Puerto Rico"){
            //getting the gallons price
            gallonsUSDInput.addEventListener("input", () =>{
                //gettting the number of the price of per gallon
                const gallonsUSDValue = parseFloat(gallonsUSDInput.value);

                //converting from gallons to liters
                const litersUSDVale = gallonToLiters(gallonsUSDValue);
                litersCurrencyInput.value = litersUSDVale.toFixed(2);
            });

            //getting the liters of the price to gallons
            litersCurrencyInput.addEventListener("input", () =>{
                //getting the price of the liters for gas
                const litersUSDValue = parseFloat(litersCurrencyInput.value);

                //converting from liters to gallons
                const gallonsValue = literToGallons(litersUSDValue);
                gallonsUSDInput.value = gallonsValue.toFixed(2);
            });
        }
        else{
            //just copying and pasting everything in one side to the other
            gallonsUSDInput.addEventListener("input", () =>{
                const gallonsValue = parseFloat(gallonsUSDInput.value);
                litersCurrencyInput.value = gallonsValue.toFixed(2);
            });
            litersCurrencyInput.addEventListener("input", () =>{
                const litersValue = parseFloat(litersCurrencyInput.value);
                gallonsUSDInput.value = litersValue.toFixed(2);
            });
        }
    }

    //if the currency is the euro


    //adding an event listener that will clearn all the data
    clearDataButton.addEventListener("click", () =>{
        gallonsUSDInput.value = "";
        litersCurrencyInput.value = "";
        usdInput.value = "";
        currencyInput.value = "";
    });
});
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

    //varibale exchange rate (it will always change)
    let exchangeRate = 0;

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

    //checking the currency and the country
    console.log(`the currency is ${selectedCurrency}`);
    console.log(`the country is ${selectedCountry}`);

    /*checking on the currency*/

    //function for gallons to liters (main function)

    //gallons to liters
    const gallonToLiters = (gallonsPrice) => {
        return gallonsPrice / 3.78541
    }

    //liters to gallon
    const literToGallons = (litersPrice) => {
        return litersPrice * 3.78541
    }

    //function that checks the dollar to the exchange rate

    //usd -> currency
    const usdToCurrency = (usd, exchangeRate) => {
        return usd * exchangeRate;
    }

    //currency -> usd
    const currencyToUSD = (currency, exchangeRate) => {
        return currency / exchangeRate;
    }

    /*getting the exchange rate of the country selected by the user*/

    //if the currency is the usa dollar
    if (selectedCurrency === "US Dollar" || selectedCurrency === "N/A"){exchangeRate = 1;}

    //if the currency is the euro
    else if (selectedCurrency === "Euro"){exchangeRate = 0.85;}

    //if the currency is the australian dollar
    else if (selectedCurrency === "Australian Dollar"){exchangeRate = 1.54;}

    //if the currency is the new zealand dollar
    else if (selectedCurrency === "New Zealand Dollar"){exchangeRate = 1.69;}

    //if the currency is East Caribbean Dollar
    else if (selectedCurrency === "East Caribbean Dollar"){exchangeRate = 2.71;}

    //if the currency is cfa franc BCEAO
    else if (selectedCurrency === "CFA Franc BCEAO"){exchangeRate = 576.75;}

    //if the currency is CFA Franc BEAC
    else if (selectedCurrency === "CFA Franc BEAC"){exchangeRate = 563.59;}


    //checking if the country is not american teritories what use gallons
    if(!(selectedCountry === "British Virgin Islands" || selectedCountry === "U.S Virgin Islands" || selectedCountry === "Guam" || selectedCountry === "Northern Mariana Islands" || selectedCountry === "American Samoa" || selectedCountry === "Puerto Rico" || selectedCountry === "Palestinian Territories"))
    {
        //conversions
        usdInput.addEventListener("input", () =>{
            //getting number
            const usdValue = parseFloat(usdInput.value);

            //converting
            const currencyValue = usdToCurrency(usdValue, exchangeRate);
            currencyInput.value = currencyValue.toFixed(2);
        });

        currencyInput.addEventListener("input", () =>{
            //getting the number
            const currencyValue = parseFloat(currencyInput.value);

            //convert
            const usdValue = currencyToUSD(currencyValue, exchangeRate);
            usdInput.value = usdValue.toFixed(2);
        });

        //gallons -> liters
        gallonsUSDInput.addEventListener("input", () =>{
            //getting the input
            const gallonsValue = parseFloat(gallonsUSDInput.value);

            //converting to ecd
            const litersValue = gallonToLiters(usdToCurrency(gallonsValue, exchangeRate));
            litersCurrencyInput.value = litersValue.toFixed(2);
        });

        //liters -> gallons
        litersCurrencyInput.addEventListener("input", () =>{
            //liters to input
            const litersValue = parseFloat(litersCurrencyInput.value);

            //converting
            const gallonsValue = literToGallons(currencyToUSD(litersValue, exchangeRate));
            gallonsUSDInput.value = gallonsValue.toFixed(2);
        });
    }
    //it is an american territoy and it uses gallons or palistain
    else
    {
        //conversions
        usdInput.addEventListener("input", () =>{
            //getting number
            const usdValue = parseFloat(usdInput.value);

            currencyInput.value = usdValue.toFixed(2);
        });

        currencyInput.addEventListener("input", () =>{
            //getting the number
            const currencyValue = parseFloat(currencyInput.value);

            usdInput.value = currencyValue.toFixed(2);
        });

        //checking if the country is palenstine or Puerto Rico (to use liters)
        if (selectedCountry === "Palestinian Territories" || selectedCountry === "Puerto Rico"){
            //gallons -> lters
            gallonsUSDInput.addEventListener("input", () =>{
                //getting the input
                const gallonsValue = parseFloat(gallonsUSDInput.value);

                //converting to ecd
                const litersValue = gallonToLiters(gallonsValue);
                litersCurrencyInput.value = litersValue.toFixed(2);
            });

            //liters -> gallons
            litersCurrencyInput.addEventListener("input", () =>{
                //liters to input
                const litersValue = parseFloat(litersCurrencyInput.value);

                //converting
                const gallonsValue = literToGallons(litersValue);
                gallonsUSDInput.value = gallonsValue.toFixed(2);
            });
        }

        //else the territory is another territory with gallons
        else{
            //gallons -> liters
            gallonsUSDInput.addEventListener("input", () =>{
                //getting the input
                const gallonsValue = parseFloat(gallonsUSDInput.value);

                litersCurrencyInput.value = gallonsValue.toFixed(2);
            });

            //liters -> gallons
            litersCurrencyInput.addEventListener("input", () =>{
                //liters to input
                const litersValue = parseFloat(litersCurrencyInput.value);

                gallonsUSDInput.value = litersValue.toFixed(2);
            });
        }
    }


    //adding an event listener that will clearn all the data
    clearDataButton.addEventListener("click", () =>{
        gallonsUSDInput.value = "";
        litersCurrencyInput.value = "";
        usdInput.value = "";
        currencyInput.value = "";
    });
});
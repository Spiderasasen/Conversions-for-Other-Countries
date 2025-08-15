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

    switch (selectedCurrency){
        case "US Dollar": //us dollar
            exchangeRate = 1;
            break;
        case "Euro": //euro
            exchangeRate = 0.85;
            break;
        case "Australian Dollar": //australian dollar
            exchangeRate = 1.54;
            break;
        case "New Zealand Dollar": //new zealand dollar
            exchangeRate = 1.69;
            break;
        case "East Caribbean Dollar": //ECD
            exchangeRate = 2.71;
            break;
        case "CFA Franc BCEAO": //north african franc
            exchangeRate = 576.75;
            break;
        case "CFA Franc BEAC": //central african franc
            exchangeRate = 563.59;
            break;
        case "Afghani":
            exchangeRate = 68.33;
            break;
        case "Lek":
            exchangeRate = 83.17;
            break;
        case "Algerian Dinar":
            exchangeRate = 129.68;
            break;
        case "Kwanza":
            exchangeRate = 915.19;
            break;
        case "Argentine Peso":
            exchangeRate = 1298.5;
            break;
        case "Armenian Dram":
            exchangeRate = 382.42;
            break;
        case "Aruban Florin":
            exchangeRate = 1.79;
            break;
        case "Azerbaijanian Manat":
            exchangeRate = 1.70;
            break;
        case "Bahamian Dollar":
            exchangeRate = 1;
            break;
        case "Bahraini Dinar":
            exchangeRate = 0.38;
            break;
        case "Taka":
            exchangeRate = 121.5;
            break;
        case "Barbados Dollar":
            exchangeRate = 2;
            break;
        case "Belarusian Ruble":
            exchangeRate = 3.33;
            break;
        case "Belize Dollar":
            exchangeRate = 2.01;
            break;
        case "Bermudian Dollar":
            exchangeRate = 1;
            break;
        case "Ngultrum":
            exchangeRate = 87.47;
            break;
        case "Boliviano":
            exchangeRate = 6.91;
            break;
        case "Convertable Marks":
            exchangeRate = 1.67;
            break;
        case "Pula":
            exchangeRate = 13.65;
            break;
        case "Brazilian Real":
            exchangeRate = 5.39;
            break;
        case "Brunei Dollar":
            exchangeRate = 1.29;
            break;
        case "Bulgarian Lev":
            exchangeRate = 1.67;
            break;
        case "Burundi Franc":
            exchangeRate = 2972.01;
            break;
        case "Reil":
            exchangeRate = 4006.5;
            break;
        case "Canadian Dollar":
            exchangeRate = 1.38;
            break;
        case "Cape Verde Escudo":
            exchangeRate = 94.33;
            break;
        case "Cayman Islands Dollar":
            exchangeRate = 0.83;
            break;
        case "Chilean Peso":
            exchangeRate = 964.30;
            break;
        case "Yuan Renminbi":
            exchangeRate = 7.18;
            break;
        case "Colombian Peso":
            exchangeRate = 4025.66;
            break;
        case "Comorian Franc":
            exchangeRate = 420.81;
            break;
        case "Congolese Franc":
            exchangeRate = 2876.82;
            break;
        case "Costa Rican Colon":
            exchangeRate = 505.35;
            break;
        case "Cuban Peso":
            exchangeRate = 23.99;
            break;
        case "Czech Koruna":
            exchangeRate = 20.91;
            break;
        case "Danish Krone":
            exchangeRate = 6.28;
            break;
        case "Djibouti Franc":
            exchangeRate = 178.04;
            break;
        case "Dominican Peso":
            exchangeRate = 61.57;
            break;
        case "Egyptian Pound":
            exchangeRate = 48.30;
            break;
        case "El Salvador Colon":
            exchangeRate = 8.75;
            break;
        case "Nakfa":
            exchangeRate = 15;
            break;
        case "Ethiopian Birr":
            exchangeRate = 140.91;
            break;
        case "Falkland Islands Pound":
            exchangeRate = 0.74;
            break;
        case "Fiji Dollar":
            exchangeRate = 2.25;
            break;
        case "CFP Franc":
            exchangeRate = 102.04;
            break;
        case "Dalasi":
            exchangeRate = 72.68;
            break;
        case "Lari":
            exchangeRate = 2.7;
            break;
        case "Ghana Cedi":
            exchangeRate = 10.85;
            break;
        case "Gibraltar Pound":
            exchangeRate = 0.74;
            break;
        case "Quetzal":
            exchangeRate = 7.67;
            break;
        case "Guinean Franc":
            exchangeRate = 8672.63;
            break;
        case "Guyanese Dollar":
            exchangeRate = 209.13;
            break;
        case "Gourde":
            exchangeRate = 131.16;
            break;
        case "Lempira":
            exchangeRate = 26.18;
            break;
        case "Hong Kong Dollar":
            exchangeRate = 7.82;
            break;
        case "Forint":
            exchangeRate = 337.07;
            break;
        case "Iceland Krona":
            exchangeRate = 122.29;
            break;
        case "Indian Rupee":
            exchangeRate = 87.48;
            break;
        case "Rupiah":
            exchangeRate = 16172.22;
            break;
        case "Iranian Rial":
            exchangeRate = 42103.24;
            break;
        case "Iraqi Dinar":
            exchangeRate = 1309.67;
            break;
        case "Israeli Shekel":
            exchangeRate = 3.38;
            break;
        case "Jamaican Dollar":
            exchangeRate = 160.06;
            break;
        case "Yen":
            exchangeRate = 146.87;
            break;
        case "Jordanian Dinar":
            exchangeRate = 0.71;
            break;
        case "Tenge":
            exchangeRate = 540.84;
            break;
        case "Kenyan Shilling":
            exchangeRate = 129.18;
            break;
        case "North Korean Won":
            exchangeRate = 900.02;
            break;
        case "Won":
            exchangeRate = 1386.92;
            break;
        case "Kuwaiti Dinar":
            exchangeRate = 0.31;
            break;
        case "Kip":
            exchangeRate = 21600.78;
            break;
        case "Som":
            exchangeRate = 87.40;
            break;
        case "Lebanese Pound":
            exchangeRate = 89830.97;
            break;
        case "Loti":
            exchangeRate = 17.57;
            break;
        case "Liberian Dollar":
            exchangeRate = 200.53;
            break;
        case "Libyan Dinar":
            exchangeRate = 5.41;
            break;
        case "Swiss Franc":
            exchangeRate = 0.81;
            break;
        case "Pataca":
            exchangeRate = 8.06;
            break;
        case "Malagasy Ringgit":
            exchangeRate = 4447.54;
            break;
        case "Kwacha":
            exchangeRate = 1733.34;
            break;
        case "Malaysian Ringgit":
            exchangeRate = 4.21;
            break;
        case "Rufiyaa":
            exchangeRate = 15.44;
            break;
        case "Ouguiya":
            exchangeRate = 39.94;
            break;
        case "Mauritian Rupee":
            exchangeRate = 45.54;
            break;
        case "Mexican Peso":
            exchangeRate = 18.69;
            break;
        case "Moldovan Leu":
            exchangeRate = 16.70;
            break;
        case "Tugrik":
            exchangeRate = 3596.56;
            break;
        case "Moroccan Dirham":
            exchangeRate = 9.01;
            break;
        case "Mozambique Metical":
            exchangeRate = 63.89;
            break;
        case "Kyat":
            exchangeRate = 2099.07;
            break;
        case "Namibia Dollar":
            exchangeRate = 17.57;
            break;
        case "Nepalese Rupee":
            exchangeRate = 140.05;
            break;
        case "Nicaraguan Córdoba":
            exchangeRate = 36.79;
            break;
        case "Naira":
            exchangeRate = 1532.34;
            break;
        case "Macedonian Denar":
            exchangeRate = 52.69;
            break;
        case "Norwegian Krone":
            exchangeRate = 10.18;
            break;
        case "Omani Rial":
            exchangeRate = 0.38
            break;
        case "Pakistan Rupee":
            exchangeRate = 283.62;
            break;
        case "Balboa":
            exchangeRate = 1;
            break;
        case "Kina":
            exchangeRate = 4.15;
            break;
        case "Guarani":
            exchangeRate = 7499.66;
            break;
        case "Sol":
            exchangeRate = 3.56;
            break;
        case "Philippine Peso":
            exchangeRate = 57.08;
            break;
        case "Zloty":
            exchangeRate = 3.63;
            break;
        case "Qatari Riyal":
            exchangeRate = 3.64;
            break;
        case "Romanian Leu":
            exchangeRate = 4.32;
            break;
        case "Russian Ruble":
            exchangeRate = 80.15;
            break;
        case "Rwanda Franc":
            exchangeRate = 1446.72;
            break;
        case "Tala":
            exchangeRate = 2.77;
            break;
        case "Dobra":
            exchangeRate = 21.21;
            break;
        case "Saudi Riyal":
            exchangeRate = 3.75;
            break;
        case "Serbian Dinar":
            exchangeRate = 100.06;
            break;
        case "Seychelles Rupee":
            exchangeRate = 14.58;
            break;
        case "Leone":
            exchangeRate = 22.72;
            break;
        case "Singapore Dollar":
            exchangeRate = 1.28;
            break;
        case "Solomon Islands":
            exchangeRate = 8.45;
            break;
        case "Somali Shilling":
            exchangeRate = 571.45;
            break;
        case "Rand":
            exchangeRate = 17.57;
            break;
        case "South Sudanese Pound":
            exchangeRate = 4532.44;
            break;
        case "Sri Lanka Rupee":
            exchangeRate = 300.94;
            break;
        case "Sudanese Pound":
            exchangeRate = 600.37;
            break;
        case "Surinamese Dollar":
            exchangeRate = 37.58;
            break;
        case "Lilangeni":
            exchangeRate = 17.58;
            break;
        case "Swedish Krona":
            exchangeRate = 9.55;
            break;
        case "Syrian Pound":
            exchangeRate = 13002.47;
            break;
        case "New Taiwan Dollar":
            exchangeRate = 30.03;
            break;
        case "Somoni":
            exchangeRate = 9.32;
            break;
        case "Tanzanian Shilling":
            exchangeRate = 2591.22;
            break;
        case "Baht":
            exchangeRate = 32.46;
            break;
        case "Chinese Yuan":
            exchangeRate = 7.17;
            break;
        case "Pa'anga":
            exchangeRate = 2.39;
            break;
        case "Trinidad and Tobago Dollar":
            exchangeRate = 6.77;
            break;
        case "Tunisian Dinar":
            exchangeRate = 2.87;
            break;
        case "Turkish Lira":
            exchangeRate = 40.9;
            break;
        case "Turkmenistan New Manat":
            exchangeRate = 3.51;
            break;
        case "Uganda Shilling":
            exchangeRate = 3560.02;
            break;
        case "Hryvnia":
            exchangeRate = 41.40;
            break;
        case "UAE Dirham":
            exchangeRate = 3.67;
            break;
        case "British Pound":
            exchangeRate = 0.74;
            break;
        case "Uruguayan Peso":
            exchangeRate = 40.08;
            break;
        case "Uzbekistan Som":
            exchangeRate = 12584.02;
            break;
        case "Vatu":
            exchangeRate = 119.20;
            break;
        case "Bolivar":
            exchangeRate = 134.77;
            break;
        case "Vietnamese Dong":
            exchangeRate = 26234.57;
            break;
        case "Yemeni Rial":
            exchangeRate = 240.27;
            break;
        case "Zimbabwe Dollar":
            exchangeRate = 26.8;
            break;
        default:
            console.log("No country selected or unknown currency")
            exchangeRate = 1;
            break;
    }

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
document.addEventListener("DOMContentLoaded", () =>{
   //getting the button and display area elements from the html
   const displayedCountryDiv = document.getElementById("display-country");
   const goBackButton = document.getElementById("go-back-button");
   const clearDataButton = document.getElementById("clear-data-button");

   //retrive the selected country from localstorge
    const selectedCountry = localStorage.getItem("selectedCountry");
    if (selectedCountry) {
        displayedCountryDiv.textContent = `American Dollar --> ${selectedCountry} Dollar`;
    }
    else{
        displayedCountryDiv.textContent = "No country was selected or found!";
        displayedCountryDiv.className = "text-xl text-red-400 mt-4 p-4 border border-red-700 rounded-lg w-full mac-w-sm text-center";
    }

    //2-way converstion, logic section, for all converstion systems that are used
    const feetInput = document.getElementById("feet-input"); //feet
    const meterInput = document.getElementById("meter-input"); //meter
    const milesInput = document.getElementById("miles-input"); //miles
    const kmInput = document.getElementById("kilometer-input") //km
    const inchInput = document.getElementById("inch-input"); //inches
    const cmInput = document.getElementById("cm-input"); //cm
    const acreInput = document.getElementById("Acre-input"); //acre
    const sqMeterInput = document.getElementById("SqMeter-input"); //Square Meter
    const fahrenheitInput = document.getElementById("fahrenheit-input"); //fahrenheit
    const celsiusInput = document.getElementById("celsius-input"); //celsius
    const poundsInput = document.getElementById("pound-input"); //pounds
    const kgInput = document.getElementById("kilogram-input"); //KG
    const gallonInput = document.getElementById("gallon-input"); //gallon
    const literInput = document.getElementById("liter-input"); //liter
    const fluidOzInput = document.getElementById("fluid-oz-input"); //fluid oz
    const milliliterInput = document.getElementById("millimeter-input"); //milliliter
    const ounceInput = document.getElementById("ounce-input"); //ounce
    const gramsInput = document.getElementById("grams-input"); //gram

    /*converstion math*/

    // feet to meters
    const converstionFeet = (feet) => {
        return feet * 0.3048
    }

    //meters to feet
    const converstionMeter = (meter) => {
        return meter * 0.3048
    }

    //miles to kilometers
    const converstionMiles = (miles) => {
        return miles * 0.621371
    }

    //kilometers to miles
    const converstionKilometers = (km) => {
        return km * 1.609344
    }

    //inches to cm
    const converstionInches = (inch) => {
        return inch * 2.54
    }

    //cm to inches
    const converstionCentimeters = (cm) =>{
        return cm / 2.54
    }

    //acres to square meters
    const converstionAcre = (acre) => {
        return acre * 4046.86
    }

    //square meters to acres
    const convertionSqMeters = (m2) => {
        return m2 / 4046.86
    }

    //fahrenheit to celsius
    const convertionFahrenheit = (fahrenheit) => {
        return (fahrenheit - 32) / 1.8
    }

    //celsius to fahrenheit
    const converstionCelsius = (celsius) => {
        return celsius * 1.8 + 32
    }

    //pounds to kilograms
    const converstionPound = (pound) => {
        return pound / 2.205
    }

    //kilograms to pounds
    const converstionKG = (kg) =>{
        return kg * 2.205
    }

    //gallons to liters
    const converstionGallons = (gallon) => {
        return gallon * 3.785412
    }

    //liters to gallons
    const convertionLiters = (liters) => {
        return liters * 0.264172
    }

    //fliud oz to milliliter
    const converstionFluidOz = (fluid) => {
        return fluid * 29.57353
    }

    //milliliter to fluid oz
    const converstionMilliliters = (millis) => {
        return millis * 0.033814
    }

    //ounces to grams
    const converstionGrams = (gram) => {
        return gram * 28.349523
    }

    //grams to ounces
    const converstionOunces = (ounces) => {
        return ounces * 0.035274
    }

    /*event listeners*/

    //for feet
    feetInput.addEventListener("input", () =>{
        const feetValue = parseFloat(feetInput.value);

        if (!isNaN(feetValue)){
            //converting meters and updating the meters field
            const metersValue = converstionMeter(feetValue);
            meterInput.value = metersValue.toFixed(4);
        }
        else{
            //if input is not a number
            meterInput.value = "";
        }
    });

    //for meters
    meterInput.addEventListener("input", () =>{
        const meterValue = parseFloat(meterInput.value);

        if (!isNaN(meterValue)){
            //converting meters to feet
            const feetValue = converstionFeet(meterValue);
            feetInput.value = feetValue.toFixed(4);
        }
        else{
            //if input is not a number
            feetInput.value = "";
        }
    });

    //for miles
    milesInput.addEventListener("input", () =>{
        const mileValue = parseFloat(milesInput.value);

        if (!isNaN(mileValue)){
            //converting miles to km
            const kmValue = converstionMiles(mileValue);
            kmInput.value = kmValue.toFixed(4);
        }
        else{
            //no number was entered
            kmInput.value = "";
        }
    });

    //for km
    kmInput.addEventListener("input", () =>{
       const kmValue = parseFloat(kmInput.value);

       if(!isNaN(kmValue)){
           //converting km to miles
           const mileValue = converstionKilometers(kmValue);
           milesInput.value = mileValue.toFixed(4);
       }
       else{
           //no number was entered
           milesInput.value = "";
       }
    });

    //for inches
    inchInput.addEventListener("input", () =>{
       const inchValue = parseFloat(inchInput.value);

       if(!isNaN(inchValue)){
           //converting inches to cm
           const cmValue = converstionInches(inchValue);
           cmInput.value = cmValue.toFixed(4);
       }
       else{
           //nothing was found
           cmInput.value = "";
       }
    });

    //for cm
    cmInput.addEventListener("input", () =>{
       const cmValue = parseFloat(cmInput.value);

       if(!isNaN(cmValue)){
           //converting to inches
           const inchValue = converstionCentimeters(cmValue);
           inchInput.value = inchValue.toFixed(4);
       }
       else{
           //nothing was found
           inchInput.value = "";
       }
    });

    //for acre
    acreInput.addEventListener("input", () =>{
        const acreValue = parseFloat(acreInput.value);

        if(!isNaN(acreValue)){
            const m2Value = convertionSqMeters(acreValue);
            sqMeterInput.value = m2Value.toFixed(4);
        }
        else{
            sqMeterInput.value = "";
        }
    });

    //for m2
    sqMeterInput.addEventListener("input", () =>{
        const sqMeterValue = parseFloat(sqMeterInput.value);

        if(!isNaN(sqMeterValue)){
            const acreValue = converstionAcre(sqMeterValue);
            acreInput.value = acreValue.toFixed(4);
        }
        else{
            acreInput.value = "";
        }
    });

    //for fahrenheit
    fahrenheitInput.addEventListener("input", () =>{
       const fahrenheitValue = parseFloat(fahrenheitInput.value);

       if(!isNaN(fahrenheitValue)){
           const celsiusValue = convertionFahrenheit(fahrenheitValue);
           celsiusInput.value = celsiusValue.toFixed(2);
       }
       else{
           celsiusInput.value = "";
       }
    });

    //for celsius
    celsiusInput.addEventListener("input", () =>{
       const celsiusValue = parseFloat(celsiusInput.value);

       if(!isNaN(celsiusValue)){
           const farhenheitValue = converstionCelsius(celsiusValue);
           fahrenheitInput.value = farhenheitValue.toFixed(2);
       }
       else{
           fahrenheitInput.value = "";
       }
    });

    //for pounds
    poundsInput.addEventListener("input", () =>{
        const poundsValue = parseFloat(poundsInput.value);

        if(!isNaN(poundsValue)){
            const kgValue = converstionPound(poundsValue);
            kgInput.value = kgValue.toFixed(4);
        }
        else{
            kgInput.value = "";
        }
    });

    //for kg
    kgInput.addEventListener("input", () =>{
       const  kgValue = parseFloat(kgInput.value);

       if(!isNaN(kgValue)){
           const poundValue = converstionKG(kgValue);
           poundsInput.value = poundValue.toFixed(4);
       }
       else{
           poundsInput.value = "";
       }
    });

    //for gallons
    gallonInput.addEventListener("input", () =>{
        const gallonValue = parseFloat(gallonInput.value);

        if(!isNaN(gallonValue)){
            const literValue = converstionGallons(gallonValue);
            literInput.value = literValue.toFixed(4);
        }
        else{
            literInput.value = "";
        }
    });

    //for liters
    literInput.addEventListener("input", () =>{
        const literValue = parseFloat(literInput.value);

        if(!isNaN(literValue)){
            const gallonValue = convertionLiters(literValue);
            gallonInput.value = gallonValue.toFixed(4);
        }
        else{
            gallonInput.value = "";
        }
    });

    //for fluid oz
    fluidOzInput.addEventListener("input", () =>{
        const fluidOzValue = parseFloat(fluidOzInput.value);

        if(!isNaN(fluidOzValue)){
            const milliliterValue = converstionFluidOz(fluidOzValue);
            milliliterInput.value = milliliterValue.toFixed(4);
        }
        else{
            milliliterInput.value = "";
        }
    });

    //for milliliter
    milliliterInput.addEventListener("input", () =>{
        const milliliterValue = parseFloat(milliliterInput.value);

        if(!isNaN(milliliterValue)){
            const fluidOzValue = converstionMilliliters(milliliterValue);
            fluidOzInput.value = fluidOzValue.toFixed(4);
        }
        else{
            fluidOzInput.value = "";
        }
    });

    //for grams
    gramsInput.addEventListener("input", () => {
        const gramsValue = parseFloat(gramsInput.value);

        if(!isNaN(gramsValue)){
            const ounceValue = converstionOunces(gramsValue);
            ounceInput.value = ounceValue.toFixed(4);
        }
        else{
            ounceInput.value = "";
        }
    });

    //for ounces
    ounceInput.addEventListener("input", () =>{
        const ounceValue = parseFloat(ounceInput.value);

        if(!isNaN(ounceValue)){
            const gramValue = converstionGrams(ounceValue);
            gramsInput.value = gramValue.toFixed(4);
        }
        else{
            gramsInput.value = "";
        }
    });

    //for milliliters

    //adding an event listener that will clearn all the data
    clearDataButton.addEventListener("click", () =>{
       feetInput.value = "";
       meterInput.value = "";
       milesInput.value = "";
       kmInput.value = "";
       inchInput.value = "";
       cmInput.value = "";
       acreInput.value = "";
       sqMeterInput.value = "";
       fahrenheitInput.value = "";
       celsiusInput.value = "";
       kgInput.value = "";
       poundsInput.value = "";
       literInput.value = "";
       gallonInput.value = "";
       fluidOzInput.value = "";
       milliliterInput.value = "";
       ounceInput.value = "";
       gramsInput.value = "";
    });

    //add event listener that will go back to the last screen
    goBackButton.addEventListener("click", () => {
        //removing the country onClicked
        localStorage.removeItem("selectedCountry");
        //moves back to the selecting a country
       window.location.href = "Index.html";
    });
});
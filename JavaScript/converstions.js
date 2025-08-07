document.addEventListener("DOMContentLoaded", () =>{
   //getting the button and display area elements from the html
   const displayedCountryDiv = document.getElementById("display-country");
   const goBackButton = document.getElementById("go-back-button");

   //retrive the selected country from localstorge
    const selectedCountry = localStorage.getItem("selectedCountry");
    if (selectedCountry) {
        displayedCountryDiv.textContent = `American Dollar --> ${selectedCountry} Dollar`;
    }
    else{
        displayedCountryDiv.textContent = "No country was selected or found!";
        displayedCountryDiv.className = "text-xl text-red-400 mt-4 p-4 border border-red-700 rounded-lg w-full mac-w-sm text-center";
    }

    //2-way converstion, logic section
    const feetInput = document.getElementById("feet-input"); //feet
    const meterInput = document.getElementById("meter-input"); //meter
    const milesInput = document.getElementById("miles-input"); //miles
    const kmInput = document.getElementById("kilometer-input") //km

    //converstion math

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

    //event listeners

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

    //add event listener that will go back to the last screen
    goBackButton.addEventListener("click", () => {
        //removing the country onClicked
        localStorage.removeItem("selectedCountry");
        //moves back to the selecting a country
       window.location.href = "Index.html";
    });
});
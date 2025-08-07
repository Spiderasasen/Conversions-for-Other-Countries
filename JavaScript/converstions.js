document.addEventListener("DOMContentLoaded", () =>{
   //getting the button and display area elements from the html
   const displayedCountryDiv = document.getElementById("display-country");
   const goBackButton = document.getElementById("go-back-button");

   //retrive the selected country from localstorge
    const selectedCountry = localStorage.getItem("selectedCountry");

    if (selectedCountry) {
        displayedCountryDiv.textContent = `American Dollar --> ${selectedCountry} Dollar`;

        //removing the selected country
        localStorage.removeItem("selectedCountry");
    }
    else{
        displayedCountryDiv.textContent = "No country was selected or found!";
        displayedCountryDiv.className = "text-xl text-red-400 mt-4 p-4 border border-red-700 rounded-lg w-full mac-w-sm text-center";
    }

    //add event listener that will go back to the last screen
    goBackButton.addEventListener("click", () => {
       window.location.href = "Index.html";
    });
});
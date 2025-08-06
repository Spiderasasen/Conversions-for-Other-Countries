document.addEventListener("DOMContentLoaded", ()=>{

    // TODO ADD A TEXT FILE READER OR API SECTION HERE
    const allCountries = [
        "United States", "Canada", "Mexico", "India", "China",
        "Brazil", "Indonesia", "Pakistan", "Nigeria", "Banglodesh",
        "Russia", "Japan", "Philippines", "Ethiopia", "Egypt",
        "Vietam", "Germany", "Turkey", "Iran", "Thailand",
        "United Kingdom", "France", "Italy", "Tanzania", "Spain",
        "South Africa", "Myanmar", "Kenya", "Colombia", "South Korea",
        "Argentina", "Algeria", "Australia", "Morocco", "Peru",
        "Malaysia", "Ghana", "Venezuela", "Yemen", "Nepal"
    ]

    //Reusable function to create a seachable dropdown
    const createSearchableDropdown = (containerId, items, placeholderText) => {
        const container = document.getElementById(containerId);
        const searchInput = container.querySelector("input");
        const dropdownList = container.querySelector("ul");
        const dropdownArrow = container.querySelector("svg");

        let filteredItems = [...items];
        let activeIndex = -1;
        let selectedValue = null;

        //function to render the list of the items
        const renderList = (currentItems) => {
            dropdownList.innerHTML = "";

            const placeHolder = document.createElement("li");
            placeHolder.textContent = placeholderText;
            placeHolder.className = "px-4 py-3 text-gray-400 font-semibold cursor-default select-none border-b border-gray-700";
            dropdownList.appendChild(placeHolder)

            if(currentItems.length === 0){
                const noResults = document.createElement("li")
                noResults.textContent = "No results found";
                noResults.className = "px-4 py-3 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors duration-200 rounded-md";
                dropdownList.appendChild(noResults);
            }
            else {
                currentItems.forEach((item, index) =>{
                   const li = document.createElement("li");
                   li.textContent = item;
                   li.setAttribute("role", "option");
                   li.setAttribute("data-value", item);
                   li.className = "px-4 py-3 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-200 rounded-md";

                   li.addEventListener("click", () =>{
                      selectItem(item);
                   });

                   dropdownList.appendChild(li);
                });
            }
        };

        const selectItem = (item) =>{
            searchInput.value = item;
            selectedValue = item;
            console.log(`Dropdown ID: ${containerId}, Selected Value: ${selectedValue}`)
            hideDropdown();
            searchInput.focus();
        };

        const showDropdown = () => {
          dropdownList.classList.remove("hidden", "scale-95", "opacity-0");
          dropdownList.classList.add("block", "scale-100", "opacity-100");
          dropdownList.setAttribute("aria-expanded", "true");
          dropdownArrow.style.transform = 'translateY(-50%) rotate(180deg)';
          activeIndex = -1;
        };

        const hideDropdown = () => {
            dropdownList.classList.remove("block", "scale-100", "opacity-100");
            dropdownList.classList.add("hidden", "scale-95", "opacity-0");
            dropdownList.setAttribute("aria-expanded", "false");
            dropdownArrow.style.transform = "translateY(-50%) rotate(0deg)";
            removeActiveState();
        };

        const removeActiveState = () => {
            dropdownList.querySelectorAll('li').forEach(item =>{
                item.classList.remove("bg-blue-600", "text-white");
                item.removeAttribute("aria-selected");
            });
        };

        searchInput.addEventListener("input", () =>{
           const query = searchInput.value.toLowerCase();
           if (query === ""){
               filteredItems = [...items];
           }
           else{
               filteredItems = items.filter(item => item.toLowerCase().includes(query))
           }
           renderList(filteredItems);
           showDropdown();
        });

        searchInput.addEventListener("keydown", (e) => {
           const listItems = dropdownList.querySelectorAll("li[role='option']");
           if (listItems.length === 0) {return;}

           if (e.key === "ArrowDown"){
               e.preventDefault();
               activeIndex = (activeIndex + 1) % listItems.length;
               removeActiveState();
               listItems[activeIndex].classList.add("bg-blue-600", "text-white");
               listItems[activeIndex].setAttribute("aria-selected", "true");
               listItems[activeIndex].scrollIntoView({block: "nearest"});
           }
           else if (e.key === "ArrowUp"){
               e.preventDefault();
               activeIndex = (activeIndex - 1 + listItems.length) % listItems.length;
               removeActiveState();
               listItems[activeIndex].classList.add("bg-blue-600", "text-white");
               listItems[activeIndex].setAttribute("aria-selected", "true");
               listItems[activeIndex].scrollIntoView({block: "nearest"});
           }
           else if (e.key === "Enter"){
               e.preventDefault();
               if (activeIndex > -1){
                   selectItem(listItems[activeIndex].textContent);
               }
           }
        });

        searchInput.addEventListener("click", (e) =>{
           e.stopPropagation();
           if(dropdownList.classList.contains("hidden")){
               renderList(filteredItems);
               showDropdown();
           }
           else{
               hideDropdown();
           }
        });

        document.addEventListener("click", (e) => {
           if(!container.contains(e.target)){
               hideDropdown();
           }
        });

        renderList(items);
    };

//     Initialize both dropdowns by calling the reusable function
    createSearchableDropdown("language-select-container", allLanguages, "Language");
    createSearchableDropdown("country-select-container", allCountries, "Country");
});
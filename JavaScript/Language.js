document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById("language-select-container");
    const searchInput = document.getElementById("language-search")
    const dropdownList = document.getElementById("language-listbox")
    const dropdownArrow = document.getElementById("dropdown-arrow")

    //Simulating a list of languages from a text file or api
    //we need to fetch data from a URL
    //For now its just a hardcoded array
    //TODO ADD A TEXT FILE READER OR API SECTION HERE
    const allLanguages = [
        "English", "Spanish", "Mandarin Chinese", "Hindi", "Arabic",
        "Bengali", "Portuguese", "Russian", "Japanese", "Punjabi",
        "German", "Javanese", "French", "Telugu", "Marathi",
        "Turkish", "Tamil", "Vietnamese", "Korean", "Italian",
        "Cantonese", "Thai", "Urdu", "Gujarati", "Polish", "Ukrainian",
        "Romanian", "Dutch", "Greek", "Swedish", "Norwegian", "Danish",
        "Finnish", "Hebrew", "Swanhili", "Yoruba", "Igbo", "Hausa",
        "Persian", "Pashto", "Nepali", "Malayam", "Odia", "Burmese"
    ];

    let filteredLanguages = [...allLanguages]
    let actuveIndex = -1 //for keyborad nav

    //function to render rhe list of all the langauges
    const renderList = (languages) => {
        dropdownList.innerHTML = "";

        //adding a static language placeholder option
        const placeholder = document.createElement("li");
        placeholder.textContent = "Language";
        placeholder.className = "px-4 py-3 text-gray-400 font-semibold cursor-default select-none border-b border-gray-700";
        dropdownList.appendChild(placeholder);

        if(languages.length === 0){
            const noResults = document.createElement("li");
            noResults.textContent = "No results Found";
            noResults.className = "px-4 py-3 text-gray-400 italic text-center select-none";
            dropdownList.appendChild(noResults);
        }
        else {
            languages.forEach((languages) =>{
                const li = document.createElement("li")
                li.textContent = languages;
                li.setAttribute("role", "option");
                li.setAttribute("data-value", languages);
                li.className = "px-4 py-3 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-200 rounded-md";

                //adding an event listener for clicking an option
                li.addEventListener('click', () =>{
                    selectLanguage(languages);
                });

                dropdownList.appendChild(li);
            });
        }
    };

    //function to show the dropdown list
    const selectLanguage = (language) =>{
        seachInput.value = language;
        hideDropdown();
        searchInput.focus();
    };

    //function to show the dropdown list
    const showDropdown = () => {
      dropdownList.classList.remove("hidden", "scale-95", "opacity-0");
      dropdownList.classList.add("block", "scale-100",  "opacity-100");
      dropdownList.setAttribute("aria-hidden", "true");
      dropdownArrow.style.transform = "translateY(-50%) rotate(180deg)";
      activeIndex = -1 //reset active index
    };

    //function to hide the dropdown
    const hideDropdown = () => {
      dropdownList.classList.remove("block", "scale-100", "opacity-100");
      dropdownList.classList.add("hidden", "scale-95", "opacity-0");
      dropdownList.setAttribute("aria-expanded", "false");
      dropdownArrow.style.transform = "translateY(-50%) rotate(0deg)";
      removeActiveState();
    };

    //function to remove active state from all items
    const removeActiveState = () => {
      dropdownList.querySelectorAll("li").forEach(item => {
          item.classList.remove("bg-blue-600", "text-white");
          item.removeAttribute("aria-selected");
      });
    };

    //event listener for input changes
    searchInput.addEventListener("input", () => {
       const query = searchInput.value.toLowerCase();
       if (query === ""){
           filteredLanguages = [...allLanguages]
       }
       else{
           filteredLanguages = allLanguages.filter(language =>
               language.toLowerCase().includes(query)
           );
       }
       renderList(filteredLanguages);
       showDropdown();
    });

    //event listener for keybord navigation
    searchInput.addEventListener('keydown', (e) => {
       const items = dropdownList.querySelectorAll("li[role='option']");

       if(items.length === 0) {return};

       if(e.key === "ArrowDown"){
           e.preventDefault();
           activeIndex = (activeIndex + 1) % items.length;
           removeActiveState();
           items[activeIndex].classList.add("bg-blue-600", "text-white");
           items[activeIndex].setAttribute("aria-selected", 'true');
           items[activeIndex].scrollIntoView({block: "nearest"});
       }
       else if (e.key === "ArrowUp"){
           e.preventDefault();
           activeIndex = (actuveIndex - 1 + items.length) % items.length;
           removeActiveState();
           items[activeIndex].classList.add("bg-blue-600", "text-white");
           items[activeIndex].setAttribute("aria-selected", 'true');
           items[activeIndex].scrollIntoView({block: "nearest"});
       }
       else if (e.key === "enter"){
           e.preventDefault();
           if (activeIndex > -1){
               selectLanguage(items[activeIndex].textContent);
           }
       }
    });

    //toggle dropdown on input focus/click
    searchInput.addEventListener("click", (e) =>{
       e.stopPropagation();
       if (dropdownList.classList.contains("hidden")){
           renderList(filteredLanguages);
           showDropdown();
       }
       else {
           hideDropdown();
       }
    });

    //hide the dropdown when clicking outside the container
    document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
            hideDropdown();
        }
    });
});
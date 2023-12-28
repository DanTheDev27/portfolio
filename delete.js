function displayName() {
    document.getElementById("output").innerText.hide
     const userName = document.getElementById("nameInput").value;
     var greeting = "Hello " + userName + ".";
    document.getElementById("output").innerText = greeting;

    console.log(greeting);
}

function show () {
    var userName = document.getElementById("output");
    if (userName.style.display === "none") {
        userName.style.display = "block";
    } else {
        userName.style.display = "none";
    }
 }

 function erase () {
    document.getElementById("nameInput").value = "";
    document.getElementById("output").innerText = "";
 }

 document.getElementById("erase").addEventListener("click", erase());

function errorMessage() {
    // var error = document.getElementById("nameInput").value;
    message = document.getElementById("errorMessage");
    if (document.getElementById("nameInput").value == "") {
    message.style.display="block";
    } else {
        message.style.display="none"
    }
}

// *****************************************************

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  /**
  * Utility function to update the button text and aria-label.
  */
  document.getElementsByClassName("sun")
  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "Change to light theme" : "Change to dark theme";
    // use an aria-label if you are omitting text on the button
    // and using a sun/moon icon, for example
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
  }
  
  /**
  * Utility function to update the theme setting on the html tag
  */
  function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
  }
  
  
  /**
  * On page load:
  */
  
  /**
  * 1. Grab what we need from the DOM and system settings on page load
  */
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  /**
  * 2. Work out the current site settings
  */
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  /**
  * 3. Update the theme setting and button text accoridng to current settings
  */
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  /**
  * 4. Add an event listener to toggle the theme
  */
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  }); 

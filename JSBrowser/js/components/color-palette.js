
browser.on("init", function () {
    "use strict";

    // Set Color Palette ID
    this.ColorPaletteID = 0;

   

// Navigation Bar Set Color From Local Storage
    this.navbar.style.background = localStorage.getItem("navbarColor");


    // Title Bar Set Color From Local Storage
    this.titlebarColor = localStorage.getItem("titlebarColor");

 // Title Bar Set Color
    if (this.titlebarColor == "red") {
        this.SetTitleBarToRed();
    }
    else if (this.titlebarColor == "blue") {
        this.SetTitleBarToBlue();
    }


    // Set Navbar To Default Color
    this.setToDefaultColor.addEventListener("click", () => {
        this.navbar.style.background = "#3b3b3b";
        localStorage.setItem("navbarColor", "#3b3b3b");

    });

    // Set Color Red

    this.setToColorRed.addEventListener("click", () => {
        if (this.ColorPaletteID == 1) {
            this.navbar.style.background = "red";
            localStorage.setItem("navbarColor", "red");
        }
        else if (this.ColorPaletteID == 2) {
            this.SetTitleBarToRed();
            localStorage.setItem("titlebarColor", "red");
        }
    });

    // Set Navbar to Color Blue

    this.setToColorBlue.addEventListener("click", () => {
        if (this.ColorPaletteID == 1) {
            this.navbar.style.background = "blue";
            localStorage.setItem("navbarColor", "blue");
        }
        else if (this.ColorPaletteID == 2) {
            this.SetTitleBarToBlue();
            localStorage.setItem("titlebarColor", "blue");
        }
    });

});

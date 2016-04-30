browser.on("init", function () {
    "use strict";


    // Show Personalization Menu
    this.personalization.addEventListener("click", () => {
        this.levelOneHide();
        this.coloroptions.style.display = "block";
        
    });

    // Go Back from Personalization
    this.gobacktolevelone.addEventListener("click", () => {
        this.levelOneShow();
    });

    // Go to Color Options 
    this.coloroptions.addEventListener("click", () => {
        this.gobackfromcolormenu.style.display = "block";
        this.linknavbarcolorwithtitlebar.style.display = "block";
        this.navbarcolor.style.display = "block";
        this.titleBarColor.style.display = "block";
        this.clearCacheButton.style.display = "none";
        this.clearFavButton.style.display = "none";
        this.personalization.style.display = "none";
        this.fullscreenButton.style.display = "none";
        this.gobacktolevelone.style.display = "none";
        this.coloroptions.style.display = "none";
        
    });

    // Go back from Color Options
    this.gobackfromcolormenu.addEventListener("click", () => {
        this.gobacktolevelone.style.display = "block";
        this.coloroptions.style.display = "block";
        this.linknavbarcolorwithtitlebar.style.display = "none";
        this.clearCacheButton.style.display = "none";
        this.clearFavButton.style.display = "none";
        this.personalization.style.display = "none";
        this.fullscreenButton.style.display = "none";
        this.gobackfromcolormenu.style.display = "none";
        this.navbarcolor.style.display = "none";
        this.titleBarColor.style.display = "none";
    });


    // Link Navigation/Title Bar

    var linkNavigationbarTitlebar = localStorage.getItem("linkNavigationbarTitlebarStorage");
    if (linkNavigationbarTitlebar == "true")
    {
        this.linknavbarcolorwithtitlebarcheckbox.style.background = "red";
    }
    else {
        this.linknavbarcolorwithtitlebarcheckbox.style.background = "grey";
    }

    
        this.linknavbarcolorwithtitlebar.addEventListener("click", () => {
            if (linkNavigationbarTitlebar == false) {
                linkNavigationbarTitlebar = true;
                localStorage.setItem("linkNavigationbarTitlebarStorage", "true");
                this.linknavbarcolorwithtitlebarcheckbox.style.background = "red";
            }
            else{
                linkNavigationbarTitlebar = false;
                localStorage.setItem("linkNavigationbarTitlebarStorage", "false");
                this.linknavbarcolorwithtitlebarcheckbox.style.background = "grey";
            }
        });

    // Go to Navigation Bar Color Options
    this.navbarcolor.addEventListener("click", () => {
        this.gobackfromnavbarcolor.style.display = "block";
        this.showColorPalette(1);
        this.linknavbarcolorwithtitlebar.style.display = "none";
        this.gobackfromcolormenu.style.display = "none";
        this.coloroptions.style.display = "none";
        this.navbarcolor.style.display = "none";
        this.titleBarColor.style.display = "none";
        

    });

    // Go Back from Navigation Bar Color Options
    this.gobackfromnavbarcolor.addEventListener("click", () => {
        this.gobackfromcolormenu.style.display = "block";
        this.linknavbarcolorwithtitlebar.style.display = "block";
        this.navbarcolor.style.display = "block";
        this.titleBarColor.style.display = "block";
        this.gobackfromnavbarcolor.style.display = "none";
        this.setToDefaultColor.style.display = "none";
        this.setToColorRed.style.display = "none";
        this.setToColorBlue.style.display = "none";
       
    });


    // Titlebar Color
    this.titleBarColor.addEventListener("click", () => {
        this.showColorPalette(2);
        this.gobackfromnavbarcolor.style.display = "block";
        this.linknavbarcolorwithtitlebar.style.display = "none";
        this.gobackfromcolormenu.style.display = "none";
        this.coloroptions.style.display = "none";
        this.navbarcolor.style.display = "none";
        this.titleBarColor.style.display = "none";

    });

});

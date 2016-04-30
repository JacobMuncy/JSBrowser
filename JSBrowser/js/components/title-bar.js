// Set your default colors
    const BG_APP_COLOR = hexStrToRGBA("#f4f3f1");
    const BLACK = hexStrToRGBA("#000");
    const BLUE = hexStrToRGBA("#0000ff");
    const BRAND = hexStrToRGBA("#3B3B3B");
    const GRAY = hexStrToRGBA("#666");
    const RED = hexStrToRGBA("#FF0000");
    const WHITE = hexStrToRGBA("#FFF");
// Helper function to support HTML hexColor Strings
    function hexStrToRGBA(hexStr) {
        // RGBA color object
        let colorObject = { "r": 255, "g": 255, "b": 255, "a": 255 };

        // Remove hash if it exists
        hexStr = hexStr.replace("#", "");

        if (hexStr.length === 6) {
            // No Alpha
            return Object.assign(colorObject, {
                "r": parseInt(hexStr.slice(0, 2), 16),
                "g": parseInt(hexStr.slice(2, 4), 16),
                "b": parseInt(hexStr.slice(4, 6), 16),
                "a": parseInt("0xFF", 16)
            });
        }
        if (hexStr.length === 8) {
            // Alpha
            return Object.assign(colorObject, {
                "r": parseInt(hexStr.slice(0, 2), 16),
                "g": parseInt(hexStr.slice(2, 4), 16),
                "b": parseInt(hexStr.slice(4, 6), 16),
                "a": parseInt(hexStr.slice(6, 8), 16)
            });
        }
        if (hexStr.length === 3) {
            // Shorthand hex color
            let rVal = hexStr.slice(0, 1);
            let gVal = hexStr.slice(1, 2);
            let bVal = hexStr.slice(2, 3);

            return Object.assign(colorObject, {
                "r": parseInt(rVal + rVal, 16),
                "g": parseInt(gVal + gVal, 16),
                "b": parseInt(bVal + bVal, 16)
            });
        }
        throw new Error(`Invalid HexString length. Expected either 8, 6, or 3. The actual length was ${hexStr.length}`);
    }

    browser.on("init", function () {
    "use strict";


    this.SetTitleBarToRed = () => {
        Object.assign(this.titleBar, {
            "backgroundColor": RED,
            "buttonBackgroundColor": RED,
            "buttonPressedForegroundColor": RED,
            "inactiveBackgroundColor": RED,
            "buttonInactiveBackgroundColor": RED,
            "buttonPressedForegroundColor": RED,
            "buttonPressedBackgroundColor": RED
        });
    }

    this.SetTitleBarToBlue = () => {
        Object.assign(this.titleBar, {
            "foregroundColor": BLACK,
            "backgroundColor": BLUE,

            "buttonForegroundColor": BLACK,
            "buttonBackgroundColor": BLUE,

            "buttonHoverForegroundColor": WHITE,
            "buttonHoverBackgroundColor": GRAY,

            "buttonPressedForegroundColor": BLUE,
            "buttonPressedBackgroundColor": BLACK,

            "inactiveBackgroundColor": BLUE,

            "buttonInactiveBackgroundColor": BLUE,

            "buttonPressedForegroundColor": BLUE,
            "buttonPressedBackgroundColor": BLUE
        });
    }
    });

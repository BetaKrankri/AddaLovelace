
let root = document.documentElement;
let darkModeButton = document.getElementById("dark-mode");
let lightModeButton = document.getElementById("light-mode");

function changeColorMode(mode) {
    if (mode == "dark") {
        root.style.setProperty('--color1', "#13293D");
        root.style.setProperty('--color2', "#F7DBA7");
        root.style.setProperty('--color3', "#C57B57");
        darkModeButton.style.display = "none";
        lightModeButton.style.display = "block";
    }
    if (mode == "light") {
        root.style.setProperty('--color1', "#F8F3F2");
        root.style.setProperty('--color2', "#13293D");
        root.style.setProperty('--color3', "#63B4D1");
        darkModeButton.style.display = "block";
        lightModeButton.style.display = "none";
    }

}

darkModeButton.addEventListener("click", () => { changeColorMode('dark') });
lightModeButton.addEventListener("click", () => { changeColorMode('light') });

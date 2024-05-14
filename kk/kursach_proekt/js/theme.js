const checkTheme = () => {
    const themeHTML = document.getElementById("theme");
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light")
        themeHTML.href = 'styles-light.css';
        return;
    }

    if (localStorage.getItem("theme") === "light") {
        themeHTML.href = 'styles/styles-light.css';
    }
    else {
        themeHTML.href = 'styles/styles-dark.css';
    }
}

const setTheme = () => {
    const themeHTML = document.getElementById("theme");
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
        themeHTML.href = 'styles/styles-dark.css';
        localStorage.setItem("theme", "dark")
    }
    else {
        themeHTML.href = 'styles/styles-light.css';
        localStorage.setItem("theme", "light")
    }
}
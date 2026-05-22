const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("show");

    navigation.classList.toggle("show");
});

const currentYearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.querySelector("#lastModified");
const lastModifiedDate = document.documentMode ? document.lastModified : new Date(document.lastModified).toLocaleString("pt-BR");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
//preencher o ano de copyright dinamicamente
const currentYearElement = document.querySelector("#currentyear");
const today = new Date();
currentYearElement.textContent = today.getFullYear();

//preencher a data da última modificação
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
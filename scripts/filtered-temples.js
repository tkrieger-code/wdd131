//Array de objetos dos templos
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  
 {
    templeName: "Porto Alegre Brazil",
    location: "Porto Alegre, RS, Brazil",
    dedicated: "2000, December, 17",
    area: 10700,
    imageUrl: "images/templo-de-porto-alegre.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Münchenbuchsee, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "images/bern-temple.webp"
  }
];

//seletor da galeria os os cards vão aparecer
const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("main h2");

//função p/ renderizar os cards na tela
function displayTemples(filteredTemples){
    //limpa a galeria antes de desenhar novos itens
    gallery.innerHTML = "";

    //percorre a lista gerando a estrutura HTML
    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");

        card.innerHTML = `<h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">`;

        gallery.appendChild(card);
    });
}

// sistema de filtros para o menu de navegação
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); //evita recarregar a página
        const filter = e.target.textContent;
        pageTitle.textContent = filter; // muda o título h2 dinamicamente

        let filteredList = [];

        if (filter === "Home"){
            filteredList = temples;
        } else if (filter === "Old"){
            // filtra templos dedicados antes de 1900
            filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        } else if (filter === "New"){
            // filtra templos dedicados depois de 2000
            filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        } else if (filter === "Large"){
            // filtra templos maiores que 90.000 pés quadrados
            filteredList = temples.filter(t => t.area > 90000);
        } else if (filter === "Small"){
           // filtra  templos menores que 10.000 pés quadrados
           filteredList = temples.filter(t => t.area < 10000);
        }
        displayTemples(filteredList);
    });
});

// menu hamburguer
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("show");

    navigation.classList.toggle("show");
});

// exibição padrão inicial (carrega todos os templos ao abrir a página)
displayTemples(temples);

// datas automáticas no rodapé
const currentYearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.querySelector("#lastModified");
const lastModifiedDate = document.documentMode ? document.lastModified : new Date(document.lastModified).toLocaleString("pt-BR");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

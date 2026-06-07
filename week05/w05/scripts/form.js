// Matriz de produtos fornecida
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Executa quando o DOM estiver totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LÓGICA DA PÁGINA DO FORMULÁRIO ---
    const productSelect = document.getElementById("productName");
    
    // Verifica se o elemento select existe na página atual antes de tentar preenchê-lo
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            // O ID do array vai para o atributo VALUE
            option.value = product.id;
            // O nome do array vai para o TEXTO de exibição
            option.textContent = product.name;

            productSelect.appendChild(option);
        });
    }

    // --- 2. LÓGICA DA PÁGINA DE CONFIRMAÇÃO ---
    // Verifica se estamos na página de confirmação avaliando a URL
    if (window.location.pathname.includes("review.html")) {
        // Obtém o valor atual do localStorage, ou 0 se for a primeira vez
        let reviewCount = parseInt(localStorage.getItem("completedReviews")) || 0;

        // Incrementa o contador
        reviewCount++;

        // Salva de volta no localStorage
        localStorage.setItem("completedReviews", reviewCount);
    }

    // --- 3. LÓGICA DO RODAPÉ (FOOTER) ---
    // Inserindo o ano atual
    const currentYearElement = document.querySelector("#currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Inserindo a última modificação formatada
    const lastModifiedElement = document.querySelector("#lastModified");
    if (lastModifiedElement) {
        // Formata a data de modificação para o padrão local (ex: DD/MM/AAAA HH:MM:SS)
        const localModifiedDate = new Date(document.lastModified).toLocaleString("pt-BR");
        lastModifiedElement.textContent = `Last Modification: ${localModifiedDate}`;
    }
});
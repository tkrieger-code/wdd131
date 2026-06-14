const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", () => {
    if (input.value !== "") { //verifica se o input não está vazio
        displayList(input.value); //renderiza o capitulo na tela
        chaptersArray.push(input.value); //adiciona o capitulo ao array
        setChapterList(); //atualiza o localStorage com o novo array
        input.value = ""; //limpa o campo de entrada
        input.focus();
    }
});

// função responsável por criar e exibi o elemento na tela (DOM)
function displayList(item){
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");

    li.textContent = item;
    deletebutton.textContent = "❌";
    deletebutton.classList.add("delete"); //aplica a estilização do botão deletar

    li.append(deletebutton);
    list.append(li);

    //ouvinte de evento para deletar o item
    deletebutton.addEventListener("click", function(){
        list.removeChild(li); //remove o elemento visivel da pagina
        deleteChapter(li.textContent); // chama a função para remover do array e do localStorage
        input.focus();
    });
}

// 6. Função para salvar o array atualizado no localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// 7. Função para obter a lista de capítulos armazenada no localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// 8. Função para deletar o capítulo do array e atualizar o armazenamento
function deleteChapter(chapter) {
    // Remove o caractere "❌" do final da string obtida do li.textContent
    chapter = chapter.slice(0, chapter.length - 1);
    
    // Filtra o array para manter apenas os itens que são diferentes do capítulo deletado
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    
    // Atualiza o localStorage com a nova lista filtrada
    setChapterList();
}






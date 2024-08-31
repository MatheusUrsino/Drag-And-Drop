const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // adiciona a tag 'dragging' após o delay
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // Remove a classe 'dragging' após o evento 'dragend' ser ativado
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});
const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    // Pega todos os itens exceto o que está sendo arrastado e faz uma vetorização dos mesmos
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
    // encontrar o 'parente' 
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    // insere o item arrastado antes de achar seu 'parente'
    sortableList.insertBefore(draggingItem, nextSibling);
}
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());
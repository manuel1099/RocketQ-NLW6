import  Modal  from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2')
const modalDescriptions = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    //forEach lé um botão de cada vez
    button.addEventListener("click", handleClick)

})


const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){

    event.preventDefault();

    const text = check ? "Marcar como lida" : "Exluir";
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id;
    
    
    //pegar formulario
    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    
    
    modalTitle.innerHTML = `${text} esta pergunta` ;
    modalDescriptions.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
    //abrir modal
    modal.open();
}
export default function  Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper');

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //Abrir modal
        modalWrapper.classList.add("active");//adiciou a classe active na classe modal-wrapper
    }
    function close(){
        //fechar modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}
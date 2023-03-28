function adicionarMsg(inputMessage) {
    if(inputMessage != ''){
        const novoItem = document.createElement("p");
        novoItem.innerHTML = `${inputMessage}`;
        novoItem.className = 'chat-settings';

        const newComment = document.querySelector("#newMessages");
        newComment.appendChild(novoItem);
        const box2 = document.querySelector('#box2');
        box2.scrollTop = box2.scrollHeight;

        document.getElementById('message').value = ''
    } else {
        alert('Digite uma mensagem valida.')
        document.getElementById('message').value = ''
    }
}

const formAdd = document.querySelector("#send-message-box");
formAdd.addEventListener("submit", function(event) {
    event.preventDefault();
    if (True) {
        const inputMsg = document.getElementById('message').value
        adicionarMsg(inputMsg);
}});

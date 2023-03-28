function adicionarMsg(inputMessage) {
    if(inputMessage != ''){
        const novoItem = document.createElement("p"); //cria a "base" da nova mensagem <p>
        novoItem.innerHTML = `${inputMessage}`;
        novoItem.className = 'chat-settings'; //busca o styles do css

        const newComment = document.querySelector("#newMessages"); //usa append pra jogar dentro da div, selecionada pela classe
        newComment.appendChild(novoItem);
        const box2 = document.querySelector('#box2');
        box2.scrollTop = box2.scrollHeight; //faz a barra de scroll seguir

        document.getElementById('message').value = '' //limpa o placeholder
    } else {
        alert('Digite uma mensagem valida.')
        document.getElementById('message').value = '' //limpa o placeholder
    }
}

const formAdd = document.querySelector("#send-message-box"); //monitora o enter
formAdd.addEventListener("submit", function(event) {
    event.preventDefault();
    if (True) {
        const inputMsg = document.getElementById('message').value
        adicionarMsg(inputMsg);
}});

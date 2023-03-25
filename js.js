function adicionarMsg(inputMessage) {
    const novoItem = document.createElement("p"); //cria a "base" da nova mensagem <p>
    novoItem.style.width = '100px';
    novoItem.style.height = '120px';
    
    const text = document.createTextNode(inputMessage); //adiciona o texto dentro da "base"
    novoItem.appendChild(text);

    const newComment = document.querySelector("#newMessages"); //usa append pra jogar dentro da div, selecionada pela classe
    newComment.appendChild(novoItem);
}

const formAdd = document.querySelector("#send-message-box"); //monitora o enter
formAdd.addEventListener("submit", function(event) {
    if (True) {
        const inputMsg = document.getElementById('message').value
        adicionarMsg(inputMsg);
}});

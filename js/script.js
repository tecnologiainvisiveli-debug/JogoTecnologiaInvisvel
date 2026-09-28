/* Boas-vindas */
mudarMensagem("Boas-vindas");

/* Primeira opção de uma mensagem */
let btn1 = document.querySelector('#btn1');
/* Segunda opção de uma mensagem */
let btn2 = document.querySelector('#btn2');

/* Decidindo nome do usuário */
btn1.addEventListener("click", function() {
    addHistorico(btn1)
    mudarMensagem("Criando uma conta"); 
});
let btnConfirmar = document.querySelector('#btnConfirmar');
decisaoDoUsuario.addEventListener("click", function(event) {
    if (event.target.id === "btnConfirmar") {
        perfil.nomeDoUsuario =
            decisaoDoUsuario.querySelector("input").value.trim();

        mudarMensagem("Explorando a internet");
    }
});

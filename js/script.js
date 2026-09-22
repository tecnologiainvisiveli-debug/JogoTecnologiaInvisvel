for (let i = 0; i < arrayDeMensagens.length; i++) {
    if (arrayDeMensagens[i].titulo === "Boas-vindas") {
        h2JogoPrincipal.textContent = arrayDeMensagens[i].titulo;
        pJogoPrincipal.textContent = arrayDeMensagens[i].mensagem;

        decisaoDoUsuario.innerHTML = '<button id="btn1">Começar</button>';

        btn1.addEventListener('click',function() {
            for ()
        })
    }
};
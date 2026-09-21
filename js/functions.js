function mudarMensagem(titulo) {
    for (let i = 0; i < arrayDeMensagens.length; i++) {
        if (arrayDeMensagens[i].titulo === titulo) {
            h2JogoPrincipal.textContent = arrayDeMensagens[i].titulo;
            pJogoPrincipal.textContent = arrayDeMensagens[i].mensagem;
        }
    }
};   
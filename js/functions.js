function mudarMensagem(titulo) {
    for (let i = 0; i < arrayDeMensagens.length; i++) {
        if (arrayDeMensagens[i].titulo === titulo) {
            h2JogoPrincipal.textContent = arrayDeMensagens[i].titulo;
            pJogoPrincipal.textContent = arrayDeMensagens[i].mensagem;

            /* Se a mensagem tiver a opção 1 e opção 2 */
            if ((arrayDeMensagens[i].includes(arrayDeMensagens[i].opcao1)) && (arrayDeMensagens[i].includes(arrayDeMensagens[i].opcao2))) {

                decisaoDoUsuario.innerHTML = `<button id="btn1">${arrayDeMensagens[i].opcao1}</button><button id="btn2">${arrayDeMensagens[i].opcao2}</button>`;
            
            /* Se a mensagem tiver a opção 1 e não tiver opção 2 */
            } else if ((arrayDeMensagens[i].includes(arrayDeMensagens[i].opcao1)) && ((arrayDeMensagens[i].includes(arrayDeMensagens[i].opcao2)) === false)) {

                decisaoDoUsuario.innerHTML = `<button id="btn1">${arrayDeMensagens[i].opcao1}`;
                
            }
        }
    }
};   
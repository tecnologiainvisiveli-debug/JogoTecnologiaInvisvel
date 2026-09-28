/* Função para passar as etapas do jogo */
function mudarMensagem(titulo) {
    for (let i = 0; i < arrayDeMensagens.length; i++) {

        if (arrayDeMensagens[i].titulo === titulo) {
            h2JogoPrincipal.textContent = arrayDeMensagens[i].titulo;
            pJogoPrincipal.textContent = arrayDeMensagens[i].mensagem;
            
            /* Se for a mensagem de boas-vindas */
            if (arrayDeMensagens[i].titulo === "Boas-vindas") {
                decisaoDoUsuario.innerHTML = "<button id='btn1'>Começar</button>";

            /* Se for a mensagem de criação de conta */
            } else if (arrayDeMensagens[i].titulo === "Criando uma conta") {
                decisaoDoUsuario.innerHTML = `
                    <input type="text" placeholder="Digite seu nome de usuário">
                    <button id="btnConfirmar">Confirmar</button>
                `;

            /* Se a mensagem conter as duas opções de decisão do usuário */
            } else {
                decisaoDoUsuario.innerHTML = `
                    <button id="btn1">${arrayDeMensagens[i].opcao1}</button>
                    <button id="btn2">${arrayDeMensagens[i].opcao2}</button>
                `;
            };
            pJogoPrincipal.textContent = arrayDeMensagens[i].mensagem.replace("{nomeDoUsuario}", perfil.nomeDoUsuario)
        }
    }
};

/* Função para adicionar etapas passadas ao histórico */
function addHistorico(btnClicado) {
    let divEtapa = document.createElement('div');
    divEtapa.setAttribute('class','etapaConcluida');

    let titulo = document.createElement('p');
    titulo.appendChild(document.createTextNode(h2JogoPrincipal.textContent));
    
    let mensagem = document.createElement('p');
    mensagem.appendChild(document.createTextNode(pJogoPrincipal.textContent));

    let opcEscolhida = document.createElement('p');
    opcEscolhida.appendChild(document.createTextNode(btnClicado.textContent));

    divEtapa.appendChild(titulo);
    divEtapa.appendChild(mensagem);
    divEtapa.appendChild(opcEscolhida);

    historico.appendChild(divEtapa)
};
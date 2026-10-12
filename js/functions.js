/* Função para passar as etapas do jogo */
function mudarMensagem(titulo) {
    for (let i = 0; i < arrayDeMensagens.length; i++) {

        if (arrayDeMensagens[i].titulo === titulo) {
            h2JogoPrincipal.textContent = arrayDeMensagens[i].titulo;
            pJogoPrincipal.textContent = arrayDeMensagens[i].mensagem;
            
            /* Se for a mensagem de boas-vindas */
            if (arrayDeMensagens[i].titulo === "Boas-Vindas") {
                decisaoDoUsuario.innerHTML = '<button class="btn1">Começar</button>';

            /* Se for a mensagem de criação de conta */
            } else if (arrayDeMensagens[i].titulo === "Criando uma Conta") {
                decisaoDoUsuario.innerHTML = `
                    <input type="text" placeholder="Digite seu nome de usuário" id="inputNomeUsuario">
                    <button id="btnConfirmar">Confirmar</button>
                `;

            // Se for a mensagem de game over ou final
            } else if (arrayDeMensagens[i].titulo === "Dados Perdidos" || arrayDeMensagens[i].titulo === "Fim") {
                decisaoDoUsuario.innerHTML = '<button class="btnReiniciar" onclick="window.location.reload()">Jogar Novamente</button>';

            } else if (arrayDeMensagens[i].opcao1 && arrayDeMensagens[i].opcao2) {
                decisaoDoUsuario.innerHTML = `
                    <button class="btn1">${arrayDeMensagens[i].opcao1}</button>
                    <button class="btn2">${arrayDeMensagens[i].opcao2}</button>
                `;
            } else {
                decisaoDoUsuario.innerHTML = `<button class="btn1">${arrayDeMensagens[i].opcao1}</button>`;
            }
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
    divEtapa.appendChild(titulo);

    let mensagem = document.createElement('p');
    mensagem.appendChild(document.createTextNode(pJogoPrincipal.textContent));
    divEtapa.appendChild(mensagem);

    if (titulo.textContent === 'Boas-Vindas') {
        let opcEscolhida = document.createElement('p');
        opcEscolhida.appendChild(document.createTextNode(btnClicado.textContent));
        divEtapa.appendChild(opcEscolhida);
    } else if (titulo.textContent === 'Criando uma Conta') {
        let opcEscolhida = document.createElement('p');
        opcEscolhida.appendChild(document.createTextNode(perfil.nomeDoUsuario));
        divEtapa.appendChild(opcEscolhida);
    } else {
        let opcEscolhida = document.createElement('p');
        opcEscolhida.appendChild(document.createTextNode(`${perfil.nomeDoUsuario}: ${btnClicado.textContent}`));
        divEtapa.appendChild(opcEscolhida);
    };

    historico.appendChild(divEtapa);
};

/* Função para adicionar informações à aba de status */
function addStatus() {
    const nome = document.querySelector(
        '#abaStatusPersonagem .conteudoAba > h2:first-of-type'
    );
    const emailElement = document.querySelector(
        '#abaStatusPersonagem .conteudoAba > p:first-of-type'
    );

    if (nome) {
        nome.textContent = perfil.nomeDoUsuario;
    }

    if (emailElement) {
        const email = perfil.nomeDoUsuario
            .toLowerCase()
            .replace(/\s+/g, '') + '@email.com.br';
        emailElement.textContent = `Email: ${email}`;
    }
}

/* Função para passar as etapas do jogo */
function mudarMensagem(titulo) {
    for (let i = 0; i < arrayDeMensagens.length; i++) {

        if (arrayDeMensagens[i].titulo === titulo) {
            h2JogoPrincipal.textContent = arrayDeMensagens[i].titulo;
            pJogoPrincipal.textContent = arrayDeMensagens[i].mensagem.replace('{nomeDoUsuario}',perfil.nomeDoUsuario);
            
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
};

// Função para manipular nivel de segurança e mostrar na aba "statusPersonagem"
function updSecLevel(valor,operacao,callback) {
    const nivelDeSegurancaElement = document.querySelector('#abaStatusPersonagem .nivelSegurancaValor');
    // Para aumento do nível de segurança
    if (operacao === 'adicao') {
        perfil.nivelDeSeguranca += valor;
    // Para diminuição do nível de segurança
    } else if (operacao === 'subtracao') {
        perfil.nivelDeSeguranca -= valor;
    } else {
        console.log('operação invalida na função "updSecLevel".');
        return;
    };
    if (nivelDeSegurancaElement) {
        nivelDeSegurancaElement.textContent = `${perfil.nivelDeSeguranca}%`;
    }
    if (typeof callback === 'function') {
        callback(valor,operacao,fecharPopUp);
    }
};

// Função callback para criar a mensagem pop-up
function createPopUp(valor,operacao,callback) {
    const espacPopup = document.querySelector('#espacPopup');
    const popUpGanhoSec = document.querySelector('#pop-upGanhoSec');
    const fecharPopupGanho = document.querySelector('#pop-upGanhoSec .btnFecharPop-up');
    const popUpPerdaSec = document.querySelector('#pop-upPerdaSec');
    const fecharPopupPerda = document.querySelector('#pop-upPerdaSec .btnFecharPop-up');

    // Esconde os dois pop-ups antes de exibir o correspondente à operação.
    popUpGanhoSec.style.display = 'none';
    popUpPerdaSec.style.display = 'none';

    // Pop-up de aumento do nível de segurança
    if (operacao === 'adicao') {
        espacPopup.style.setProperty('display','flex','important');
        popUpGanhoSec.style.display = 'flex';
        popUpGanhoSec.querySelector('h3').textContent = `+${valor}%sec`;
        popUpGanhoSec.querySelector('.p-container-pop-up p').textContent =
            `Você ganhou ${valor}% de nível de segurança! Sua segurança aumentou. Continue assim!`;

        // O parâmentro "callback" deverá ter o valor definido como a função "fecharPopUp" 
        fecharPopupGanho.addEventListener('click',callback);
        
    // Pop-up de diminuição do nível de segurança
    } else if (operacao === 'subtracao') {
        espacPopup.style.setProperty('display','flex','important');
        popUpPerdaSec.style.display = 'flex';
        // Título h3 do pop-up para perda de segurança
        popUpPerdaSec.querySelector('h3').textContent = `-${valor}%sec`;
        popUpPerdaSec.querySelector('.p-container-pop-up p').textContent =
            `Você perdeu ${valor}% de nível de segurança. Sua segurança diminuiu. Fique atento!`;
        
        // O parâmentro "callback" deverá ter o valor definido como a função "fecharPopUp" 
        fecharPopupPerda.addEventListener('click',callback);

    } else {
        console.log('operação invalida na função "createPopup".');
    };
};

// Função callback para fechar o pop-up, usada na função "createPopup"
function fecharPopUp() {
    const espacPopup = document.querySelector('#espacPopup');
    const popUpGanhoSec = document.querySelector('#pop-upGanhoSec');
    const popUpPerdaSec = document.querySelector('#pop-upPerdaSec');
    if (popUpGanhoSec.style.display === 'flex') {
        popUpGanhoSec.style.display = 'none';
    } else if (popUpPerdaSec.style.display === 'flex') {
        popUpPerdaSec.style.display = 'none';
    };
    espacPopup.style.setProperty('display','none','important'); 
};

// Função para o nível de segurança não passar de 100%
function levelMaxSeguranca() {
    if (perfil.nivelDeSeguranca > 100) {
        perfil.nivelDeSeguranca = 100;
        document.querySelector('#abaStatusPersonagem .conteudoAba h2:last-child .nivelSegurancaValor').textContent = `100%`;
    };
}
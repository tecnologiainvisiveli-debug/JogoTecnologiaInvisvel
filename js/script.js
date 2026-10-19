// Destinos das escolhas. Preencha os valores null conforme você definir o fluxo.
const fluxoEtapas = Object.fromEntries(
    etapas.map((titulo) => [titulo, { btn1: null, btn2: null }])
);

// Destinos já definidos até aqui.
fluxoEtapas['Boas-Vindas'].btn1 = 'Criando uma Conta';
fluxoEtapas['Criando uma Conta'].confirmar = 'Explorando a Internet';
fluxoEtapas['Explorando a Internet'].btn1 = 'A Pressão Aumenta';
fluxoEtapas['Explorando a Internet'].btn2 = 'Preenchendo as Informações';
fluxoEtapas['Preenchendo as Informações'].btn1 = 'Hora de Jogar Um Pouquinho';
fluxoEtapas['Preenchendo as Informações'].btn2 = 'Algo Deu Errado';
fluxoEtapas['A Pressão Aumenta'].btn1 = 'Algo Deu Errado';
fluxoEtapas['A Pressão Aumenta'].btn2 = 'Hora de Jogar Um Pouquinho';
fluxoEtapas['Algo Deu Errado'].btn1 = 'Voltou Tudo ao Normal';
fluxoEtapas['Algo Deu Errado'].btn2 = 'Dados Perdidos';
fluxoEtapas['Voltou Tudo ao Normal'].btn1 = 'Hora de Jogar Um Pouquinho';
fluxoEtapas['Hora de Jogar Um Pouquinho'].btn1 = 'Alerta de Conteúdo Chocante';
fluxoEtapas['Hora de Jogar Um Pouquinho'].btn2 = 'Viva a Pirataria';
fluxoEtapas['Viva a Pirataria'].btn1 = 'Quase lá';
fluxoEtapas['Viva a Pirataria'].btn2 = 'Obedencendo a Lei';
fluxoEtapas[etapas[9]].btn2 = 'Dados Perdidos';
fluxoEtapas['Obedencendo a Lei'].btn1 = 'Alerta de Conteúdo Chocante';
fluxoEtapas['Quase lá'].btn1 = 'Obedencendo a Lei';
fluxoEtapas['Alerta de Conteúdo Chocante'].btn1 = 'Compartilhando com Geral';
fluxoEtapas['Alerta de Conteúdo Chocante'].btn2 = 'O Que Realmente Aconteceu';
fluxoEtapas['O Que Realmente Aconteceu'].btn1 = 'Espalhando a Verdade';
fluxoEtapas['Compartilhando com Geral'].btn1 = 'Espalhando a Verdade';
fluxoEtapas['Espalhando a Verdade'].btn1 = 'Aprendendo Coisas Novas';
fluxoEtapas['Espalhando a Verdade'].btn2 = 'Fim';
fluxoEtapas['Aprendendo Coisas Novas'].btn1 = 'Sendo Aconselhado';
fluxoEtapas['Aprendendo Coisas Novas'].btn2 = 'Fim';
fluxoEtapas['Sendo Aconselhado'].btn1 = 'Fim';
fluxoEtapas['Sendo Aconselhado'].btn2 = 'Fim';

function mostrarEtapa(titulo) {
    if (!etapas.includes(titulo)) {
        console.error(`Etapa não encontrada: ${titulo}`);
        return;
    }

    mudarMensagem(titulo);

    if (nivelDeSeguranca <= 0) {
        mudarMensagem('Dados Perdidos')
        updSecLevel(perfil.nivelDeSeguranca,'subtracao',createPopUp);
    } else {
        if (titulo === 'Preenchendo as Informações') {
            updSecLevel(43, 'subtracao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === 'Algo Deu Errado') {
            updSecLevel(34, 'subtracao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === 'Voltou Tudo ao Normal') {
            updSecLevel(37, 'adicao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === 'Quase lá') {
            updSecLevel(55, 'subtracao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === 'Obedencendo a Lei') {
            updSecLevel(58, 'adicao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === 'Compartilhando com Geral') {
            updSecLevel(12, 'subtracao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === 'O Que Realmente Aconteceu') {
            updSecLevel(12, 'adicao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === 'Aprendendo Coisas Novas') {
            updSecLevel(26, 'subtracao', createPopUp);
            levelMaxSeguranca();
        } else if (titulo === "Dados Perdidos") {
            updSecLevel(perfil.nivelDeSeguranca,'subtracao',createPopUp);
            levelMaxSeguranca();
        }
    }
}

// Delegação: decisaoDoUsuario permanece no HTML mesmo quando seus botões mudam.
decisaoDoUsuario.addEventListener('click', function (event) {
    const botao = event.target.closest('button');
    if (!botao || !decisaoDoUsuario.contains(botao)) return;

    const etapaAtual = h2JogoPrincipal.textContent;
    const destinos = fluxoEtapas[etapaAtual];
    if (!destinos) return;

    if (botao.id === 'btnConfirmar') {
        const inputNome = decisaoDoUsuario.querySelector('#inputNomeUsuario');
        const nome = inputNome.value.trim();
        if (!nome) {
            inputNome.focus();
            return;
        }

        perfil.nomeDoUsuario = nome;
        addStatus();
        addHistorico(botao);
        const destino = destinos.confirmar;
        if (destino) mostrarEtapa(destino);
        return;
    }

    const escolha = botao.classList.contains('btn1') ? 'btn1' :
        botao.classList.contains('btn2') ? 'btn2' : null;
    if (!escolha) return;

    addHistorico(botao);
    const destino = destinos[escolha];
    if (destino) {
        mostrarEtapa(destino);
    } else {
        console.info(`Destino ainda não definido: ${etapaAtual} / ${escolha}`);
    }
});

// Permite confirmar o nome pressionando Enter.
decisaoDoUsuario.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.target.id === 'inputNomeUsuario') {
        decisaoDoUsuario.querySelector('#btnConfirmar').click();
    }
});

mostrarEtapa(etapas[0]);

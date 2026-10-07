/* Status do jogador */
let perfil = {
    nomeDoUsuario: "",
    nivelDeSeguranca: 100
};

/* === Mensagens do jogo === */
const arrayDeMensagens = [
    /* Boas-vindas */
    {
        titulo: 'Boas-Vindas',
        mensagem: "Olá! Seja bem-vindo(a) ao 404:YOU. Estamos felizes em tê-lo(a) aqui! Aqui você encontrará desafios emocionantes, decisões importantes e oportunidades de se divertir. Cada escolha que você fizer terá um impacto no desenrolar da história. Prepare-se para embarcar em uma jornada única e tecnológica. Boa sorte!"
    },

    /* === Decidindo o nome de usuário === */
    {
        titulo: 'Criando uma Conta',
        mensagem: 'Você está quase terminando de criar uma conta para finalmente poder explorar a internet. Muito ancioso(a) para começar a navegar, não é mesmo? Mas antes de prosseguir, você precisa decidir um nome de usuário legal para interagir com outras pessoas. Lembre-se de ser criativo(a), não quer ser conhecido como "usuário123", né?'
    },

    /* === Link para site falso === */
    {
        titulo: 'Explorando a Internet',
        mensagem: 'Enquanto você navega pela internet, você encontra um site de chat online com várias pessoas conversando. Uma das pessoas comenta sobre um joguinho de navegador que supostamente pudesse ganhar dinheiro de verdade. As outras pessoas parecem animadas e até mesmo falam que funcionou para elas. "Eai {nomeDoUsuario}, vai tentar tmb???" - diz uma das pessoas',

        opcao1: 'Não me parece uma boa ideia',
        opcao2: 'Vou tentar! Parece divertido'
    },

    /* === Expondo dados pessoais no site falso === */
    {
        titulo: 'Preenchendo as Informações',
        mensagem: 'Muito sagaz, você clica no link que o enviaram no chat, tudo aparenta ser bem receptivo com patrocínios de diversas empresas, você não as conhece, mas parecem ser famosas, a emoção te toma conta por dentro, mas com um enorme frio na barriga depara se diante uma página solicitando suas informações bancárias para efetuar os pagamentos, você já sabia que isso vira acontecer cedo ou mais tarde. E agora, qual será seu próximo passo, vai responder ou escutar o medinho?',

        opcao1: 'Não sei se confio tanto assim',
        opcao2: 'Ha, já estou aqui mesmo'
    },

    /* === Sendo influênciado por pessoas más === */
    {
        titulo: 'A Pressão Aumenta',
        mensagem: 'Depois de hesitar, você começa a receber novas mensagens de outros usuários. Eles insistem que o link é seguro e garantem que outras pessoas já conseguiram dinheiro através dele. Quanto mais mensagens chegam, mais difícil fica ignorar a pressão.',

        opcao1: 'Se funcionou para todos, funciona!',
        opcao2: 'Ainda não vo fazer isso'
    },

    /* === Pegando o primeiro vírus === */
    {
        titulo: 'Algo Deu Errado',
        mensagem: 'Assim que os dados são enviados, a página muda completamente. A tela escurece e fica travada, enquanto uma mensagem aparece agradecendo pela participação. Por alguns segundos, nada acontece. Então você percebe que talvez aquela página nunca tenha sido o que parecia.',

        opcao1: 'Acho que vou pesquisar uma solução',
        opcao2: 'Um desses anúncios deve ajudar'
    },

    /* === Removendo vírus sozinho === */
    {
        titulo: 'Voltou Tudo ao Normal',
        mensagem: 'Depois de muito tanto tempo, tudo volta a ser como deveria. Você olha nas configurações e vê que não há mais riscos no sistema, por meio de uma videoaula da internet, você conseguiu remover o vírus, com certeza não vai acreditar em promessas milagrosas online, afinal quase arruinou a própria vida, por causa de uma.',

        opcao1: 'Irei voltar para chat agora'
    },

    /* === Conhecendo outros jogadores amigos === */
    {
        titulo: 'Hora de Jogar Um Pouquinho',
        mensagem: 'Você conhece um grupo de pessoas amigáveis em uma sala, um deles fala “bora jogar hj com a gente {nomeDoUsuario}”, quando você vai na loja para instalar o suposto jogo, ele é pago, mas e agora! Não temos dinheiro para comprar isso agora, quase desistindo você lembra de ter visto como se baixa coisas piratas completamente de graça, por que não testar, não é mesmo?',

        opcao1: 'Melhor deixar para lá',
        opcao2: 'Já que eu sei, oque pode dar errado'
    },

    /* === Baixando jogo pirata === */
    {
        titulo: 'Viva a Pirataria',
        mensagem: 'Você seguiu instintos, eles não costumam falhar tão fácil, não é mesmo? Depois de procurar em diversos sites, dos mais profundos buracos da internet, você encontra o tesouro, uma página com o jogo e um vistoso botão de download, já tinha em sua mente que não encontraria em qualquer, está com um bom pressentimento, agora é um clicar, vá em frente.',

        opcao1: 'Consegui! Vou poder jogar',
        opcao2: 'Pensando melhor não'
    },
    
    /* === Sendo hackeado por arquivo malicioso === */
    {
        titulo: 'Quase lá',
        mensagem: 'Sim! Você clicou no botão e a página baixou o instalador de arquivos com o nome do jogo, sem pensar você executa no computador, o jogo termina de baixar e você vê tudo dando certo, até demais, você recebe uma única notificação do sistema, um vírus de “spyware” foi instalado no lugar do jogo, suas informações estão sendo enviadas para alguém constantemente, como vai resolver {nomeDoUsuario}?',

        opcao1: 'Denuncio, pode acontecer com alguém',
        opcao2: 'Espera! Me deixa pensar'
    },
    
    /* === Denunciando criminoso com LGPD === */
    {
        titulo: 'Obedencendo a Lei',
        mensagem: 'Como eu cidadão de bem, você busca sem informar sobre a lei rapidamente pelo celular, descobre sobre a LGPD (Lei Geral de Proteção de Dados), uma lei consolidada em 2018, com diversos princípios para vós usuário indefesos, consegue denunciar para a DCCIBER (Divisão de Crimes Cibernéticos), a página saiu do ar e seu dados foram recuperados, parabéns pela atitude.',

        opcao1: 'Hora de descansar um pouco'
    },
    
    /* === Recebendo vídeo fake de famoso === */
    {
        titulo: 'Alerta de Conteúdo Chocante',
        mensagem: 'Agora relaxa, você está no seu momento de descanso, abre suas redes sociais só para se manter ver as novidades, todo mundo está comentado de um tal vídeo, você assiste e vê um conhecido brigando com pessoas que você não conhece, confuso,  pensa em compartilhar o vídeo para mais pessoas para terem cuidado ao andar na rua, nunca se sabe quando alguém irá arranjar confusão.',

        opcao1: 'Claro, o povo precisa ficar sabendo',
        opcao2: 'Deve ser mentira'
    },
    
    /* === Espalhando vídeo fake news === */
    {
        titulo:  'Compartilhando com Geral',
        mensagem: 'Depois de contar para todos suas amizades do aplicativo, muitas pessoas passam a manter distância do seu conhecido, essa não era sua intenção ao compartilhar o vídeo, ele acabou saindo como errado na visão de outros indivíduos que não o conhecem, você entra em contato com ele, para tentar descobrir o que está acontecendo e percebe que o vídeo que falso, feito com uma tal de inteligência artificial, poderosa, capaz de fazer coisas que humanos demoraram longas horas, ela pode terminal em questão se segundos',

        opcao1: 'Deixa eu resolver isso primeiro'
    },
    
    /* === Evitando compartilhar fake news === */
    {
        titulo:  'O Que Realmente Aconteceu',
        mensagem: 'Você opta por falar com seu conhecido e as outras pessoas que gravaram antes mesmo de compartilhar a notícia. Bem sensato da sua parte. Elas te explicam que não passava tudo de uma brincadeira que fizeram quando estavam juntas, enquanto testavam uma tal de inteligência artificial,poderosa, capaz de fazer coisas que humanos demoraram longas horas, ela pode terminal em questão se segundos',

        opcao1: 'Nossa! Vou tentar usar'
    },
    
    /* === Alertando pessoas sobre fake news e conhecendo a IA === */
    {
        titulo:  'Espalhando a Verdade',
        mensagem: 'Primeiro de tudo, você espalha que o vídeo é falso para suas amizades do aplicativo, chega de conflitos por causa desse vídeo, depois de terminar, você pergunta para um amigo que conheceu no site, qual inteligência artificial ele costuma usar para fazer as coisas do dia a dia. Você entra no site, mas é necessário criar uma conta com suas informações pessoais, seu amigo diz que é totalmente confiável, mas fica com um receio, não tem boas lembranças com páginas de cadastro não é mesmo, dessa vez pode ficar tranquilo em relação a golpes.',

        opcao1: 'Dessa vez é confiável',
        opcao2: 'Não me importo tanto assim em ficar sem'
    },
    
    /* === Explorando a inteligência artificial === */
    {
        titulo:  'Aprendendo Coisas Novas',
        mensagem: 'Finalmente algo diferente, você cria uma conta e começa a testar como tudo funciona, é bem simples, você envia, ela responde, as vezes elas cita seus dados durante a conversa, você se sente desconfortável, mas ignora. Quanto mais você conversa, mais ela começa a falar sobre você, religião, ideologias, isso começa a te preocupar, já na sabe se continua usando ou apaga a própria conta.',

        opcao1: 'Bom demais para parar',
        opcao2: 'Vou apagar a conta'
    },
    
    /* Sendo aconselhado por um colega === */
    {
        titulo:  'Sendo Aconselhado',
        mensagem: 'Uma pessoa daquele chat público, te pede a sua conta emprestada para usar rapidamente, diz que perdeu a senha, você empresta, mas enquanto ele utiliza a IA revela diversos dados pessoais. Por sorte, ele só te avisa “{nomeDoUsuario}, já terminei aqui, sabia que sua IA tá revelando tudo seu?”. Você pergunta o que pode ser feito, ele diz para você pesquisar sobre modelos de IA locais, IA personalizada, funcionando direito do seu computador. Você gosta da ideia, parece muito mais seguro.',

        opcao1: 'Vou buscar saber mais sobre',
        opcao2: 'Não usar mais é melhor'
    },

    /* === Final === */
    {
        titulo: 'Fim',
        mensagem: 'Parabéns, você conseguiu chegar até o final da história. Agradeçemos por permanecer até aqui, esperamos que você tenha gostado e aprendido muito sobre o perigo de se usar a internet sem ter cuidados, esse tipo de coisa está se tornando cada vez mais frequentes. Agora você pode abrir o histórico e reler sua história ou reiniciar a página para jogar de novo. Obrigado mais uma vez, Tchau {nomeDoUsuario}! E se proteja.'
    }
];
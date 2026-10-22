/* Status do jogador */
let perfil = {
    nomeDoUsuario: "",
    nivelDeSeguranca: 100
};   

// === Etapas possíveis do Jogo === // posições //
const etapas = [
    'Boas-Vindas',                // 0 // === Boas-Vindas ===
    'Criando uma Conta',          // 1 // === Decidindo o nome de usuário ===
    'Explorando a Internet',      // 2 // === Link para site falso ===
    'Preenchendo as Informações', // 3 // === Expondo dados pessoais no site falso ===
    'A Pressão Aumenta',          // 4 // === Sendo ifluênciado por pessoas más === 
    'Algo Deu Errado',            // 5 // === Pegando o primeiro vírus ===
    'Voltou Tudo ao Normal',      // 6 // === Removendo vírus sozinho ===
    'Hora de Jogar Um Pouquinho', // 7 // === Conhecendo outros amigos jogadores ===
    'Viva a Pirataria',           // 8 // === Baixando jogo pirata ===
    'Quase lá',                   // 9 // === Sendo hackeado por arquivo malicioso ===
    'Obedencendo a Lei',          // 10 // === Denunciando criminoso com LGPD ===
    'Alerta de Conteúdo Chocante',// 11 // === Recebendo vídeo fake de famoso ===
    'Compartilhando com Geral',   // 12 // === Espalhando fake news ===
    'O Que Realmente Aconteceu',  // 13 // === Evitando compartilhar fake news ===
    'Espalhando a Verdade',       // 14 // === Alertando pessoas sobre fake news e conhecendo a IA ===
    'Aprendendo Coisas Novas',    // 15 // === Explorando a inteligência artificial ===
    'Sendo Aconselhado',          // 16 // === Sendo aconselhado por um colega ===
    'Fim',                        // 17 // === Final ===
    'Dados Perdidos'              // 18 // === Game Over ===
];

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
        mensagem: ' Você está quase terminando de criar uma conta para finalmente poder explorar a internet. Muito ansioso(a) para começar a navegar, não é mesmo? Mas, antes de prosseguir, você precisa decidir um nome de usuário legal para interagir com outras pessoas. Lembre-se de ser criativo(a), não quer ser conhecido como "usuário123", né?'
    },

    /* === Link para site falso === */
    {
        titulo: 'Explorando a Internet',
        mensagem: 'Enquanto você navega pela internet, encontra um site de chat online com várias pessoas conversando. Uma das pessoas comenta sobre um joguinho de navegador com o qual supostamente seria possível ganhar dinheiro de verdade. As outras pessoas parecem animadas e até mesmo dizem que funcionou para elas. "Eai , vai tentar tmb???" — diz uma das pessoas',

        opcao1: 'Não me parece uma boa ideia',
        opcao2: 'Vou tentar! Parece divertido'
    },

    /* === Expondo dados pessoais no site falso === */
    {
        titulo: 'Preenchendo as Informações',
        mensagem: 'Muito sagaz, você clica no link que enviaram no chat. Tudo aparenta ser bem receptivo, com patrocínios de diversas empresas. Você não as conhece, mas elas parecem ser famosas. A emoção toma conta de você, mas, com um enorme frio na barriga, você se depara com uma página que solicita suas informações bancárias para efetuar os pagamentos. Você já sabia que isso iria acontecer cedo ou tarde. E agora, qual será seu próximo passo? Vai responder ou escutar o medinho?',

        opcao1: 'Não sei se confio tanto assim',
        opcao2: 'Ha, já estou aqui mesmo'
    },

    /* === Sendo influênciado por pessoas más === */
    {
        titulo: 'A Pressão Aumenta',
        mensagem: 'Depois de hesitar, você começa a receber novas mensagens de outros usuários. Eles insistem que o link é seguro e garantem que outras pessoas já conseguiram dinheiro através dele. Quanto mais mensagens chegam, mais difícil fica ignorar a pressão.',

        opcao1: 'Se funcionou para todos, funciona!',
        opcao2: 'Ainda não vou fazer isso'
    },

    /* === Pegando o primeiro vírus === */
    {
        titulo: 'Algo Deu Errado',
        mensagem: 'Assim que os dados são enviados, a página muda completamente. A tela escurece e fica travada, enquanto uma mensagem aparece agradecendo pela participação. Por alguns segundos, nada acontece. Então, você percebe que talvez aquela página nunca tenha sido o que parecia.',

        opcao1: 'Acho que vou pesquisar uma solução',
        opcao2: 'Um desses anúncios deve ajudar'
    },

    /* === Removendo vírus sozinho === */
    {
        titulo: 'Voltou Tudo ao Normal',
        mensagem: 'Depois de tanto tempo, tudo volta a ser como deveria. Você olha nas configurações e vê que não há mais riscos no sistema. Por meio de uma videoaula na internet, você conseguiu remover o vírus. Com certeza, não vai acreditar em promessas milagrosas online, afinal, quase arruinou a própria vida por causa de uma.',

        opcao1: 'Irei voltar para chat agora'
    },

    /* === Conhecendo outros jogadores amigos === */
    {
        titulo: 'Hora de Jogar Um Pouquinho',
        mensagem: 'Você conhece um grupo de pessoas amigáveis em uma sala. Um deles fala: “bora jogar hj com a gente ”. Quando você vai à loja para instalar o suposto jogo, descobre que ele é pago. Mas e agora?! Não temos dinheiro para comprar isso agora. Quase desistindo, você se lembra de ter visto como baixar coisas piratas completamente de graça. Por que não testar, não é mesmo?',

        opcao1: 'Melhor deixar para lá',
        opcao2: 'Já que eu sei, o que pode dar errado'
    },

    /* === Baixando jogo pirata === */
    {
        titulo: 'Viva a Pirataria',
        mensagem: 'Você seguiu seus instintos. Eles não costumam falhar tão facilmente, não é mesmo? Depois de procurar em diversos sites, até nos mais profundos buracos da internet, você encontra o tesouro: uma página com o jogo e um vistoso botão de download. Você já tinha em mente que não encontraria o jogo em qualquer lugar. Está com um bom pressentimento. Agora é só clicar. Vá em frente!',

        opcao1: 'Consegui! Vou poder jogar',
        opcao2: 'Pensando melhor não'
    },
    
    /* === Sendo hackeado por arquivo malicioso === */
    {
        titulo: 'Quase lá',
        mensagem: 'Sim! Você clicou no botão, e a página baixou o instalador com o nome do jogo. Sem pensar, você o executa no computador. O jogo termina de baixar, e você vê tudo dando certo, até demais. Você recebe uma única notificação do sistema: um vírus do tipo “spyware” foi instalado no lugar do jogo. Suas informações estão sendo enviadas constantemente para alguém. Como vai resolver ?',

        opcao1: 'Denuncio, pode acontecer com alguém',
        opcao2: 'Espera! Me deixa pensar'
    },
    
    /* === Denunciando criminoso com LGPD === */
    {
        titulo: 'Obedencendo a Lei',
        mensagem: 'Como um cidadão de bem, você busca rapidamente informações sobre a lei pelo celular e descobre a existência da LGPD (Lei Geral de Proteção de Dados), uma lei sancionada em 2018, com diversos princípios para proteger você, usuário indefeso. Você consegue denunciar o caso à DCCIBER (Divisão de Crimes Cibernéticos), a página sai do ar e seus dados são recuperados. Parabéns pela atitude!',

        opcao1: 'Hora de descansar um pouco'
    },
    
    /* === Recebendo vídeo fake de famoso === */
    {
        titulo: 'Alerta de Conteúdo Chocante',
        mensagem: 'Agora relaxa, você está no seu momento de descanso. Abre suas redes sociais só para ver as novidades. Todo mundo está comentando sobre um tal vídeo. Você o assiste e vê um conhecido brigando com pessoas que você não conhece. Confuso, pensa em compartilhar o vídeo para que mais pessoas tenham cuidado ao andar na rua. Nunca se sabe quando alguém vai arranjar confusão.',

        opcao1: 'Claro, o povo precisa ficar sabendo',
        opcao2: 'Deve ser mentira'
    },
    
    /* === Espalhando vídeo fake news === */
    {
        titulo:  'Compartilhando com Geral',
        mensagem: 'Depois de contar para todos os seus amigos do aplicativo, muitas pessoas passam a manter distância do seu conhecido. Essa não era sua intenção ao compartilhar o vídeo, mas ele acabou sendo visto como culpado por pessoas que não o conhecem. Você entra em contato com ele para tentar descobrir o que está acontecendo e percebe que o vídeo é falso, feito com uma tal de inteligência artificial, poderosa e capaz de fazer coisas que os humanos levariam longas horas para realizar. Ela pode fazer isso em questão de segundos.',

        opcao1: 'Deixa eu resolver isso primeiro'
    },
    
    /* === Evitando compartilhar fake news === */
    {
        titulo:  'O Que Realmente Aconteceu',
        mensagem: 'Você opta por falar com seu conhecido e com as outras pessoas que gravaram o vídeo antes mesmo de compartilhar a notícia. Bem sensato da sua parte! Elas te explicam que tudo não passava de uma brincadeira que fizeram quando estavam juntas, enquanto testavam uma tal de inteligência artificial, poderosa e capaz de fazer coisas que os humanos levariam longas horas para realizar. Ela pode fazer isso em questão de segundos.',

        opcao1: 'Nossa! Vou tentar usar'
    },
    
    /* === Alertando pessoas sobre fake news e conhecendo a IA === */
    {
        titulo:  'Espalhando a Verdade',
        mensagem: 'Primeiro de tudo, você espalha que o vídeo é falso para seus amigos do aplicativo. Chega de conflitos por causa desse vídeo! Depois de terminar, você pergunta a um amigo que conheceu no site qual inteligência artificial ele costuma usar para fazer as coisas do dia a dia. Você entra no site, mas é necessário criar uma conta com suas informações pessoais. Seu amigo diz que é totalmente confiável, mas você fica com receio. Não tem boas lembranças de páginas de cadastro, não é mesmo? Dessa vez, pode ficar tranquilo em relação a golpes.',

        opcao1: 'Dessa vez é confiável',
        opcao2: 'Não me importo tanto assim em ficar sem'
    },
    
    /* === Explorando a inteligência artificial === */
    {
        titulo:  'Aprendendo Coisas Novas',
        mensagem: 'Finalmente, algo diferente! Você cria uma conta e começa a testar como tudo funciona. É bem simples: você envia uma mensagem, e ela responde. Às vezes, ela cita seus dados durante a conversa. Você se sente desconfortável, mas ignora. Quanto mais você conversa, mais ela começa a falar sobre você, sua religião e suas ideologias. Isso começa a te preocupar. Você já não sabe se continua usando a ferramenta ou se apaga a própria conta.',

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
    },

    /* === Game Over === */
    {
        titulo: 'Dados Perdidos',
        mensagem: 'Infelizmente, você perdeu todos os seus dados e não conseguiu recuperar sua conta. Isso pode acontecer quando se compartilha informações pessoais com sites ou pessoas não confiáveis. Lembre-se sempre de proteger suas informações e ter cuidado ao navegar na internet. Esperamos que você tenha aprendido com essa experiência e que da próxima vez, tome decisões mais seguras. Agora você pode reiniciar a página para jogar de novo ou reler sua história na aba de histórico. Boa sorte!l'
    }
];
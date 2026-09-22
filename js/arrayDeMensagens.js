/* Status do jogador */
let perfil = {
    nomeDoUsuario: "",
    nivelDeSeguranca: 100
};

/* Mensagens do jogo */
const arrayDeMensagens = [
    /* Texto de boas-vindas */
    {
        titulo: "Boas-vindas",
        mensagem: "Olá! Seja bem-vindo(a) ao 404:YOU. Estamos felizes em tê-lo(a) aqui! aqui você encontrará desafios emocionantes, decisões importantes e oportunidades de se divertir. Cada escolha que você fizer terá um impacto no desenrolar da história. Prepare-se para embarcar em uma jornada única e tecnológica. Boa sorte!"
    },

    /* Decidindo o nome de usuário */
    {
        titulo: "Criando uma conta",
        mensagem: 'Você está  quase terminando de criar uma conta para finalmente poder explorar a internet. Muito ancioso(a) para começar a navegar, não é mesmo? Mas antes de prosseguir, você precisar decidir um nome de usuário legal para interagir com outras pessoas. Lembre-se de ser criativo(a), não quer ser conhecido como "usuário123", né?'
    },

    /* Link para site falso */
    {
        titulo: "Explorando a internet",
        mensagem: `Enquanto você navega pela internet, você encontra um site de chat online com várias pessoas conversando. Uma das pessoas comenta sobre um joguinho de navegador que suspostamente podese ganhar dinheiro de verdade. As outras pessoas parecem animadas e até mesmo falam que funcionou para elas. "Eai ${perfil.nomeDoUsuario}, vai tentar tmb???" - diz uma das pessoas`,
        opcao1: "Vou tentar, parece divertido!",
        opcao2: "Não me parece uma boa ideia"
    } 
];
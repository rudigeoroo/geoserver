// Objeto que armazena os usuários e suas senhas.
// A chave é o nome de usuário (em minúsculas) e o valor é a senha.
const usuarios = {
    "dataurb": "geo",
    "admin": "admin"
};

function login(destino) {
    // Pega os valores dos campos de usuário e senha
    const usuarioDigitado = document.getElementById("usuario").value.toLowerCase();
    const senhaDigitada = document.getElementById("senha").value;
    const elementoErro = document.getElementById("erro");

    // Verifica se o usuário existe no objeto e se a senha corresponde
    if (usuarios[usuarioDigitado] && usuarios[usuarioDigitado] === senhaDigitada) {
        // Se a senha estiver correta, limpa a mensagem de erro e redireciona
        elementoErro.textContent = "";
        window.location.href = destino;
    } else {
        // Se a senha estiver incorreta, exibe a mensagem de erro
        elementoErro.textContent = "Usuário ou senha incorretos";
    }
}

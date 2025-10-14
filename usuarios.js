function login(destino) {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('erro');

    if (usuario === 'admin' && senha === 'admin') {
        window.location.href = destino;
    } else {
        erro.textContent = 'Usuário ou senha incorretos';
    }
}

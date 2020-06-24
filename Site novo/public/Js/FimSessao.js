let login_usuario;
let nome_usuario;
let foto_usuario;
let acertos_usuario;
let erros_usuario;
let tent_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    foto_usuario = sessionStorage.foto_usuario_meuapp;
    acertos_usuario = sessionStorage.acertos_usuario_meuapp;
    erros_usuario = sessionStorage.erros_usuario_meuapp;
    tent_usuario = sessionStorage.tent_usuario_meuapp;

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        Numero_foto.innerHTML = foto_usuario;
        total_erros.innerHTML = erros_usuario;
        total_acertos.innerHTML = acertos_usuario;
        total_tentativas.innerHTML = tent_usuario;
        validar_sessao();
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}
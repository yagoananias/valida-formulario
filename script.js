const formulario = document.getElementById('formulario');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

//Mensagem de Erro
function mostraErro(input, Mensagem) {
    const controleFormulario = input.parentElement;
    controleFormulario.className = 'controle-formulario erro';
    const small = controleFormulario.querySelector('small');
    small.innerText = Mensagem;
}

//Mensagem de Sucesso
function mostraSucesso(input) {
    const controleFormulario = input.parentElement;
    controleFormulario.className = 'controle-formulario sucesso';
}

//Email é Válido? Test retorna true se o email contiver valor de re
function emailValido(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Listeners
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if(usuario.value === '') {
        mostraErro(usuario, 'Campo Obrigatório');
    } else {
        mostraSucesso(usuario);
    }

    if(email.value === '') {
        mostraErro(email, 'Campo Obrigatório');
    } else if(!emailValido(email.value, 'Email Inválido')) {
        mostraErro(email, 'Email incorreto')
    } else {
        mostraSucesso(email);
    }

    if(senha.value === '') {
        mostraErro(senha, 'Campo Obrigatório');
    } else {
        mostraSucesso(senha);
    }

    if(senha2.value === '') {
        mostraErro(senha2, 'Campo Obrigatório');
    } else {
        mostraSucesso(senha2);
    }        
});
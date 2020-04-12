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

// Listeners
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if(usuario.value === '') {
        mostraErro(usuario, 'Usuário não válido');
    } else {
        mostraSucesso(usuario);
    }

    if(email.value === '') {
        mostraErro(email, 'Email não válido');
    } else {
        mostraSucesso(email);
    }

    if(senha.value === '') {
        mostraErro(senha, 'Senha não válida');
    } else {
        mostraSucesso(senha);
    }

    if(senha2.value === '') {
        mostraErro(senha2, 'Senha não válida');
    } else {
        mostraSucesso(senha2);
    }        
});
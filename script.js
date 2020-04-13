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

//Confirma campos obrigatórios
function confirmaCampo(arrayEntradas) {
    arrayEntradas.forEach(function(campos) {
        console.log(campos.id);
        if (campos.value.trim() === '') {
            mostraErro(campos, `${pegaNomeCampo(campos)} é obrigatório`);
        } else {
            mostraSucesso(campos);            
        }
    });
}

//Pega o nome do campo
function pegaNomeCampo(campo) {
    return campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
}

// Listeners
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    confirmaCampo([usuario, email, senha, senha2]);
});
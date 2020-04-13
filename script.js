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
        if (campos.value.trim() === '') {
            mostraErro(campos, `${pegaNomeCampo(campos)} é obrigatório`);
        } else {
            mostraSucesso(campos);            
        }
    });
}

//Confirma Tamanho da Entrada
function confirmaTamanho(campos, min, max) {
    if (campos.value.length < min) {
      mostraErro(
        campos,
        `${pegaNomeCampo(campos)} deve ter no mínimo ${min} caracteres`
      );
    } else if (campos.value.length > max) {
      mostraErro(
        campos,
        `${pegaNomeCampo(campos)} deve ter no máximo ${max} caracteres`
      );
    } else {
      mostraSucesso(campos);
    }
  }

// Senhas Combinam
function confirmaSenhasCombinam(input1, input2) {
    if(input1.value !== input2.value) {
        mostraErro(input2, 'Senhas Não Combinam');
    }
}

//Pega o nome do campo
function pegaNomeCampo(campo) {
    return campo.id.charAt(0).toUpperCase() + campo.id.slice(1);
}

// Listeners
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    confirmaCampo([usuario, email, senha, senha2]);
    confirmaTamanho(usuario, 3, 10);
    confirmaTamanho(email, 7, 15);
    confirmaTamanho(senha, 6, 25);
    confirmaSenhasCombinam(senha, senha2);
    //confirmaTamanho(senha2, 6, 25);
});
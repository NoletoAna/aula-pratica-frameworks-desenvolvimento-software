// Validação dos campos do formulário com JQuery
$(document).ready(function () {

    var campos = ['#nome', '#sobrenome', '#email', '#senha', '#cep', '#rua',
        '#bairro', '#cidade', '#estado', '#numero', '#complemento'];

    // Expressão regular para validar o e-mail: usuario@dominio.ext
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function validarEmail() {
        var email = $.trim($('#email').val());
        if (email === '') {
            $('#emailFeedback').text('Informe o e-mail.');
            return false;
        }
        if (!regexEmail.test(email)) {
            $('#emailFeedback').text('E-mail inválido. Ex: nome@exemplo.com');
            return false;
        }
        return true;
    }

    function validarCampo(id) {
        var valido = id === '#email' ? validarEmail() : $.trim($(id).val()) !== '';
        $(id).toggleClass('is-invalid', !valido).toggleClass('is-valid', valido);
        return valido;
    }

    // Valida cada campo ao sair dele
    $.each(campos, function (i, id) {
        $(id).on('blur', function () {
            // o CEP é validado pelo main.js ao consultar a API
            if (id !== '#cep') {
                validarCampo(id);
            }
        });
    });

    $('#formCadastro').on('submit', function (evento) {
        evento.preventDefault();

        var formularioValido = true;
        $.each(campos, function (i, id) {
            if (!validarCampo(id)) {
                formularioValido = false;
            }
        });

        var alerta = $('#alerta').removeClass('d-none alert-success alert-danger');
        if (formularioValido) {
            alerta.addClass('alert-success').text('Cadastro realizado com sucesso!');
        } else {
            alerta.addClass('alert-danger').text('Preencha corretamente todos os campos destacados.');
        }
    });
});

// Consumo da API ViaCEP: preenche os campos de endereço a partir do CEP
$(document).ready(function () {

    function limparEndereco() {
        $('#rua, #bairro, #cidade, #estado').val('');
    }

    $('#cep').on('blur', function () {
        var cep = $(this).val().replace(/\D/g, '');

        if (cep === '') {
            limparEndereco();
            return;
        }

        if (!/^[0-9]{8}$/.test(cep)) {
            limparEndereco();
            $('#cepFeedback').text('CEP inválido. Digite 8 números.');
            $('#cep').addClass('is-invalid');
            return;
        }

        $('#rua, #bairro, #cidade, #estado').val('...');

        $.getJSON('https://viacep.com.br/ws/' + cep + '/json/', function (dados) {
            if (dados.erro) {
                limparEndereco();
                $('#cepFeedback').text('CEP não encontrado.');
                $('#cep').addClass('is-invalid');
                return;
            }
            $('#cep').removeClass('is-invalid');
            $('#rua').val(dados.logradouro);
            $('#bairro').val(dados.bairro);
            $('#cidade').val(dados.localidade);
            $('#estado').val(dados.uf);
            $('#numero').focus();
        }).error(function () {
            limparEndereco();
            $('#cepFeedback').text('Erro ao consultar o CEP.');
            $('#cep').addClass('is-invalid');
        });
    });
});

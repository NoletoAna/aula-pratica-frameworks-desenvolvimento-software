// Consumo da API de CEP (ViaCEP) para preencher os campos de endereço
const campoCep = document.getElementById('cep');
const mensagem = document.getElementById('mensagem');

function limparEndereco() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

function buscarCep() {
    const cep = campoCep.value.replace(/\D/g, '');
    mensagem.textContent = '';

    if (cep.length !== 8) {
        limparEndereco();
        mensagem.textContent = 'CEP inválido. Digite 8 números.';
        return;
    }

    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.erro) {
                limparEndereco();
                mensagem.textContent = 'CEP não encontrado.';
                return;
            }
            document.getElementById('rua').value = dados.logradouro;
            document.getElementById('bairro').value = dados.bairro;
            document.getElementById('cidade').value = dados.localidade;
            document.getElementById('estado').value = dados.uf;
            document.getElementById('numero').focus();
        })
        .catch(() => {
            mensagem.textContent = 'Erro ao consultar o CEP. Tente novamente.';
        });
}

campoCep.addEventListener('blur', buscarCep);

document.getElementById('formEndereco').addEventListener('submit', function (evento) {
    evento.preventDefault();
    alert('Endereço cadastrado com sucesso!');
});

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulário de Cadastro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body class="bg-light">
        <header class="bg-dark text-white text-center py-3 mb-4 shadow">
            <h1 class="h3 m-0">Formulário de Cadastro</h1>
        </header>

        <main class="container">
            <div class="card shadow-sm mb-5">
                <div class="card-body p-4">
                    <form class="row g-3" method="post" action="index.htm">
                        <h2 class="h5 text-secondary border-bottom pb-2">Dados pessoais</h2>
                        <div class="col-md-6">
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" required>
                        </div>
                        <div class="col-md-6">
                            <label for="sobrenome" class="form-label">Sobrenome</label>
                            <input type="text" class="form-control" id="sobrenome" name="sobrenome" placeholder="Sobrenome" required>
                        </div>
                        <div class="col-md-6">
                            <label for="email" class="form-label">Email</label>
                            <div class="input-group">
                                <span class="input-group-text">@</span>
                                <input type="email" class="form-control" id="email" name="email" placeholder="nome@exemplo.com" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="senha" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="senha" name="senha" required>
                            <div class="form-text">Mínimo de 8 caracteres.</div>
                        </div>

                        <h2 class="h5 text-secondary border-bottom pb-2 mt-4">Endereço</h2>
                        <div class="col-md-2">
                            <label for="cep" class="form-label">CEP</label>
                            <input type="text" class="form-control" id="cep" name="cep" maxlength="9" placeholder="00000-000" required>
                        </div>
                        <div class="col-md-6">
                            <label for="rua" class="form-label">Rua</label>
                            <input type="text" class="form-control" id="rua" name="rua" placeholder="Rua" required>
                        </div>
                        <div class="col-md-4">
                            <label for="bairro" class="form-label">Bairro</label>
                            <input type="text" class="form-control" id="bairro" name="bairro" placeholder="Bairro" required>
                        </div>
                        <div class="col-md-4">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" class="form-control" id="cidade" name="cidade" required>
                        </div>
                        <div class="col-md-2">
                            <label for="estado" class="form-label">Estado</label>
                            <select class="form-select" id="estado" name="estado" required>
                                <option value="" selected>UF</option>
                                <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
                                <option>BA</option><option>CE</option><option>DF</option><option>ES</option>
                                <option>GO</option><option>MA</option><option>MT</option><option>MS</option>
                                <option>MG</option><option>PA</option><option>PB</option><option>PR</option>
                                <option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
                                <option>RS</option><option>RO</option><option>RR</option><option>SC</option>
                                <option>SP</option><option>SE</option><option>TO</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="numero" class="form-label">Número</label>
                            <input type="text" class="form-control" id="numero" name="numero" required>
                        </div>
                        <div class="col-md-4">
                            <label for="complemento" class="form-label">Complemento</label>
                            <input type="text" class="form-control" id="complemento" name="complemento">
                        </div>

                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="termos" name="termos" required>
                                <label class="form-check-label" for="termos">Li e aceito os termos de uso</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark">Verificar</button>
                            <button type="reset" class="btn btn-outline-secondary ms-2">Limpar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </body>
</html>

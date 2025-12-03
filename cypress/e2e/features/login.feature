# language: pt

Funcionalidade: Login

  Cenário: Login válido
    Dado que estou na página de login
    Quando digito um usuário e senha cadastrados
    Então devo realizar o login com sucesso

  Cenário: Login com senha incorreta
    Dado que estou na página de login
    Quando digito um usuário correto e uma senha incorreta
    Então devo ver uma mensagem de erro de credenciais inválidas

  Cenário: Login com usuário inexistente
    Dado que estou na página de login
    Quando digito um usuário inexistente e uma senha qualquer
    Então devo ver uma mensagem informando que o usuário não existe

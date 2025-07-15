
function login() {

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Verifica se o usuário e senha estão corretos
    if (email === 'admin@email.com' && senha === '123456') {
        alert('Login bem-sucedido! Redirecionando...');
        window.location.href = "index.html";
    } else {

        alert('Email ou senha incorretos. Tente novamente.');
    }
}

function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email-cadastro").value;


    if (nome && email) {
        alert('Cadastro realizado com sucesso!');
        // Redireciona para a página de login após o cadastro
        window.location.href = "login.html";
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

function cadastrar(){
    // Validações
    if (!Inome.value || !Iemail.value || !Isenha.value || !Itel.value) {
        alert('Por favor, preencha todos os campos');
        return;
    }

    fetch("http://localhost:8080/cadastrar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        console.log('Cadastro realizado com sucesso:', data);
        limpar();
        // Pode adicionar feedback visual de sucesso
    })
    .catch(error => {
        console.error('Erro no cadastro:', error);
        // Tratar erro (mostrar mensagem ao usuário)
    });
}

function limpar(){
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";
}

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    cadastrar();
    limpar();
});
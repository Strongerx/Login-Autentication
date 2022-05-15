const usuario = document.querySelector(".usuariojs");
const senha = document.querySelector(".senhajs");
const botao = document.querySelector(".btn-login");

// Evento do botão que redireciona para a logado.html
botao.addEventListener("click", () => {
    if (usuario.value && senha.value == "adm") {
        window.location.href = "../logado.html";
    }
    else if (usuario.value == "" || senha.value == "") {
        alert("Não pode deixar campos nulos !!");
    } else if (usuario.value != "adm" || senha.value != "adm") {
        alert("Usuário ou senha incorretos !!");
    }
});
function entrar() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {

        window.location.href = "pages/menu.html";

    } else {

        alert("Usuário ou senha incorretos!");

    }

}

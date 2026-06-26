function login() {
  const usuario = document.querySelector('input[type="text"]').value;
  const senha = document.querySelector('input[type="password"]').value;

  if (usuario === "" || senha === "") {
    alert("Preencha usuário e senha!");
    return;
  }

  // Login simples (temporário)
  if (usuario === "admin" && senha === "1234") {
    alert("Bem-vindo à Budega do Zé!");
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
}

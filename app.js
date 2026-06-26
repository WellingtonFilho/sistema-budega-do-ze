function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (!usuario || !senha) {
    alert("Preencha usuário e senha!");
    return;
  }

  if (usuario === "admin" && senha === "1234") {
    alert("Bem-vindo à Budega do Zé!");

    setTimeout(() => {
      window.location.href = "./dashboard.html";
    }, 300);
    
  } else {
    alert("Usuário ou senha inválidos!");
  }
}

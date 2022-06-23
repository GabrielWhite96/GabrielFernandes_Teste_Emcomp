// Verifica se o usuario é o adm.
function Login() {
    var name = document.getElementById("user-name").value;
    var senha = document.getElementById("user-password").value; 
    if (name == "adm" && senha == "adm") {
        window.location.href = "controle.html"
    }else{
      window.alert("Dados incorretos, tente novamente");
    }
}
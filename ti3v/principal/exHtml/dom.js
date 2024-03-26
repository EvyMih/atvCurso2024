let nomeUsuario = document.getElementById('nomeUsuario');
let resposta = document.getElementById("resposta");
let idadeUsuario = document.getElementById("idadeUsuario");


function validar (){
    resposta.innerHTML = ("Bem vindo: " + nomeUsuario.value);
    resposta.innerHTML += ("<br>Sua idade é de: " + idadeUsuario.value);
}
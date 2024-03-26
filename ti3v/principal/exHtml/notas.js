let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
let nota4 = document.getElementById('nota4');

let resposta = document.getElementById("resposta");

function validar (){
    n1 = Number (nota1.value);
    n2 = Number (nota2.value);
    n3 = Number (nota3.value);
    n4 = Number (nota4.value);

    let media = (n1 + n2 + n3 + n4) / 4

    resposta.innerHTML = "Sua média é de: " + media;

    if (media >= 7){
        resposta.innerHTML += "<br> Parabéns você foi aprovado!"
      }else if (media < 6.9 && media > 5.0){
        resposta.innerHTML += "<br> Você ficou de recuperação!"
      }else {
        resposta.innerHTML += "<br> Você foi reprovado!"
      }
}
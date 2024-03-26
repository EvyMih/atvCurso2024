/* let numeros = [1,2,3,4,5,6,7,8,9];
// indice sempre inicia do 0 (0:1, 1:2, 2:3...)

let letras = ["a", "b", "c"];
 
console.log(letras[2]) */

/* let respostaUsuario = prompt("digite o número para saber seu mês");

let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

for(i=0; i < meses.length; i++){
    if (respostaUsuario == i){
        alert(meses[i-1])
    }
} */
/* 
let corFavorita = "roxo";
let cores = ["azul", "vermelho", "verde"];
let bolleano = false;

for(i=0; i < cores.length; i++){
    if (corFavorita == cores[i]){
        console.log("Eu amo essa cor!")
        bolleano = true
    }
}
if(!bolleano){
    console.log("Palhaçada!")
} */
/* 
let frutas = ["maça", "pêra", "uva", "goiaba", "mamão", "limão", "melão"];
let respostaUsuario = prompt("Qual fruta você deseja comprar? ");
let verdadeiroFalso = false

for(i=0; i < frutas.length; i++){
    if (respostaUsuario == frutas[i]){
        console.log("Vendemos essa fruta aqui!")
        verdadeiroFalso = true
    }
}
if(!verdadeiroFalso){
    console.log("Infelizmente está em falta!")
}
 */

let respostaUsuario = prompt("Qual o tempo que a bomba deve estourar?");

if(respostaUsuario > 0){
    for(i=respostaUsuario; i >= 0; i--){
    console.log(i)
    }
    console.log("boomm!!!")
}


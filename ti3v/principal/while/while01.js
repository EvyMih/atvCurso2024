/* 
ex. 1º maior número

let contador = 0;
let maiorNumero = -Infinity;
const quantidadeNumeros = 10;

while(contador < quantidadeNumeros){
    let numeroUsuario = Number(prompt(`Insira o número ${contador + 1}`))

    if(numeroUsuario > maiorNumero){
        maiorNumero = numeroUsuario;
    }
    contador ++
}

alert(`O maior número inserido é: ${maiorNumero}`); */

/* 
ex. 1º e 2º maiores números

let contador = 0;
let primeiroMaior = -Infinity;
let segundoMaior = -Infinity;
const quantidadeNumeros = 10;

while(contador < quantidadeNumeros){
    let numeroUsuario = Number(prompt(`Insira o número ${contador + 1}`))

    if(numeroUsuario > primeiroMaior){
        segundoMaior = primeiroMaior;
        primeiroMaior = numeroUsuario;
    }else if (numeroUsuario > segundoMaior && numeroUsuario != primeiroMaior){
        segundoMaior = numeroUsuario;
    }
    contador ++
}

alert(`O primeiro maior número inserido é: ${primeiroMaior}\nO segundo maior número inserido é: ${segundoMaior}`); */

let numeroUsuario = 0;
let numeros = [];
let contador = 0;
let maiorNumero = 0;
let menorNumero = 0;

do{
    numeroUsuario = Number(prompt(`Insira o número ${contador + 1}`))
    
    if(numeroUsuario > maiorNumero){
        maiorNumero = numeroUsuario;
    }else if(numeroUsuario < menorNumero && numeroUsuario != 0){
        menorNumero = numeroUsuario;
    }
    contador ++

}while(numeroUsuario != 0)

console.log(`Foram digitados ${contador - 1} números\nO maior número é: ${maiorNumero}\nO menor número é: ${menorNumero}\nA média de todos os números é:`)



/* 
EX. 1º MAIOR NÚMERO

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
EX. 1º E 2º MAIORES NÚMEROS

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

/* EX MAIOR, MENOR E MEDIA
let numeroUsuario = 0;
let numeros = [];
let contador = 0;
let maiorNumero = Number.MIN_SAFE_INTEGER;
let menorNumero = Number.MAX_SAFE_INTEGER; 
let soma = 0;

do{
    numeroUsuario = Number(prompt(`Insira o número ${contador + 1}`))
    soma += numeroUsuario
    
    if (numeroUsuario !== 0) {
        numeros.push(numeroUsuario);
        if (numeroUsuario > maiorNumero) {
            maiorNumero = numeroUsuario;
        }
        if (numeroUsuario < menorNumero) {
            menorNumero = numeroUsuario;
        }
        contador++;
    }

}while(numeroUsuario != 0) */

/* UMA OUTRA FORMA DE FAZER O WHILE

do{
    numeroUsuario = Number(prompt(`Insira o número ${contador + 1}`))
    numeros.push(numeroUsuario);

    if (numeroUsuario > maiorNumero) {
        maiorNumero = numeroUsuario;
    }else if (numeroUsuario != 0 && numeroUsuario < menorNumero) {
        menorNumero = numeroUsuario;
    }
        contador++;

}while(numeroUsuario != 0) */
/* 
let media = soma / contador;

console.log(`Foram digitados ${contador - 1} números\nO maior número é: ${maiorNumero}\nO menor número é: ${menorNumero}\nA média de todos os números é: ${media}`) */

var primeiroNumero = 0, segundoNumero = 0; respostaSimbolo = 0;

do{
    primeiroNumero = Number(prompt(`Insira o primeiro número`))
    segundoNumero = Number(prompt(`Insira o segundo número`))

    respostaSimbolo = Number(prompt(`Escolha a operação desejada:\n1 - Multiplicação\n2 - Divisão\n3 - Adição\n4 - Subtração `))

    switch(respostaSimbolo){
        case 1:
           var mult = primeiroNumero * segundoNumero;
           alert (`O resultado da multiplicação é: ${mult}`);
        break;

        case 2:
            var div = primeiroNumero / segundoNumero;
            alert (`O resultado da divisão é: ${div}`);
        break;

        case 3:
            var adi = primeiroNumero + segundoNumero;
            alert (`O resultado da adição é: ${adi}`);
        break;

        case 4:
            var sub = primeiroNumero - segundoNumero;
            alert (`O resultado da subtração é: ${sub}`);
        break;
    }

    var resposta = Number(prompt(`Deseja continuar na calculadora?\n1 - Sim\n2 - Não`));

}while(resposta != 2)

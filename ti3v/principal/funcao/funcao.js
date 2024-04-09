function olaMundo (){
    console.log("Oi")
}

olaMundo() // função vazia
////////////////////////////////

function somar (n1,n2){
    console.log(n1+n2)
}
somar(5,5)
//////////////////////////////////////////////

let idadeEvellyn = 10;

function verificarIdade (idadeEvellyn){
    if(idadeEvellyn > 10){
        idadeEvellyn = 5
    }
    return idadeEvellyn
}

console.log (`A Evellyn tem ${verificarIdade(idadeEvellyn)}`)
//////////////////////////////////////////////////////////////////////

function tempo(){
    setTimeout (() => alert("O tempo terminou"),1000);
}// executa uma ação após a contagem do tempo estipulado.

tempo();

const tempoIntervalo = setInterval(() => {
    console.log(" segundos se passaram")
},1000)
/* 
let lista = ["Bernardo", "Ricardo", "Julia","Maria","Georgia"];
console.log(lista)

let encontrar = lista.find(element => element.includes(""));
//Encontrar um dado dentro de um Array

console.log(encontrar);

///////////////////////////////////////////////////////////////////////

let lista2 = [1, 2, 3, 4, 5];
console.log(lista2)

let encontrar2 = lista.find(element => element > 2);
//Encontrar um dado dentro de um Array

console.log(encontrar2); 

///////////////////////////////////////////////////////////////////////

*/
let arrayObjeto = [{
    nome: "Evellyn",
    email: "evellynmiranda@gmail.com",
    password: "321"
},{
    nome: "Wallace",
    email: "walle.@gmail.com",
    password: "ljjplay"
},{
    nome: "Torresmo",
    email: "torresminho.@gmail.com",
    password: "1234"
}]

let encontrarItem = arrayObjeto.find(element => element.nome == "Evellyn");

console.log(encontrarItem)
//Encontrar itens dentro de um objeto.
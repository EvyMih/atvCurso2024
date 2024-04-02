let emailUsuario = prompt("Digite seu email:")
let senhaUsuario = prompt("Digite sua senha:")

let dadosUsuario = [{
    nome: "evellyn",
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
},{
    nome: "Biru Biru",
    email: "love.@gmail.com",
    password: "amor"
},{
    nome: "Roberto",
    email: "filhofavorito.@gmail.com",
    password: "pet"
},{
    nome: "Claudio",
    email: "claudiodog.@gmail.com",
    password: "doguinho123"
},{
    nome: "Romilson",
    email: "fone.@gmail.com",
    password: "musica123"
},{
    nome: "Alfredo",
    email: "ovelha.@gmail.com",
    password: "bolsa123"
},{
    nome: "Marie",
    email: "filhalinda.@gmail.com",
    password: "meubb"
},{
    nome: "Jurema",
    email: "atartaruga.@gmail.com",
    password: "marlindo"
}]

/*
if(email == dadosUsuario[0].email && senha == dadosUsuario[0].password){
    console.log("Login efetuado com sucesso")
}else{
    console.log("Email e senha não encontrados, tente novamente")
} */

for(i=0; i<dadosUsuario.length; i++){
    if(emailUsuario == dadosUsuario[i].email && senhaUsuario == dadosUsuario[i].password){
        console.log("Login efetuado com sucesso")
    }
}
console.log("Login inválido")
let nomeUsuario = prompt("Digite o seu nome: ");
console.log("bem vindo! " + nomeUsuario);

let estado1 = "Solteiro(a)", estado2 = "Casado(a)", estado3 = "Divorciado(a)", estado4 = "Viúvo(a)";

let estadoCivil = prompt("Digite o número referente ao seu estado civil: " + "\n1 - Solteiro(a)\n2 - Casado(a)\n3 - Divorciado(a)\n4 - Viúvo(a)");

switch(estadoCivil){
    case "1":
        alert(nomeUsuario + ", é " + estado1);
    break;
    case "2":
        alert(nomeUsuario + ", é " + estado2);
    break;
    case "3":
        alert(nomeUsuario + ", é " + estado3);
    break;
    case "4":
        alert(nomeUsuario + ", é " + estado4);
    break;
    default:
        alert("Nós só possuímos quatro opções: Solteiro(a), Casado(a), Divorciado(a) e Viúvo(a)");
}
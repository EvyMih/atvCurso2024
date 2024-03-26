
let quantidadeProduto = prompt("Digite a quantidade de produtos que você deseja ");

let precoProduto = 10;

let calculoPreco = quantidadeProduto * precoProduto;

if (quantidadeProduto > 6){
    calculoPreco = calculoPreco - (calculoPreco * 0.05)
}else{
    calculoPreco
}

let opcoes = prompt("Escolha uma das opções abaixo:" + "\n1 - À prazo\n2 - À vista");

switch(opcoes){
    case "1":
        var quantidadeParcelas = prompt("Você deseja parcelar em quantas vezes?");

        var respostaUsuario = (calculoPreco / quantidadeParcelas);

        alert("Valor total da compra: R$ " + calculoPreco.toFixed(2) + "\nEm " + quantidadeParcelas + " parcelas de R$ " + respostaUsuario.toFixed(2));
    break;

    case "2":
        var valorAvista = calculoPreco - (calculoPreco * 0.03);

        alert("Valor total da compra: " + calculoPreco.toFixed(2) + "\nRecebendo um desconto de 3% do valor, ficará: R$ " +  valorAvista.toFixed(2) + " reais");
    break;
    default:
        alert("Nós possuímos apenas essas duas opções, escolha uma do menu!!!");
}




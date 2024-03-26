let velCarro = document.getElementById ("velCarro");

function validar (){
    let velC = Number(velCarro.value)

    let calculoValorVelocidade = velC - 80

    let primeiroValor = 50;
    let segundoValor = 100;
    let terceiroValor = 300;

    if ( calculoValorVelocidade <= 0 ){
        resposta.innerHTML = "Você não pagará multa"
    }else if ( calculoValorVelocidade <= 10 ){
        resposta.innerHTML = ("<br>Você pagará R$ " + primeiroValor + " reais de multa");
    }else if ( calculoValorVelocidade > 11 && calculoValorVelocidade <= 30){
        resposta.innerHTML = ("<br>Você pagará R$ " + segundoValor + " reais de multa");
    }else if ( calculoValorVelocidade > 31) {
        resposta.innerHTML = ("<br>Você pagará R$ " + terceiroValor + " reais de multa");
    }
}
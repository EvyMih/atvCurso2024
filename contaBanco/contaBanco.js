    //testegit
    var saldo = Number(prompt("Digite seu saldo: "))
    
  /*   var saldoFinal = saldo;
    let saldoAtual = 0;. */

do{ 
    var opc = Number(prompt("Escolha como proseguir: \n1 - Saque\n2 - Depósito\n3 - Transferência"))

    switch(opc){
        case 1:
            var valorSaque = Number(prompt("Digite o valor do saque: "))
    
            if(valorSaque > saldo){
                alert("Saldo insuficiente")
            }else{
                
                alert(`Saque efetuado com sucesso.\nSeu saldo agora é R$ ${saldo - valorSaque}`)
                saldo += - valorSaque
            }

            
        break;
    
        case 2:
            var deposito = Number(prompt("Digite o valor do depósito: "))
            alert(`Depósito efetuado com sucesso.\n Seu saldo agora é R$ ${saldo + deposito}`)


            saldo += + deposito;
        break;
    
        case 3:
            var transferência = Number(prompt("Escolha como proseguir: \n1 - PIX\n2 - TED"))
    
            switch(transferência){
                case 1:
                    var valorTransf = Number(prompt("Digite o valor da transferência: "))
    
                    if(valorTransf > saldo){
                        alert("Saldo insuficiente")
                    }else{
                        alert(`Transferência efetuada com sucesso.\nSeu saldo agora é R$ ${saldo - valorTransf}`)
                    }
                break;
    
                case 2:
                    var valorTransf = Number(prompt("Digite o valor da transferência: "))
                    var taxa = 9.8
    
                    if((valorTransf + taxa) > saldo ){
                        alert("Saldo insuficiente")
                    }else{
                        alert(`Transferência efetuada com sucesso.\nSeu saldo agora é R$ ${(saldo - valorTransf - taxa).toFixed(2)}`)
                    }
            }
            saldo += - valorTransf;
        break;  
    }
    var resposta = prompt("deseja continuar?\n1 - Sim\n2 - Não")
   

}while(resposta != 2)

alert(`Seu saldo ficou em R$ ${saldo}`)
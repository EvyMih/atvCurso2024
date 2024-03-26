/*     
    let nota1 = 8;
    let nota2 = 6;
    let nota3 = 5;
    let nota4 = 10;

    let media = (nota1 + nota2 + nota3 + nota4)/4;

    console.log ("sua media é de " + media)


 */

  /*   
    let numeroMochilao = 10000.00;

    let realDollar = (numeroMochilao / 4.97);
    let realEuro = (numeroMochilao / 5.35);
    let realLibra = (numeroMochilao / 6.26);
    let realPeso = (numeroMochilao / 0.06);

    console.log("O valor de: " + numeroMochilao + " convertido em Dolar é de: " + realDollar.toFixed(2) + " dolares.")
    console.log("O valor de: " + numeroMochilao + " convertido em Euro é de: " + realEuro.toFixed(2) + " euros.")
    console.log("O valor de: " + numeroMochilao + " convertido em Libra é de: " + realLibra.toFixed(2) + " libras.")
    console.log("O valor de: " + numeroMochilao + " convertido em Peso é de: " + realPeso.toFixed(2) + " pesos.") */


    /* 
    let nomeVendedor = "Romilson";
    let salarioFixo = 2000;
    let totalVendas = 6000;
    let valorComissao = 12;

    let calculoComissao = (totalVendas * valorComissao) / 100;
    let salarioFinal = salarioFixo + calculoComissao;

    console.log("o nome do vendedor é: " + nomeVendedor + "\nseu salario fixo é de: " + salarioFixo + "\ne seu salario final é de: " + salarioFinal) */

    /* 
    let nomeDoAluno = "Roberto";


    let nota1 = 5, nota2 = 8, nota3 = 9;

    let peso1 = 3, peso2 = 6, peso3 = 9;


    let mediaPonderada = (peso1 * nota1 + peso2 *  nota2 + peso3 * nota3) / (peso1 + peso2 + peso3);

     
    console.log(" O nome do aluno é: " + nomeDoAluno + ", e sua média ponderada é de: " + mediaPonderada); */

    /* 
    let anoDeNascimento = 2020
    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - anoDeNascimento;

    if (idade < 16){
      console.log("Você não poderá votar esse ano");
    }else{
      console.log("Você poderá votar esse ano");
    } */

    /* 
    let nota1 = 5.8;
    let nota2 = 2.9;
    let nota3 = 5.0;
    let nota4 = 6.5;

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log("Sua média é: " + media.toFixed(1))

    if (media >= 7){
      console.log("parabéns você foi aprovado!")
    }else if (media < 6.9 && media > 5.0){
      console.log("você ficou de recuperação!")
    }else {
      console.log("você foi reprovado!")
    } */

   /*  
    let nota1 = 10.8;
    let nota2 = 8.9;
    let nota3 = 9.0;
    
    let media = (nota1 + nota2 + nota3) / 3;
    console.log("Sua média é: " + media.toFixed(1));

    let faltas = 3;
    let totalDeAulas = 20;

    let calculoPresenca = (faltas * 100) / totalDeAulas;
    let frequencia = 100 - calculoPresenca;

    console.log("Sua presença é de: " + frequencia + "%");
    
    if (media > 7.0 && frequencia > 80){
      console.log("Aprovado!!!");
    }else{
      console.log("Reprovado!!!");
    }
     */

   /*  
    let valor1 = 1;
    let valor2 = 10;

    if (valor1 >= valor2){
      console.log("o maior numero é: " + valor1)  
    }else{
      console.log("o maior numero é: " + valor2)  
    } */

   /*  let numero = 19;
    let restoDivisao = numero % 2;
   
    if (restoDivisao == 0){
      console.log("O numero é par")
    }else{
      console.log("O numero é impar")
    } */
   
   /*  
    console.log("Seja bem-vindo!!!");

    console.log("Digite o seu nome: ");
    let nome = prompt("Digite o seu nome:");
    console.log(nome);

    console.log("Digite a sua idade: ");
    let idade = prompt("Digite a sua idade: ");
    console.log(idade);

    console.log("Possui carterinha de estudante?");
    let opcao1 = 1
    let opcao2 = 2

    console.log(opcao1 + " - Sim");
    console.log(opcao2 + " - Não");

    let resposta = prompt("Possui carterinha de estudante?");
    console.log(resposta);

    console.log("Olá " + nome + ", Seja bem vindo!");

    let ingresso = 35.00;
    let meioIngresso = ingresso / 2;

    if (resposta == opcao1 || idade < 18){
      console.log("Você possui desconto de estudante, o valor do seu ingresso é: R$ " + meioIngresso.toFixed(2) + " reais.");
    }else{
      console.log("Você não possui desconto de estudante, o valor do seu ingresso é: R$ " + ingresso.toFixed(2) + " reais.");

    } */

  /*   
    console.log("Qual será a quantidade de maças? ");
    let quantidadeMacas = prompt("Qual será a quantidade de maças? ");
    console.log(quantidadeMacas);

    let valorMacaVarejo = 0.30;
    let valorMacaAtacado = 0.25;
 
    let calculoValorVarejo = quantidadeMacas * valorMacaVarejo;
    let calculoValorAtacado = quantidadeMacas * valorMacaAtacado;

    if ( quantidadeMacas < 12){
      console.log("Varejo");
      console.log("Você escolheu: " + quantidadeMacas + " maças, seu valor total fica em: R$ " + calculoValorVarejo.toFixed(2) + " reais.");
    }else{
      console.log("Atacado");
      console.log("Você escolheu: " + quantidadeMacas + " maças, seu valor total fica em: R$ " + calculoValorAtacado.toFixed(2) + " reais.");

     *//* } */
/* 
     let nome = prompt("Digite o seu nome:");
     console.log(nome);
     console.log("Seja bem-vindo " + nome);
 
     let idade = prompt("Digite a sua idade: ");
     console.log(idade);
     console.log("Sua idade é: " + idade + " anos.");

     let seteAnos = "turma 1", oitoAnos = "turma 2", noveAnos = "turma 3", dezAnos = "turma 4", onzeAnos = "turma 5", dozeAnos = "turma 6", trezeAnos = "turma 7", quatorzeAnos = "turma 8";

     if ( idade == 7 ){
      console.log("Você está matriculado na " + seteAnos);
     }else if ( idade == 8 ){
      console.log("Você está matriculado na " + oitoAnos);
     }else if ( idade == 9 ){
      console.log("Você está matriculado na " + noveAnos);
     }else if ( idade == 10 ){
      console.log("Você está matriculado na " + dezAnos);
     }else if ( idade == 11 ){
      console.log("Você está matriculado na " + onzeAnos);
     }else if ( idade == 12 ){
      console.log("Você está matriculado na " + dozeAnos);
     }else if ( idade == 13 ){
      console.log("Você está matriculado na " + trezeAnos);
     }else{
      console.log("Você está matriculado na " + quatorzeAnos);
     }
 */
     let velocidadeVia = prompt("Digite a velocidade máxima permitida da via: ");
     console.log(velocidadeVia);
     console.log("A velocidade máxima permitida da via é de: " + velocidadeVia + " km/h.");
 
     let velocidadeCarro = prompt("Digite a velocidade que o carro ultrapassou: ");
     console.log(velocidadeCarro);
     console.log("A velocidade que seu carro ultrapassou foi de " + velocidadeCarro + " km/h");

     let calculoValorVelocidade = velocidadeCarro - velocidadeVia;

     let primeiroValor = 50.00;
     let segundoValor = 100.00;
     let terceiroValor = 300.00;

     if ( calculoValorVelocidade <= 10 ){
      console.log("Você pagará R$ " + primeiroValor.toFixed(2) + " reais de multa");
     }else if ( calculoValorVelocidade > 11 && calculoValorVelocidade <= 30){
      console.log("Você pagará R$ " + segundoValor.toFixed(2) + " reais de multa");
     }else{
      console.log("Você pagará R$ " + terceiroValor.toFixed(2) + " reais de multa");
     }

     
    



 


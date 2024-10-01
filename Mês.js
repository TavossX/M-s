    var numMes = parseInt(prompt("Digite o número do Mês"));
    var nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if(numMes >= 1 && numMes <=12){
        console.log(nomeMes[numMes - 1]);
    }else{
        console.log("Mês inválido");
    }
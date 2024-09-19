function calcular(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    if(isNaN(num1) || isNaN(num2)){
        resultado = "Por favor, insira números válidos";
    } else{
        switch (operacao){
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if(num2 === 0){
                    resultado = "Não é possível dividir por zero";
                } else{
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Operção inválida";
        }
    }
    document.getElementById("resultado").innerText = resultado;
}
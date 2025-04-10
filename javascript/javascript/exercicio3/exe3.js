alert("Calculadora Simples");
 
let operacao = parseFloat(prompt("Escolha um valor correspondente à operação: \n 1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Multiplicação"));
let valor1 = parseFloat(prompt("Informe o primeiro valor: "));
let valor2 = parseFloat(prompt("Informe o segundo valor: "));
let operacao1 = valor1 + valor2;
let operacao2 = valor1 - valor2;
let operacao3 = valor1 / valor2;
let operacao4 = valor1 * valor2;
 
switch (operacao) {
    case 1:
        alert("O resultado da Soma é: " + operacao1)
        break
    case 2:
        alert("O resultado da Subtração é: " + operacao2)
        break
    case 3:
        alert("O resultado da Divisão é: " + operacao3)
        break
    case 4:
        alert("O resultado da Multiplicação é: " + operacao4)
        break
    default:
        alert("O valor informado é inválido! ")
        break
}
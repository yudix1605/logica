alert("Dia da semana")
alert("Olá! informe um numero para escolher um dia da semana: \n (Considere que o primeiro dia da semana é domingo.) ")
let diaSemana = parseInt(prompt("1, 2, 3, 4, 5, 6, 7"));

switch (diaSemana) {
    case 1:
        alert("o dia escolhido é Domingo.")
            break
    case 2:
        alert("O dia escolhido foi segunda.")
            break
    case 3:
        alert("o dia escolhido foi terça")
            break
    case 4:
        alert("o dia escolhido foi quarta")
            break
    case 5:
        alert("o dia escolhido foi quinta")
            break
    case 6:
        alert("o dia escolhido foi sexta")
            break
    case 7:
        alert("o dia escolhido foi sabado")
            break       
    default :
        alert("Esse dia da semana não é reconhecido")
            break
}
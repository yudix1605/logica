alert("Verificação de mês")
alert("Escolha um número de 1 a 12 determinando cada mês: ")

let escolhaMês = parseInt(prompt("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 "))

switch(escolhaMês){
    case 1:
        alert("Mês de Janeiro")
            break
    case 2:
        alert("Mês de Fevereiro")
            break
    case 3:
        alert("Mês de Março")
            break
    case 4:
        alert("Mês de Abril")
            break
    case 5:
        alert("Mês de Maio")
            break
    case 6:
        alert("Mês de junho ")
            break
    case 7:
        alert("Mês de Julho")
            break
    case 8:
        alert("Mês de Agosto")
            break
    case 9:
        alert("Mês de Setembro")
            break
    case 10:
        alert("Mês de Outubro")
            break
    case 11:
        alert("Mês de Novembro")
            break
    case 12:
        alert("Mês de Dezembro")
            break

    default :
        alert("Mês não reconhecido.")
            break
            
}
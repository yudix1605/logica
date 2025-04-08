alert("Numeros de eleitores");
let validos = parseFloat(prompt("Digite o numero total de validos"))
let total = parseFloat(prompt("DIgite o numero total de eleitores: "));
let votosBrancos = parseFloat(prompt("Digite o total de votos brancos: "));
let nulos = parseFloat(prompt("Digite o total de votos nulos: "));

let percBrancos = (votosBrancos / total ) * 100;
let percNulos = (nulos / total ) * 100;
let percValidos = (validos / total ) * 100;

alert("Percentuais em relação ao total de eleitores: ")
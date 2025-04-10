alert("Verificando sua idade")
let idade = prompt("Digite sua idade: ");
let adolescente = prompt("Você é adolescente");
let criança = prompt("Você é criança");
let adulto = prompt("Você é adulto");
let idoso = prompt("Você é idoso");

switch (criança, adolescente, adulto, idoso){
    case 1:
        alert(+adolescente)>= 18
            break
    case 2:
        alert(+criança)>=17
}
alert("idade em dias");
let anos = parseInt(prompt("Digite sua idade em anos: "));
let meses = parseInt(prompt("Digite quantos meses falta para seu mes versario"));
let dias = parseInt(prompt("Digite quantos dias falta para o seu aniversario"));
let resultado = (anos * 365) + (meses * 365) + (dias * 30);

alert("Sua idade convertida em dias é" +resultado)
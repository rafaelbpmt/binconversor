const prompt = require('prompt-sync')();

let numero = Number(prompt("Insira um número: "))
let resultado = "";

while (numero > 0){
    let resto = numero % 2;
    resultado = resto + resultado
    numero = Math.floor(numero / 2);
}

console.log("resultado em binário: " + resultado)
const prompt = require('prompt-sync')();

let vitorias = Number(prompt("Digite a quantidade de vitórias: "));
let derrotas = Number(prompt("Digite a quantidade de derrotas: "));

let saldoVitorias = vitorias - derrotas;

function calcularNivel(vitorias) {
    if (vitorias <= 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let nivel = calcularNivel(vitorias);

console.log(`O Herói tem de vitórias o saldo: ${saldoVitorias}. Está no nível: ${nivel}`);
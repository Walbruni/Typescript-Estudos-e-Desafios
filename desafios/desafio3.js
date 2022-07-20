"use strict";
// DESAFIO 3
// Corrigir os erros do código abaixo para um arquivo ts
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();
}
botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});

"use strict";
// DESAFIO 1 - Transformar um codigo javascript em um typescript (conforme desafio github lira1705 - dio - bootcamp)
// Diferentes formas corretas de escrever
// FORMA 1
let funcionario = {
    codigo: 10,
    nome: "Jhon",
};
// FORMA 2
let funcionario2 = {
    codigo: 10,
    nome: "Jhon",
};
let funcionario3 = {
    codigo: 200,
    nome: "Jhon",
};
// FORMA 4 (que pega a interface do 3)
const funcionarioObj = {};
funcionarioObj.codigo = 10;
funcionarioObj.nome = "Jhon";
const funcionarioObj2 = {
    codigo: 10,
    nome: "Jhon",
};

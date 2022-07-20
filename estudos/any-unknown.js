"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = 5;
let stringTeste = "verificar";
stringTeste = anyEstaDeVolta;
// por ser any, pode receber qualquer tipo. E por mais que receba, ele SEMPRE será um any
// Ao passar o mouse por cima de anyEstaDeVolta, irá verificar que se trata, em todos os casos, de any
let unknownValor;
unknownValor = 3;
unknownValor = "opa";
unknownValor = true;
unknownValor = "vai sim";
let stringTeste2 = "agora vai";
// stringTeste2 = unknownValor;
// diferença do unknow x any
// Por mais que diga que unknownValor = 3, ao passar o mouse por cima de unknownValor, irá ser dito que é um unknown, e não uma string, number ou boolean por exemplo
// ele precisa ser feito uma validação. Pois em todos os casos ele é unknown, ou seja, desconhecido
if (typeof unknownValor === "string") {
    stringTeste2 = unknownValor;
}
// No exemplo mais acima, que está comentado, deu erro, pois não foi feito a validação
// Agora no caso acima, pela validação if, unknown pode receber e se tornar o tipo string

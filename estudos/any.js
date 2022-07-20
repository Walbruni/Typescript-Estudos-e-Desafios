"use strict";
let valorAny;
// O any é um tipo que pode receber qualquer tipo
valorAny = 5;
valorAny = "ola";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
// Isso só é permitido porque o any recebe qualquer tipo. Caso fosse passado um number ou boolean ao inves da variavel valorAny, teria dado um erro.
let valorString2 = "testao";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString("ola ", "como vai?");
// Nesse caso em questão, o valor de any será de um booleano, por ter sido a ultima variavel passada a ele.
// NÃO é boa prática ficar utilizando any, pois como foi dito, ele pode receber qualquer tipo!!!!
// Geralmente, acabam fazendo isso quando se quer transformar um projeto grande em javascript para typescript
// Porém, NÃO É UMA BOA PRÁTICA !!!!!!!!

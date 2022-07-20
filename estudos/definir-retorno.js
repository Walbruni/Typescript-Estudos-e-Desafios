"use strict";
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 3));
// Ao passar o tipo "number" também no final da função, está sendo definido que ela aceitará somente numeros
// É uma proteção a mais para a sua função, para que ela retorne somente o que voce está querendo, que nesse caso, é um number
// Esse caso irá evitar um possivel problema que possa existir, conforme o exemplo abaixo
// function somarValoresNumericos(numero1: number, numero2: number) {
//   return numero1 + numero2.toString;
// }
// O exemplo comentado acima faz com que a função que deveria retornar somente numeros, passe agora a aceitar também string

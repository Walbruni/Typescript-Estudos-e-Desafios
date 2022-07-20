"use strict";
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
// O callback passou a ser a função aoQuadrado
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
// O callback passou a ser a função dividirPorEleMesmo

"use strict";
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro("deu erro", 500);
// O tipo never tornaria a função um loop infinito, ou seja, ela nunca teria o seu fim
// O throw coloca o ponto final nessa função
// Geralmente esse tipo de função não é utilizada !!

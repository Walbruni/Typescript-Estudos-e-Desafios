function jogaErro(erro: string, codigo: number): never {
  throw { error: erro, code: codigo };
}

jogaErro("deu erro", 500);

// O tipo never tornaria a função um loop infinito, ou seja, ela nunca teria o seu fim
// O throw coloca o ponto final nessa função

// Geralmente esse tipo de função não é utilizada !!

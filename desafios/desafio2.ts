// DESAFIO 2

// Melhorar um código usando ts

enum Trabalho {
  Atriz,
  Padeiro,
}

type Humano1 = {
  nome: string;
  idade: number;
  profissao: Trabalho;
};

let pessoa1: Humano1 = {
  nome: "maria",
  idade: 29,
  profissao: Trabalho.Atriz,
};

let pessoa2: Humano1 = {
  nome: "roberto",
  idade: 19,
  profissao: Trabalho.Padeiro,
};

let pessoa3: Humano1 = {
  nome: "laura",
  idade: 32,
  profissao: Trabalho.Atriz,
};

let pessoa4: Humano1 = {
  nome: "carlos",
  idade: 19,
  profissao: Trabalho.Padeiro,
};

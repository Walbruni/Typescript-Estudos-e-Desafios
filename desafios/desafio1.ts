// DESAFIO 1 - Transformar um codigo javascript em um typescript (conforme desafio github lira1705 - dio - bootcamp)

// Diferentes formas corretas de escrever

// FORMA 1

let funcionario = {
  codigo: 10,
  nome: "Jhon",
};

// FORMA 2

let funcionario2: { codigo: number; nome: string } = {
  codigo: 10,
  nome: "Jhon",
};

// FORMA 3

interface Funcionario {
  codigo: number;
  nome: string;
}

let funcionario3: Funcionario = {
  codigo: 200,
  nome: "Jhon",
};

// FORMA 4 (que pega a interface do 3)

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = "Jhon";

const funcionarioObj2: Funcionario = {
  codigo: 10,
  nome: "Jhon",
};

const pessoa = {
  nome: "Maria",
  idade: 28,
  profissao: "desenvolvedora",
};

pessoa.idade = 25;

const andre: { nome: string; idade: number; profissao: string } = {
  nome: "Andre",
  idade: 25,
  profissao: "pintor",
};

const paula: { nome: string; idade: number; profissao: string } = {
  nome: "Paula",
  idade: 25,
  profissao: "Desenvoledora",
};

// ------
// Outra forma de escrita, utilizado agora o enum

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

// Através do ENUM criado acima, o elemento profissao passa a ser um dos que estão inseridos no enum Profissao, e não uma string qualquer
// A Profissao precisa ser escrita como está dentro de enum Profissao, além de ser somente aquelas 4 opções disponiveis.

interface Estudante extends Pessoa {
  materias: string[];
}

// Por materias constar uma lista, a string deverá ser passada com os colchetes. Forma de array

const duda: Pessoa = {
  nome: "Duda",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

// É necessário passar agora a profissao de acordo com a forma acima, quando se quer que as opções sejam apenas as que constam em ENUM

const emanuella: Estudante = {
  nome: "Emanuella",
  idade: 29,
  profissao: Profissao.Desenvolvedora,
  materias: ["Matemática", "Programação", "Lógica"],
};

const marcos: Estudante = {
  nome: "Marcos",
  idade: 28,
  materias: ["Matemática", "Programação"],
};

// No exemplo acima, a profissão não ficou obrigatória porque antes foi inserido o "?" na profissão dentro da interface Pessoa, para que se torne um dado opcional.

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(emanuella.materias);

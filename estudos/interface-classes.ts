// FORMA DE USAR INTERFACE

interface Teste {
  nome: string;
  idade: number;
}

interface Humano {
  nome: string;
  idade: number;
  endereco: string;
}

// FORMA DE USAR CLASSES

class Mamifero {
  public quantidadeDePatas: number;
  public temPelos: boolean;
  public nome: string;

  constructor(nome: string, quantidadeDePatas: number, temPelos: boolean) {
    this.nome = nome;
    this.quantidadeDePatas = quantidadeDePatas;
    this.temPelos = temPelos;
  }

  public dizerNome() {
    console.log("Meu nome é ", this.nome);
  }
}

const cachorro = new Mamifero("Billy", 4, true);
cachorro.dizerNome;

const object: Teste = {
  nome: "string",
  idade: 1233,
};

// As duas formas estão corretas, porém no caso da classe a sua sintaxe é mais complexa

// É importante saber as duas !!!!

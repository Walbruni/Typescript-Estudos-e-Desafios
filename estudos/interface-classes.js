"use strict";
// FORMA DE USAR INTERFACE
// FORMA DE USAR CLASSES
class Mamifero {
    constructor(nome, quantidadeDePatas, temPelos) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.temPelos = temPelos;
    }
    dizerNome() {
        console.log("Meu nome é ", this.nome);
    }
}
const cachorro = new Mamifero("Billy", 4, true);
cachorro.dizerNome;
const object = {
    nome: "string",
    idade: 1233,
};
// As duas formas estão corretas, porém no caso da classe a sua sintaxe é mais complexa
// É importante saber as duas !!!!

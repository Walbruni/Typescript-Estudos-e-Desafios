"use strict";
const pessoa = {
    nome: "Maria",
    idade: 28,
    profissao: "desenvolvedora",
};
pessoa.idade = 25;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor",
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvoledora",
};
// ------
// Outra forma de escrita, utilizado agora o enum
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
// Por materias constar uma lista, a string deverá ser passada com os colchetes. Forma de array
const duda = {
    nome: "Duda",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
};
// É necessário passar agora a profissao de acordo com a forma acima, quando se quer que as opções sejam apenas as que constam em ENUM
const emanuella = {
    nome: "Emanuella",
    idade: 29,
    profissao: Profissao.Desenvolvedora,
    materias: ["Matemática", "Programação", "Lógica"],
};
const marcos = {
    nome: "Marcos",
    idade: 28,
    materias: ["Matemática", "Programação"],
};
// No exemplo acima, a profissão não ficou obrigatória porque antes foi inserido o "?" na profissão dentro da interface Pessoa, para que se torne um dado opcional.
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(emanuella.materias);

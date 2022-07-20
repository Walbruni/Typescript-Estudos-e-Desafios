"use strict";
let buttonTeste = document.getElementById("button");
buttonTeste === null || buttonTeste === void 0 ? void 0 : buttonTeste.addEventListener("click", () => {
    console.log("funcionou");
});
// Ao adicionar o ponto de interrogação "?", ele fará o mesmo papel do if para verificar se aquele buttonTeste existe de fato no html
// Entretanto, essa é uma forma nova de escrever, para nao utilizar o if nesse caso, e ao ser convertido para o javascript ele fará verificações diferentes dependendo da versão que esteja o ECMAscript
// Para esse caso, essa escrita typescript acaba se tornando mais viável e deixa o código mais limpo
// Garante que os browser mais antigos continuem lendo o seu código

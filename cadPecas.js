let peso = 50;
let listaQtdPecas = 15;
let nomePeca = "pc";

if (peso >= 100) {
console.log("Peso da peça possui requisitos para cadastrar."); 
} else {
    console.log("Peso insuficiente - não é possível cadastrar."); 
}
if (listaQtdPecas >= 10) {
    console.log("Não há capacidade na lista. Caixa lotada!");
}
if (nomePeca.length < 3) {
    console.log("Nome inválido para o cadastro da peça. Insira no mínimo 3 caracteres!");
}
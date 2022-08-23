// Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// Listar participantes e palestrantes por evento.
// Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

let dataEvento = 01;
let dataAtual = 01;
let idadeParticipantes = 18;
let cadastroPalestrante = 5;
let cadastroParticipante = 100;

if (dataEvento < dataAtual) {
    console.log("Data indisponível");
} else {
    console.log("Data disponível")
}

if (idadeParticipantes >= 18) {
    console.log("Participante autorizado");
} else {
    console.log("Participante não autorizado");
}
for(let palestrante = 1; palestrante <= cadastroPalestrante; palestrante++){
    console.log( "Palestrante número: " + palestrante);
    }
for (let participante = 1; participante <= cadastroParticipante; participante++) {
    console.log("Participante número: " + participante);
};
     console.log("Cadastro finalizado. Esperamos que tenha uma ótima experiência!");
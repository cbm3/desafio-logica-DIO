
const posicaoInicial = parseInt(gets("10", "15", "2"));
const totalPassos = parseInt(gets("6", "3", "3"));

//TODO: Calcula a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
console.log("Posição final do herói: " + posicaoFinal);
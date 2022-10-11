/* Numa mesa de poker existe um valor mínimo de dinheiro
que você precisa ter para poder jogar naquela mesa.
Contudo, há também um limite máximo, pois jogadores com muito mais dinheiro
na mesa levam vantagem.
Faça um programa que selecione dentre um lista de valores,
apenas aqueles que são permitidos para se jogar numa determiada mesa de poker. */

const min = 1;
const max = 10;
const valores = [0, 1, 2, 3, 4, 5, 8, 10, 15, 18];

function listarValoresAutorizados(valorMin, valorMax, listaValores) {
    let valoresAutorizados = [];
    for (let item of listaValores) {
        if (item >= valorMin && item <= valorMax) {
            valoresAutorizados.push(item);
        }
    }
    return valoresAutorizados;
}

console.log(listarValoresAutorizados(min, max, valores));
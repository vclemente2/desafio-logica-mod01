const numeros = [1, 3, 2, 1];


function definirGoleiro(jogadas) {
    let somaJogadas = 0;
    for (let jogada of jogadas) {
        somaJogadas += jogada;
    }

    let posicaoGoleiro = 0;

    while (somaJogadas > 0) {
        posicaoGoleiro++

        if (posicaoGoleiro > jogadas.length) {
            posicaoGoleiro = 1
        }

        somaJogadas--
    }

    return posicaoGoleiro;

}
console.log(definirGoleiro(numeros));
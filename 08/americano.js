const numeros = [1, 3, 2, 1];


function definitGoleiro(jogadas) {
    let somaJogadas = 0;
    for (let jogada of jogadas) {
        somaJogadas += jogada;
    }

    console.log(somaJogadas); // apagar


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
console.log(definitGoleiro(numeros));
const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]


function indicarSorteado(jogadores) {

    let qntZero = 0;
    let qntUm = 0;
    let ultimoJogadorZero = ""; // variavel que ira auxiliar na definicao do sorteado
    let ultimoJagadorUm = ""; // variavel que ira auxiliar na definicao do sorteado

    for (let i = 0; i < jogadores.length; i++) {

        const { nome, jogada } = jogadores[i];

        if (jogada === 0) {
            qntZero++;
            ultimoJogadorZero = nome;

        } else {
            qntUm++;
            ultimoJagadorUm = nome;
        }

    }

    if (qntUm === 1) {
        return ultimoJagadorUm;
    } else if (qntZero === 1) {
        return ultimoJogadorZero;
    } else {
        return "NINGUEM";
    }

}

console.log(indicarSorteado(jogadores));
const carta = "2";


function definirManilha(carta) {

    const cartas = ["Q", "J", "K", "A", "2", "3"];
    let manilha = "";

    if (carta === cartas[cartas.length - 1]) {
        manilha = cartas[0];
        return manilha;

    } else {
        manilha = cartas[cartas.indexOf(carta) + 1];
        return manilha;
    }

}

console.log(definirManilha(carta));
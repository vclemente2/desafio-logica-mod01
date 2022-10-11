const lista = [];

function informarCaculaDosAdultos(listaIdades) {

    let menorDosMaiores = Infinity;
    let listaDosMaiores = [];

    for (let item of listaIdades) {
        if (item >= 18) {
            listaDosMaiores.push(item);

            if (item < menorDosMaiores) {
                menorDosMaiores = item;
            }

        }
    }

    if (listaDosMaiores.length === 0) {
        return "CRESCA E APARECA";
    } else {
        return menorDosMaiores;
    }

}

console.log(informarCaculaDosAdultos(lista));
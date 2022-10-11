// função para o cálculo da média aritmética de uma lista de números

const lista = [10, 20, 30, 40, 50];

function calculoMedia(listaNum) {
    let media = 0;
    for (let numero of listaNum) {
        media += numero;
    }
    media = media / listaNum.length;
    return media;
}

console.log(calculoMedia(lista));
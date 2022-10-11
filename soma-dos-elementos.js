//função para somar todos os elementos de uma lista de números

const lista = [10, 20, 30];

function somarLista(listaNum) {
    let soma = 0;
    for (let numero of listaNum) {
        soma += numero;
    }
    return soma;
}

console.log(somarLista(lista));
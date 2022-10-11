const precos = [200, 150, 50, 100];

function calcularDesconto(precos) {
    let desconto = 0;
    let itemMenorPreco = precos[0];

    if (precos.length < 3) {
        return desconto;

    } else {
        for (let preco of precos) {
            if (preco < itemMenorPreco) {
                itemMenorPreco = preco;
            }
        }

        desconto = itemMenorPreco * 0.5;
        return desconto;
    }
}

function calcularTotalAhPagar(precos) {
    let total = 0;

    for (let item of precos) {
        total += item;
    }

    total = total - calcularDesconto(precos);
    return total;
}

console.log(calcularTotalAhPagar(precos));
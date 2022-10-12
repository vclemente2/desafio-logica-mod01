const input = `5 
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7

`;

function buscarMaiorDistancia(entrada) {
    let maiorDist = 0;
    let distancias = calcularDistancias(entrada);
    if (distancias == "") {
        return maiorDist;
    } else {
        for (let item of distancias) {
            if (item > maiorDist) {
                maiorDist = item;
            }
        }
        return maiorDist;
    }
}

function calcularDistancias(input) {
    const coordenadaX = [];
    const coordenadaY = [];
    let inputArray = input.trim().split("\n");
    for (let i = 1; i < inputArray.length; i++) {
        let coordenada = inputArray[i].split(" ");
        coordenadaX.push(parseFloat(coordenada[0]));
        coordenadaY.push(parseFloat(coordenada[1]));
    }

    let distancias = [];
    for (let i = 0; i < coordenadaX.length; i++) {
        for (let j = i + 1; j < coordenadaX.length; j++) {
            distancias.push(Math.sqrt((coordenadaX[j] - coordenadaX[i]) ** 2 + (coordenadaY[j] - coordenadaY[i]) ** 2))
        }
    }
    return distancias;
}

console.log(buscarMaiorDistancia(input));
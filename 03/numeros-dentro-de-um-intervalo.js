// função que irá verificar se um número está dentro de um intervalo entre dois números

const numero = 30;
const limiteInferior = 5;
const limiteSuperior = 20;

function estaNoIntervalo(num, limiteInferior, limiteSuperior) {
    if (num >= limiteInferior && num <= limiteSuperior) {
        return "PERTENCE";
    } else {
        return "NAO PERTENCE";
    }
}

console.log(estaNoIntervalo(numero, limiteInferior, limiteSuperior));
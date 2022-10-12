const input = "TO sENTINDO minhas Forças INDO eMBORA";


function padronizarString(input) {

    let inputList = input.split(' ');
    let inputListPadronizada = [];

    for (let palavra of inputList) {
        let palavraMinuscula = palavra.toLowerCase();
        let palavraMaiuscula = palavra.toUpperCase();
        if (palavraMinuscula === palavra) {
            inputListPadronizada.push(palavra);
        } else if (palavraMaiuscula === palavra) {
            inputListPadronizada.push(palavraMinuscula);
        } else {

            let palavraSplit = palavra.slice(1);
            let palavraSplitUpperCase = palavraSplit.toUpperCase();
            if (palavraSplit !== palavraSplitUpperCase) {
                inputListPadronizada.push(palavra);
            } else {
                let palavraPadronizada = palavra[0].toUpperCase() + palavraSplit.toLowerCase();
                inputListPadronizada.push(palavraPadronizada);
            }
        }
    }

    let stringPadronizada = inputListPadronizada.join(' ')
    return stringPadronizada
}

console.log(padronizarString(input));
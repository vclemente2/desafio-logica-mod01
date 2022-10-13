const input = `teste
tiste`;


function abrirCofre(input) {
    let senhaCorreta = input.slice(0, input.indexOf('\n'));
    let senhaDigitada = input.slice(input.indexOf('\n'), input.length);
    let senhaDigitadaTratada = ""

    let ultimaPosicaoEncontrada = 0;
    for (let i = 0; i < senhaCorreta.length; i++) {
        let j = ultimaPosicaoEncontrada;
        while (j < senhaDigitada.length) {
            if (senhaCorreta[i] === senhaDigitada[j]) {
                senhaDigitadaTratada += senhaDigitada[j];
                ultimaPosicaoEncontrada = j + 1;
                break;
            } else {
                j++
            }
        }
    }

    if (senhaCorreta === senhaDigitadaTratada) {
        return 'SIM';
    } else {
        return 'NAO';
    }
}

console.log(abrirCofre(input));
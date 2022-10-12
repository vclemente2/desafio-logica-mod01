let texto = 'vinicius  Bastos';

function contarTotalPalavras(texto) {
    let qntDePalavras = 0;
    texto = texto.trim()

    if (texto.length === 0) {
        return qntDePalavras;
    } else {
        const listaTexto = texto.split(" ");
        if (listaTexto.includes(" ") || listaTexto.includes("")) {
            while (listaTexto.includes(" ")) {
                listaTexto.splice(listaTexto.indexOf(" "), 1);
            }
            while (listaTexto.includes('')) {
                listaTexto.splice(listaTexto.indexOf(''), 1);
            }
            qntDePalavras = listaTexto.length;
            return qntDePalavras;
        } else {
            qntDePalavras = listaTexto.length;
            return qntDePalavras;
        }
    }
}


console.log(contarTotalPalavras(texto));
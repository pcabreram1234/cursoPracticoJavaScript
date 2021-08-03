const verificarElementos = (listaElementos) => {
    listaElementos.forEach(el => {
        el === 0 ? alert("Existe un valor") : 1
    });

}

verificarElementos([1, 2, 3, 4, 0, 12])
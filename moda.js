/* const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map(function(el) {
    if (lista1Count[el]) {
        lista1Count[el] += 1;
    } else {
        lista1Count[el] = 1;
    }
});

//Convertir objeto a Array
const lista1Arrray = Object.entries(lista1Count).sort(function(
    valorAcumulado,
    nuevoElemento
) {
    return valorAcumulado[1] - nuevoElemento[1];
});

const moda = lista1Arrray[lista1Arrray.length - 1][0]; */

function moda(lista) {
    let listaOrdenada = {};
    lista.map((el) => {
        listaOrdenada[el] ? (listaOrdenada[el] += 1) : listaOrdenada[el] = 1;
    });

    const listaNueva = Object.entries(listaOrdenada).sort((a, b) => {
        return a[1] - b[1];
    });

    return listaNueva[listaNueva.length - 1];
}
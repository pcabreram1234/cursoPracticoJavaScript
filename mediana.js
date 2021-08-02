const lista1 = [4, 6, 7, 9, 25, 20];
/* const mitadLista1 = parseInt(lista1.length / 2); */
let mediana;

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAcumulado = 0, elemento) => {
        return valorAcumulado + elemento;
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        const promedio1 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio1;
        return mediana;
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }
}

const arrayOrdenado = {};

/* function comparar(lista) {
  let arr = lista.map((el, i) => {
    if (el > el[i + 1]) {
      return el;
    } else {
      return el[i + 1];
    }
  });
}
 */

lista1.map((el) => {
    if (arrayOrdenado[el]) {
        arrayOrdenado[el] += 1;
    } else {
        arrayOrdenado[el] = 1;
    }
});

calcularMediana(lista1);
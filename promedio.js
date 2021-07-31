const lista1 = [100, 200, 300, 500];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = lista1[i] + sumaLista1;
}

console.log(sumaLista1);

const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
    /*     let sumaLista = 0; */

    /*     for (let i = 0; i < lista.length; i++) {
                                    sumaLista = lista[i] + sumaLista;
                                } */

    const sumaLista = lista.reduce((valorAcumulado = 0, elemento) => {
        return valorAcumulado + elemento;
    });

    const promedioLista = sumaLista / lista.length;
    return { promedioLista, sumaLista };
}

calcularMediaAritmetica([1, 14, 151, 98]);
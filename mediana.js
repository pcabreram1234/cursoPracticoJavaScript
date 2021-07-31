function mediana(lista) {
    const mitadLista1 = lista.length / 2;
    mitadLista1 %= 2 ? "Es par" : "Es impar";
}
/* 
const lista1 = [100, 200, 500, 400000000];
const mitadLista1 = lista1.length / 2;
mitadLista1 %= 2 == 0 ? "Es par" : "Es impar"; */

mediana([100, 200, 500, 400000000]);
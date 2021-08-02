const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

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

let persona = {
    nombre: "Phillip",
    apellido: "Cabrera",
    edad: 31,
    profesion: "Estudiante",
    pais: "Republica dominicana",
};
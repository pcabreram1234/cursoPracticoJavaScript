console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm^2`);

const perimetroCuadrado = (lado) => {
    return lado * 4;
};

const areaCuadrado = (lado) => {
    return lado * lado;
};
console.groupEnd();

//Código del triángulo
console.group("Triángulos");

const perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
};

const areaTriangulo = () => {
    return (base * altura) / 2;
};

console.groupEnd();
//Código del triángulo

//Código del círculo
console.group("Círculos");

//Radio

//Diámetro
const diametroCirculo = (radio) => {
    return radio * 2;
};

//PI
const PI = Math.PI;

//Circuferencia
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

//Area
const areaCirculo = (radio) => {
    return radio * radio;
};

function calcularAreaCuadrado() {
    let lado = document.getElementById("ladosCuadrado").value;
    const area = areaCuadrado(lado);
    alert(area);
}

function calcularPerimetroCuadrado() {
    let lado = document.getElementById("ladosCuadrado").value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

/* const obtenerLongitudTriangulo = () => {
    let lados = [];
    lados.push(document.getElementById("lado1").value);
    lados.push(document.getElementById("lado2").value);
    lados.push(document.getElementById("lado3").value);
    return lados;
};

const verificarLados = () => {
    lados = obtenerLongitudTriangulo();
    let ladosIguales;
    console.log(lados);

    if (lados[0] % lados[1] === 0) {
        ladosIguales = true;
    }

    if (lados[1] % lados[2] === 0) {
        ladosIguales = true;
    }

    if (lados[2] % lados[0] === 0) {
        ladosIguales = true;
    }
    console.log(ladosIguales);
}; */

function calcularAreaIso() {
    let a = 0;
    let b = 0;

    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const lado3 = document.getElementById("lado3").value;

    lado1 === lado2 ? ((a = lado1), (b = lado3)) : a;
    lado2 === lado3 ? ((a = lado2), (b = lado1)) : a;
    lado3 === lado1 ? ((a = lado3), (b = lado2)) : a;

    if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
        console.log("Es un triagulo Isoceles");
        console.log(b);
        let altura = Math.sqrt(a * a - (b / 2) * (b / 2));
        console.log(altura);
    } else {
        console.log("No es un triagulo Isoceles");
    }
}
console.groupEnd();
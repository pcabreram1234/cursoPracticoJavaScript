console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm^2`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm^2`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrao es ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
const ladroTraigulo1 = 6;
const ladroTraigulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    `Los lados del triágulo miden ${ladroTraigulo1} cm,${ladroTraigulo2} cm, ${baseTriangulo}`
);

console.log(`La altura del triágulo es de ${alturaTriangulo} cm`);

const perimetroTriangulo = ladroTraigulo1 + ladroTraigulo2 + baseTriangulo;
console.log(`El perimetro del triágulo es de ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triágulo es de ${areaTriangulo} cm`);
console.groupEnd();
//Código del triángulo

//Código del círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo es de ${radioCirculo} cm`);

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es de ${diametroCirculo} cm`);

//PI
const PI = Math.PI;
console.log(`El valro PI es ${PI}`);

//Circuferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo es de ${perimetroCirculo} cm`);

//Area
const areacirculo = PI * (radioCirculo * radioCirculo);
console.log(`El área del circulo es de ${areacirculo} cm`);

console.groupEnd();
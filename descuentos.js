/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

/* const precioOriginal = 120;
const descuento = 18; */

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const calcularPrecio = (precio, descuento, cupones) => {
    let contador = 1;
    let dineroDescontable = (precio * descuento) / 100;
    let descuentoAcumulado;

    do {
        descuentoAcumulado = dineroDescontable * contador;
        contador++;
    } while (contador <= cupones);

    let precioNeto = precio - descuentoAcumulado;
    console.log({ dineroDescontable, precioNeto });
    if (precioNeto < 0 || precioNeto == 0) {
        return "!Es Gratis¡";
    } else {
        return precioNeto;
    }
};

calcularPrecio(100, 20, 2);

function restForm() {
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    document.getElementById("precioApagar").innerText = "";
    document.getElementById("inputPrice").focus();
}

let soloNumeros = new RegExp("[0-9]");
let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keypress", (e) => {
        soloNumeros.exec(e.key);
        console.log(soloNumeros.test(e.key));
        soloNumeros.test(e.key) ? (e.returnValue = true) : (e.returnValue = false);
    });
}

document.getElementById("btnCalcularPrecio").addEventListener("click", (e) => {
    let precio = document.getElementById("inputPrice").value;
    let descuento = document.getElementById("inputDiscount").value;
    let cupones = document.getElementById("inputCupones").value;
    document.getElementById("precioApagar").innerText = calcularPrecio(
        precio,
        descuento,
        cupones
    );
});

document.getElementById("btnReiniciar").addEventListener("click", () => {
    restForm();
});
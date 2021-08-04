const listaElementos = [];

const verificarElementos = (elemento) => {
    if (elemento === "" || elemento == 0) {
        return 0;
    }
};

const agregarElemento = (el) => {
    const elAdd = verificarElementos(el);
    if (elAdd == 0) {
        alert("El valor ingresado no puede ser nulo");
        document.getElementById("inputAdd").focus();
        return;
    } else {
        let textAreaActValue = document.getElementById("textAreaResult").value;
        document.getElementById("textAreaResult").value = `${textAreaActValue} 
        ${el}...`;
        listaElementos.push(parseInt(el));
        document.getElementById("inputAdd").value = "";
        document.getElementById("inputAdd").focus();
    }
};

const calcularMediaArmonica = (lista) => {
    const nNumeros = lista.length;
    let valorAcumuladoSuma = 0;
    for (let i = 0; i < lista.length; i++) {
        valorAcumuladoSuma = valorAcumuladoSuma + 1 / lista[i];
    }
    return nNumeros / valorAcumuladoSuma;
};

document.getElementById("btnCalculate").addEventListener("click", () => {
    if (listaElementos.length === 0) {
        alert("Favor introducir por lo menos dos valores");
        document.getElementById("inputAdd").focus();
        return;
    } else {
        let resultado = calcularMediaArmonica(listaElementos);
        document.getElementById("resultInput").value = parseFloat(resultado);
    }
});

document.getElementById("btnAddvalue").addEventListener("click", () => {
    let valor = document.getElementById("inputAdd").value;
    agregarElemento(valor);
});

document.getElementById("inputAdd").addEventListener("keydown", () => {
    soloNumeros();
});

const soloNumeros = () => {
    let soloNumeros = new RegExp("[0-9]");
    let inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keypress", (e) => {
            soloNumeros.exec(e.key);
            console.log(soloNumeros.test(e.key));
            soloNumeros.test(e.key) ?
                (e.returnValue = true) :
                (e.returnValue = false);
        });
    }
};
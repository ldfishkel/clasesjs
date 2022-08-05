const operacion = (operador, n1, n2) => {
    switch (operador) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case 'x': return n1 * n2;
        case '/': return n1 / n2;
    }
}

const resolverOperacion = (operador) => {

    let numerosDisplay = display.value.split(operador);

    if (numerosDisplay.length == 2) {
        let n1 = parseInt(numerosDisplay[0]);
        let n2 = parseInt(numerosDisplay[1]);
        
        display.value = operacion(operador, n1, n2);
    }
}

const clickBotonIgual = () => {
    let caracateresValidos = [ "+", "-", "x", "/" ];
 
    caracateresValidos.forEach(caracter => {
        if (display.value.includes(caracter))
            resolverOperacion(caracter);
    });
}
var operadoresValidos = ["+", "-", "x", "/"];

const ultimoCaracterDelDisplay = () => display.value[display.value.length -1];

const hayAlgunOperadorEnElDisplay = () => operadoresValidos.some(caracter => display.value.includes(caracter));

const clickDeOperadores = (evento) => {
    let numerosValidos = "1234567890";
    
    if (numerosValidos.includes(ultimoCaracterDelDisplay()) && !hayAlgunOperadorEnElDisplay()) {
        let textoClickeado = evento.target.innerText;
    
        if (operadoresValidos.includes(textoClickeado))
            display.value = display.value + textoClickeado;
    }
}
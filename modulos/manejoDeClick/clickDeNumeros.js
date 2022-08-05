const clickDeNumero = (evento) => {
    let numerosValidos = "1234567890";
    let textoClickeado = evento.target.innerText;

    if (numerosValidos.includes(textoClickeado))
        display.value = display.value + evento.target.innerText;
}
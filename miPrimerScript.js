var miInput = document.getElementById("miInput");
var miBoton = document.getElementById("boton"); 
let miLista = document.getElementById("miLista");

//esta es una variable de tipo ARRAY (lista en javascript) donde vamos a guardar los datos ingresados
var listaDeDatos = []; 

//////////////////////////////////////////////////////////////////////
// declaro mis funciones
//////////////////////////////////////////////////////////////////////
var obtenerTexto = () => miInput.value;

// esta funcion devuelve true si el texto existe en la lista de datos
var existeEnLaLista = (texto) => listaDeDatos.includes(texto);

var mostrarMensajeError = (texto) => alert("El texto ingresado " + texto + " ya existe en la lista");

var agregarTextoALaListaDeDatos = (texto) => listaDeDatos.push(texto);

var limpiarInput = () => miInput.value = "";

var devolverElFocoAlInput = () => miInput.focus();

var crearElementoLIenElHTML = (texto) => {
    let miLI = document.createElement("li");
    let miTexto = document.createTextNode(texto);
    miLI.appendChild(miTexto);
    miLista.appendChild(miLI);
}

var agregarALaLista = (texto) => {
    agregarTextoALaListaDeDatos(texto);
    crearElementoLIenElHTML(texto);
    limpiarInput()
    devolverElFocoAlInput();
}


//////////////////////////////////////////////////////////////////////
// este es el evento del click
//////////////////////////////////////////////////////////////////////
miBoton.onclick = () => { 
    let textoEscrito = obtenerTexto(); // aca la estoy llamando

    if (existeEnLaLista(textoEscrito))
        mostrarMensajeError(textoEscrito); // esto se ejecuta en caso de que se cumpla la condicion
    else
        agregarALaLista(textoEscrito); // esto se ejecuta en caso de que NO se cumpla la condicion
}

miLista.onclick = (event) => {
    listaDeDatos = listaDeDatos.filter(item => item != event.target.innerText)
    event.target.remove(); 
}

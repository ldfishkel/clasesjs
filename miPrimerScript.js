var miInput = document.getElementById("miInput"); // estoy asignando un elemento html a una variable global 
var miBoton = document.getElementById("boton"); 
var miLista = document.getElementById("miLista");

//esta es una variable de tipo ARRAY (lista en javascript) donde vamos a guardar los datos ingresados
var listaDeDatos = []; // estoy asignando una lista vacia a una variable


//////////////////////////////////////////////////////////////////////
// declaro mis funciones
//////////////////////////////////////////////////////////////////////

var mostrarElemento = (idElementoAMostrar) => { //es una funcion para mostrar la lista con el id del elemento
    let elemento = document.getElementById(idElementoAMostrar) //asigno a una variable un elemento html por id

    if (elemento) // aca estoy validando si el elemento es distinto de null
        elemento.classList.remove("oculto"); // le saco la clase "oculto" al elemento que se encuentra en la variable elemento
}

var ocultarElemento = (idElementoAOcultar) => {
    let elemento = document.getElementById(idElementoAOcultar)

    if (elemento)
        elemento.classList.add("oculto");
}

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

const checkeoDeCantidadDeItems = () => {
    if (listaDeDatos.length > 0) { //esta es la forma de ver si un array no esta vacio. estamos preguntando si su longitud (length) es mayor a 0
        ocultarElemento("mensajeError");
        mostrarElemento("miLista");
    } else {
        ocultarElemento("miLista");
        mostrarElemento("mensajeError");
    }
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

    checkeoDeCantidadDeItems();
}

miLista.onclick = (event) => {
    listaDeDatos = listaDeDatos.filter(item => item != event.target.innerText)
    event.target.remove(); 
    checkeoDeCantidadDeItems();
}

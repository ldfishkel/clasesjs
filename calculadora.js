var numeros = document.getElementById("numeros"); //variable global
var botonIgual = document.getElementById("botonIgual"); //variable global
var operadores = document.getElementById("operadores"); //variable global
var display = document.getElementById("display");

numeros.onclick = clickDeNumero;
operadores.onclick = clickDeOperadores;
botonIgual.onclick = clickBotonIgual;
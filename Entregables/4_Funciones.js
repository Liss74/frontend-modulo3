/*
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
*/

let titulo = prompt("Ingrese el titulo del libro que ha leido: ");
let librosLeidos = [];

function agregarLibro(titulo){
librosLeidos.push(titulo);
}
agregarLibro(titulo);

function mostrarLibrosLeidos(){
    console.log(librosLeidos);
}
mostrarLibrosLeidos();
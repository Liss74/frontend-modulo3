/* Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].' */

let caracteristicas= null;
// Solución
let libro = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    año: 1943,
    estado: 'disponible',
    describirLibro: function() {
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}.`);
    }
};

libro.describirLibro();

let libro2 = {
    titulo: 'El Alquimista',
    autor: 'Paulo Coelho',
    año: 1988,  
    estado: 'prestado',
    describirLibro: function() {    
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}.`);
    }   
};

libro2.describirLibro();


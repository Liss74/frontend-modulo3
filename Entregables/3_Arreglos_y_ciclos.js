/* Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).
*/

//Primer intento

//creo la lista de frutas
let fruta = ["manzana", "pera", "uva", "manzana", "pera", "uva", "manzana", "pera", "uva", "manzana"];

//Creo el contador desde cero
let manzana = 0;
let pera = 0;
let uva = 0;

//inicializo la variable i
let i=0;
while (i < fruta.length) {
    if (fruta[i]== "manzana") {
        manzana++;
    } else {
        if (fruta[i]== "pera") {
            pera++;
        } else {
        uva+=1;
        }
    }
    i+=1;
}

console.log("manzana: " + manzana);
console.log("pera: " + pera);
console.log("uva: " + uva);
    

//Segundo intento
//Declara un arreglo llamado frutas con varios tipos de frutas.
let frutas = ["manzana", "pera", "uva", "manzana", "pera", "uva", "manzana", "pera", "uva", "manzana"];

//Crea un objeto para almacenar la cantidad de cada tipo de fruta.
let frutasContadas = {};

//Hacemos un ciclo que va de 0 a la cantidad de elementos en el arreglo frutas
for (i = 0; i < frutas.length; i++) {
    if (frutasContadas[frutas[i]]) {
        frutasContadas[frutas[i]]++;
    } else {
        frutasContadas[frutas[i]] = 1;
    }

    /*Lo que hace el ciclo es verificar si la fruta actual (frutas[i]) ya existe en frutasContadas, cómo es un condicional se evalúa dos casos:
Si ya existe, se incrementa su valor en frutasContadas[frutas[i]]++.
Si no existe, se inicializa en 1.*/
}

//Imprime en la consola la cantidad de cada tipo de fruta.
console.log(frutasContadas);
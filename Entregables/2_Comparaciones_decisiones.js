/*Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
Instrucciones (pistas) para resolver el problema:
Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100.Puede ser un valor aleatorio (opcional).
Usa una condición if para verificar si el valor de nota es mayor que 0 (truthy).
Utiliza operadores de comparación (<,>, <=, >=) para determinar el rango de la nota.
Imprime en la consola un mensaje que indique la nota que obtuvo el alumno.
Adicionalmente - Prueba diferentes valores para la variable nota (por ejemplo, 45, 60, 75, 0) para ver cómo cambia el resultado.
*/

//Declaramos la variable
let nota = 90;

if(nota >0){
    if(nota >= 90){
        console.log("Excelente");
    } else if( nota >=75 && nota <= 89){
        console.log("Bien");
    } else if( nota >=60 && nota <= 74){
        console.log("Suficiente");
    } else {
        console.log("No aprobado");
    }
}
console.log("La nota no es positiva");

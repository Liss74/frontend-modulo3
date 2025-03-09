/* Objetivo
El objetivo es crear un sitio que nos permita generar una contraseña segura
Apartir de la imagen propocionada maqueta y genera el formulario necesario para generar el html
El sitio debe ser capaza de generar una contraseña diferente de mas de 8 palabras usando simbolos, letras y numéros
*/

let contraseña= [];
let botonGenerar = document.getElementById("boton");


//confirmamos si la contraseña tiene los requisitos
function verificacionContraseña(){
    let texto = document.getElementById("texto").value;

    document.getElementById("caracteres").checked = texto.length >= 8;
    document.getElementById("mayuscula").checked = /[A-Z]/.test(texto);
    document.getElementById("minuscula").checked = /[a-z]/.test(texto);
    document.getElementById("numeros").checked = /[0-9]/.test(texto);
    document.getElementById("simbolo").checked = /[*#@]/.test(texto);
}

function guardarContraseña(){
    let texto = document.getElementById("texto").value;
    contraseña.push(texto)
}
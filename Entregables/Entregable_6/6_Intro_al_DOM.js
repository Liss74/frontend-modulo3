/* Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional) */

// Crear un array para almacenar los comentarios.
let comentarios = [];

let escrito = document.getElementById('comentario');

let botonEnviar = document.getElementById('enviar');

let mostrarTexto = document.getElementsByTagName('p');

let botonEliminar = document.getElementById('eliminar');

// Crear una función para agregar comentarios.
botonEnviar.addEventListener('click', ()=> {
    console.log("boton presionado");
    comentarios.push(escrito.value);
    mostrarTexto[0].innerHTML = comentarios;
})

// Crear una función para eliminar comentarios.
botonEliminar.addEventListener('click', ()=> {
    console.log("boton eliminar presionado");
    comentarios.pop();
    mostrarTexto[0].innerHTML = comentarios;
})

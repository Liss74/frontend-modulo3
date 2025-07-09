// Selectores de elementos

// Sintaxis


// - document.getElementById("id")
//Recordar que solo puede haber un id en el html, en caso de haber dos solo va a hacer los cambios en el primer id que encuentre

let titulo_recetas = document.getElementById("titulo_recetas")
console.log(titulo_recetas)

titulo_recetas.innerHTML = "Recetas de la semana..."

// - document.getElementsByClassName("class")

let recetas = document.getElementsByClassName("receta")
console.log(recetas) //Nos da un tipo arreglo pero no es un arreglo, es una colección de elementos de HTML

for(let i = 0; i < recetas.length; i++) {
    const original_html = recetas[i].innerHTML
    recetas[i].innerHTML = "Receta numero " + (i + 1) + " de " + recetas.length + ": " + original_html
}  //enumera las recetas

// - document.getElementsByTagName("tag")
// los tag son los h (títulos)

let articles = document.getElementsByTagName("article")
console.log(articles)

for(let i = 0; i < articles.length; i++) {
    const original_html = articles[i].innerHTML
    articles[i].innerHTML = "| " + original_html + " |"
} //Nos pone todo entre líneas

// - document.querySelector("selector")
// Cambia el primero que encuntra por eso se especifica, y en este caso se usa el #
//El querySelector también nos ayuda a modificar estilos en CSS

let h2 = document.querySelector("h2#titulo_recetas")
h2.innerHTML = "Recetas de la semana... (Otra vez)"


// - document.querySelectorAll("selector")
// 

let recetas_restaurantes = document.querySelector(".recetas, .restaurantes")
console.log(recetas_restaurantes)

for(let i = 0; i < recetas_restaurantes.length; i++) {
    const original_html = recetas_restaurantes[i].innerHTML
    recetas_restaurantes[i].outerHTML = "<div>"  + original_html + "</div>"
}

// Manipulación del DOM con JavaScript

// Sintaxis
// - OuterHTML
// - innerHTML

// Ejemplos

/* let */ h2 = document.querySelector("h2#titulo_recetas")
h2.innerHTML = "Recetas de la semana... (Otra vez)" //Aquí solo actua y nos da en el texto
h2.outerHTML = "<h2 id='titulo_recetas'>Recetas de la semana... (Otra vez)</h2>" //Aquí nos da todo lo de html, es decir si es un h1 y tiene id, nos lo muestra

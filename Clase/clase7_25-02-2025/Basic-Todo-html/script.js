let todo_form = document.getElementById("todo-form")
let todo_container = document.getElementById("todo-container")
let id = 1

todo_form.addEventListener("submit", (e) => {  
    e.preventDefault() // Prevenir el comportamiento predeterminado del formulario
    // Añadir el listener al botón de borrar

    // 1. Por medio de class

    /*
    todo_container.innerHTML += `
    <div id="todo-elment-${id}">
        ${e.target.todo.value}
        <button id="todo-delete-${id}" class="button-delete">x</button>
    </div>
    `
    //la parte de abajo es que cada vez que se añada también se añada el listener
    let buttons_delete = document.getElementsByClassName("button-delete")
    for(let i=0; i<buttons_delete.length;i++) {
        buttons_delete[i].addEventListener("click", (event) => {
            console.log(event)
        })
    }
    */
    

    // 2. Usando addNode
    let new_todo = document.createElement("div")
    new_todo.innerHTML = `
    <div id="todo-elment-${id}">
        ${e.target.todo.value}
        <button id="todo-delete-${id}" class="button-delete">x</button>
    </div>
    `
    //otra forma de hacer lo de arriba es poniendo el botón de la siguiente manera
    //<button onclick="this.parentElement.parentElement.style.display = 'none'">x</button>
    
    todo_container.appendChild(new_todo)//appendChild es para añadir un nodo al final del nodo padre

    let delete_button = document.getElementById(`todo-delete-${id}`)
    delete_button.addEventListener("click", (e) => {
        let todo = e.target.parentElement.parentElement  // todo item
        // 1. display: none
        //aquí ocultamos el texto pero seguirá estando en el html

        // todo.style.display = "none"
        
        // 2. removeChild
        //aquí eliminamos el nodo del html, es decir el texto ya no estará en el html como con display: none

        todo_container.removeChild(todo)
    })

    id++

    console.log("Tarea Agregada!")
})


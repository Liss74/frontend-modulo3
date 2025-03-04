//If solo
let a= 5;
let b= 10;

if(a < b){
    console.log("a es menor que b");
    console.log("a sigue siendo menor que b"); //No importa cuantas líneas tengamos aquí, todas las va a ejecutar
}

if(a > b){
    console.log("a es mayor que b");
    console.log("a sigue siendo mayor que b"); //Como no se cumple no lo ejecuta y se sigue con lo demás que haya de código
}

//If else
a =5;
b=5;

if(a < b){
    console.log("a es menor que b");
}else{
    console.log("a es mayor que b");
}
// Aquí nos va a imprimir que a es mayor que b porque a y b son iguales, sin embargo eso no está correcto, debería ser a es igual a b

//If else if
if(a < b){
    console.log("a es menor que b");
}else if(a == b){
    console.log("a es igual a b");
} else{
    console.log("a es mayor que b");
} //En este ejemplo si se especifica que a es igual a b	 u otro caso


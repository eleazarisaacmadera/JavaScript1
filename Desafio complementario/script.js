let respuesta = prompt("Crees en los angeles?" )

if (respuesta == "si" ) {
    alert("Bienvenido")
}
else if (respuesta == "no" ) {
    alert("Vuelve cuando abras el corazon")

}

else if (respuesta == "no se") {
    alert("Esta es tu oportunidad de empezar a creer")
}
else {
    alert("No entiendo tu respuesta");setTimeout (function(){location.href="./index.html"})
}
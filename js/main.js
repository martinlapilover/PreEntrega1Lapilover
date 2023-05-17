let nombreUsuario = prompt ("Ingresa tu nombre")
let repetir = true
if (nombreUsuario == "") {
    do {
        console.log("no se ha ingresado un nombre de usuario")
    }
    while (nombreUsuario = "") {
        alert("No se ha ingresado tu nombre, por favor intenta nuevamente")
    }
} else{
    alert("Bienvenido " + nombreUsuario + " gracias por visitarnos")
}

for(let i = 1; i <= 3; i++ ){
    let nombreUsuario = prompt("Nombre para solicitar un turno")
    if( i === 1,2,3){
        break
    }
    alert("Tu turno de atención es el N°"+i+"Nombre: "+nombreUsuario)
}
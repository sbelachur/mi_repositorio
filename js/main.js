

let cantoIndividual = "Clase de Canto Individual -- 10 euros"
let cantoMes = "Canto - Mes Completo : 35 euros"
let cantoTrimestre = "Canto - Trimestral : 95 euros"

let tapIndividual = "Tap Dance - Clase Individual : 15 euros"
let tapMes = "Tap Dance - Mes Completo: 55 euros"
let tapTrimestre = "Tap Dance - Trimestral : 155 euros"

let servicio 
servicio = prompt ("¿Qué servicios deseas contratar? \n" + "1. " + cantoIndividual + "\n2. " + cantoMes + "\n3. " + cantoTrimestre)
servico = parseInt (servicio)


switch (servicio) {
    case "1": {
        alert ("El total es de 10 euros")
    }; break;
    case "2": {
        alert ("El total es de 35 euros")
    }; break;
    default: {
        alert ("El total es de 95 euros")
    }
}

let confirmacion = confirm ("¿Desea contratar algún otro servicio'")

if (confirmacion == true){

    let servicio2 
    servicio2 = prompt ("¿Qué servicios deseas contratar? \n" + "1. " + tapIndividual + "\n2. " + tapMes + "\n3. " + tapTrimestre)
    servico2 = parseInt (servicio2)

    switch (servicio2) {
        case "1": {
            alert ("El total es de 15 euros")
        }; break;
        case "2": {
            alert ("El total es de 55 euros")
        }; break;
        default: {
            alert ("El total es de 155 euros")
        }
    }

} else {
    alert = "El total es "
}
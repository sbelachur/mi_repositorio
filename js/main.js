

let cantoIndividual = "Clase de Canto Individual -- 10 euros"
let cantoMes = "Canto - Mes Completo : 35 euros"
let cantoTrimestre = "Canto - Trimestral : 95 euros"

let tapIndividual = "Tap Dance - Clase Individual : 15 euros"
let tapMes = "Tap Dance - Mes Completo: 55 euros"
let tapTrimestre = "Tap Dance - Trimestral : 155 euros"

let servicio 
servicio = prompt ("¿Qué servicios deseas contratar? \n" + "1. " + cantoIndividual + "\n2. " + cantoMes + "\n3. " + cantoTrimestre)
servicio = parseInt (servicio)


function servicioCanto (servicio) {
    switch (servicio) {
        case 1: {
            alert ("El total es de 10 euros");
            return 10;
        };
        case 2: {
            alert ("El total es de 35 euros")
            return 35;
        };
        default: {
            alert ("El total es de 95 euros");
            return 95;
        }
    }
}  


function servicioTap (servicio2) {
    switch (servicio2) {
        case 1: {
            alert ("El total es de 15 euros");
            return 15;
        };
        case 2: {
            alert ("El total es de 55 euros");
            return 55;
        };
        default: {
            alert ("El total es de 155 euros");
            return 155;
        }
    }
}

let total = servicioCanto (servicio);

let confirmacion = confirm ("¿Desea contratar algún otro servicio'")

if (confirmacion == true){

    let servicio2 
    servicio2 = prompt ("¿Qué servicios deseas contratar? \n" + "1. " + tapIndividual + "\n2. " + tapMes + "\n3. " + tapTrimestre)
    servico2 = parseInt (servicio2)

    total += servicioTap(servicio2);
    alert("El total de todos los servicios es " + total)

    

} else {
    alert = "El total es" + total
}


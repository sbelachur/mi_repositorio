

/*let cantoIndividual = "Clase de Canto Individual -- 10 euros"
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
}*/


class Performance {
    constructor (nombre, duracion, precio) {
        this.name = nombre;
        this.hour = duracion;
        this.price = precio;
    }
    tipo () {
        console.log ("El show " + (this.name) + " dura " + (this.hour) + " y cuesta " + (this.price) + " euros.");

    }
}

let performance1 = new Performance ("Canciones Modernas", "1 hora", 50);
performance1.tipo();
let performance2 = new Performance ("Baile Moderno", "2 horas", 90);
performance2.tipo ();


        let servicio; 

		let servicios = [];




		do{
			servicio = prompt ("Introduce el nombre del servicio");
			servicios.push(servicio);
		} while (confirm("¿Desea agregar otro servicio?"))

	
		

		console.log (servicios);

		console.log ("<p>El número de servicios es " + servicios.length + "</p>");

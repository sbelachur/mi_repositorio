


// let div = document.getElementById ("canto");

// console.log (div.innerHTML);


/*Servicios*/

class Servicio {
    constructor (nombre, duracion, precio) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = parseFloat (precio);
    }

    sumarTarifaServicio () {
        return this.precio * 1.10;
    }
}



var arrayServicios = [];


do {
    var tipo = prompt ("¿Qué servicios deseas ingresar para contratar? Si no deseas ingresar servicios, escribe ninguno");
    if (tipo === "ninguno" || tipo === "NINGUNO" || tipo === "Ninguno") {
        break;
    } else {
        nombreServicio = tipo;
        var duracionServicio = prompt ("Ingrese la duración del servicio");
        var precioServicio = prompt ("Ingrese el precio del servicio");
        arrayServicios.push (new Servicio (nombreServicio, duracionServicio, precioServicio));
    }
}
while (tipo != "ninguno" || tipo != "NINGUNO" || tipo != "Ninguno")

console.log (arrayServicios);

for (var servicio of arrayServicios) {
    let divServicio = document.createElement ("div");

    divServicio.innerHTML = `<h3> Tipo: ${servicio.nombre} </h3>
                            <h3> Duracion: ${servicio.duracion} </h3>
                            <h3> Precio: ${servicio.precio} </h3>
                            <h3> Precio con Tarifa de Servicio: ${servicio.sumarTarifaServicio ()}</h3> `;
    
    document.body.appendChild(divServicio)


    // document.write ("<li><h3>Duracion: " + servicio.duracion + "</h3></li>");
    // document.write ("<li><h3>Precio: " + servicio.precio + "</h3></li>");
    // document.write ("<li><h3>Precio con Tarifa de Servicio: " + servicio.sumarTarifaServicio () + "</h3></li></ul><br>");
    // console.log (servicio.nombre);
    // console.log (servicio.duracion);
    // console.log (servicio.precio);
    // console.log (servicio.sumarTarifaServicio());

}


// var ordenarPrecio = [];

// ordenarPrecio = arrayServicios.map (elemento => elemento);
// var ordenarPrecio = arrayServicios;
// ordenarPrecio.sort (function (a, b) {
//     return a.precio - b.precio;
// });
// console.log ("Ordenado por precio");
// console.log (ordenarPrecio);
// document.write ("<h3> Servicios ordenados por precio");

// for (var servicio of ordenarPrecio) {
//     document.write ("<ul><li><h3> Nombre: " + servicio.nombre + "</h3></li>");
//     document.write ("<li><h3> Duracion: " + servicio.duracion + "</h3></li>");
//     document.write ("<li><h3> Nombre: " + servicio.precio + "</h3></li></lu>");

// }


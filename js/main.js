
/*Servicios*/

const servicios = [
    {id: 1, nombre: 'claseCantoIndividual', precio: 15 },
    {id: 2, nombre: 'claseCantoMensual', precio: 50},
    {id: 3, nombre: 'claseCantoTrimestral', precio: 130},
    {id: 4, nombre: 'claseTapIndividual', precio: 15 },
    {id: 5, nombre: 'claseTapMensual', precio: 50},
    {id: 6, nombre: 'claseTapTrimestral', precio: 130},
    {id: 7, nombre: 'performance1', precio: 60},
    {id: 8, nombre: 'performance2', precio: 100},
]

class itemCarrito {
    constructor (cantidad, item) {

        this.cantidad = cantidad
        this.item = item
    }
}
const carrito = []

for (const servicio of servicios) {

    let count = 1

    $('#listadoServicios').append (
        `
        <div>
        ${servicio.nombre} <span> ${servicio.precio} </span>
        </div>

        Cantidad:

        <select id="select-count-${servicio.id}">

            <option value = "1"> 1 </option>
            <option value = "2"> 2 </option>
            <option value = "3"> 3 </option>
            <option value = "4"> 4 </option>

        </select>

        <button id= "btn-add-${servicio.id}">Agregar </button>

        `
    )

    //Select cantidad de cada producto

    // $(`#select-count-${servicio.id}`).change (() => {
    //     console.log (`select de ${JSON.stringify(servicio)})
    
    // })

    // $(`#select-count-${servicio.id}`).change (( event ) => {
    //         console.log (event.target.value)
    //         $(`#btn-add-${servicio.id}`).trigger ('click')
    // })

    $(`#select-count-${servicio.id}`).change (( event ) => {
        count = +event.target.value
    })

    
    //Boton agregar
    // $(`#btn-add-${servicio.id}`).click (() => {
    //     console.log (servicio)
    // })

    //Boton agregar Carrito

    // $(`#btn-add-${servicio.id}`).click (() => {
    //         let itemCarrito = {}

    //         itemCarrito.cantidad = count

    //         itemCarrito.servicio = servicio

    //         console.log (itemCarrito)
    //     })

    $(`#btn-add-${servicio.id}`).click (() => {
        
        const ItemCarrito = new itemCarrito (count, servicio)
    
                // console.log (ItemCarrito)
                addItemCarrito (ItemCarrito)
            })

    
    const addItemCarrito = (item) => {
        const itemCarrito = carrito.find (el => el.item  === item.servicio)
        console.log (ItemCarrito)
        carrito.push (item)
        // renderCarrito ()
        // console.log (carrito)
    }

    const renderCarrito = () => {

        for (let el of carrito){

            $('#contenedor-carrito').append (
                `
                
                <div> ${el.item.nombre} - Cantidad: ${el.cantidad}

                </div>
                `

            )
        }
    }

}





// let div = document.getElementById ("canto");

// console.log (div.innerHTML);


// class Servicio {
//     constructor (nombre, duracion, precio) {
//         this.nombre = nombre;
//         this.duracion = duracion;
//         this.precio = parseFloat (precio);
//     }

//     sumarTarifaServicio () {
//         return this.precio * 1.10;
//     }
// }



// var arrayServicios = [];


// do {
//     var tipo = prompt ("¿Qué servicios deseas ingresar para contratar? Si no deseas ingresar servicios, escribe ninguno");
//     if (tipo === "ninguno" || tipo === "NINGUNO" || tipo === "Ninguno") {
//         break;
//     } else {
//         nombreServicio = tipo;
//         var duracionServicio = prompt ("Ingrese la duración del servicio");
//         var precioServicio = prompt ("Ingrese el precio del servicio");
//         arrayServicios.push (new Servicio (nombreServicio, duracionServicio, precioServicio));
//     }
// }
// while (tipo != "ninguno" || tipo != "NINGUNO" || tipo != "Ninguno")

// console.log (arrayServicios);

// for (var servicio of arrayServicios) {
//     let divServicio = document.createElement ("div");

//     divServicio.innerHTML = `<h3> Tipo: ${servicio.nombre} </h3>
//                             <h3> Duracion: ${servicio.duracion} </h3>
//                             <h3> Precio: ${servicio.precio} </h3>
//                             <h3> Precio con Tarifa de Servicio: ${servicio.sumarTarifaServicio ()}</h3> `;
    
//     document.body.appendChild(divServicio)


    // document.write ("<li><h3>Duracion: " + servicio.duracion + "</h3></li>");
    // document.write ("<li><h3>Precio: " + servicio.precio + "</h3></li>");
    // document.write ("<li><h3>Precio con Tarifa de Servicio: " + servicio.sumarTarifaServicio () + "</h3></li></ul><br>");
    // console.log (servicio.nombre);
    // console.log (servicio.duracion);
    // console.log (servicio.precio);
    // console.log (servicio.sumarTarifaServicio());

// }


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


/*Servicios*/

// class Servicio {
//     constructor (nombre, duracion, precio) {
//         this.nombre = nombre;
//         this.duracion = duracion;
//         this.precio = parseFloat (precio);
//     }

//     sumarTarifaServicio () {
//         return this.precio * 1.10;
//     }
// }


//Evento

// let botonCanto = document.getElementById ("btnCanto");

// // let botonTap = document.getElementById ("btnTap");

// // let botonPerfo = document.getElementById ("btnPerformance");

// botonCanto.onclick = reservarServicio;
// // botonCanto.addEventListener('click', reservarServicio);

// // botonTap.addEventListener ('click', reservarServicio);

// // botonPerfo.onclick = reservarServicio;

// function reservarServicio () {
//     console.log ("Reservaste este servicio");
// }


// $(function () {
//     var $cajas = $("input:text:not (#resultado)");
//     var $resultado = $("#resultado");

//     $("input:button").click(function (){
//         var sumaTotal = 0;
//         $cajas.each (function () {
//             sumaTotal += parseInt ($(this).val ());
//         });
//         $resultado.val (sumaTotal);
//     })
// });






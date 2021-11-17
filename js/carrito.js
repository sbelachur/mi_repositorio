
/*Servicios*/


const contenedorCarrito = getElementsByClassName ('contenedorCarrito');

const servicio = getElementsByClassName ('servicio');

const agregarCarrito = getElementsByClassName ('agregarCarrito');

const totalCarrito = getElementById ('totalCarrito');

const reservar = getElementById ('reservar');

const tituloServicio = getElementsByClassName ('tituloServicio');

const precioServicio = getElementsByClassName ('precioServicio');


class Servicios {

    constructor(item){
        this.id = item.id;
        this.nombre = item.nombre;
        this.precio = item.precio;
    }

};

const servicios = [
    {id: 1, nombre: 'claseCantoIndividual', precio: 15 },
    {id: 2, nombre: 'claseCantoMensual', precio: 50},
    {id: 3, nombre: 'claseCantoTrimestral', precio: 130},
    {id: 4, nombre: 'claseTapIndividual', precio: 15 },
    {id: 5, nombre: 'claseTapMensual', precio: 50},
    {id: 6, nombre: 'claseTapTrimestral', precio: 130},
    {id: 7, nombre: 'performance1', precio: 60},
    {id: 8, nombre: 'performance2', precio: 100},
];


agregarCarrito.addEventListener ('click', evento => {
    console.log (servicio);
})


for (const servicio of servicios) {

        let count = 1

        getElementsByClassName ('servicios').prepend (
            `
            <div>
            ${servicio.nombre} <span> ${servicio.precio} </span>
            </div>
            `

        )
    }

    



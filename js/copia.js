
/*Servicios*/


//ARRAY SERVICIOS JSON

document.addEventListener ('DOMContentLoaded', () => {
    fetchDatos ();
})

const fetchDatos = async () => {
    try {
        const respuesta = await fetch ('data.json');
        const datos = await respuesta.json ();
        reflejarServicios (datos)
    } catch (error) {
        console.log (error)
    }
}

const contenedorCarrito = document.getElementsByClassName ('contenedorCarrito');

const templateServicio = document.getElementById ('templateServicio').content;

const servicio = document.getElementsByClassName ('servicio').content;

const agregarCarrito = document.getElementsByClassName ('agregarCarrito');

const totalCarrito = document.getElementById ('totalCarrito');

const reservar = document.getElementById ('reservar');

const tituloServicio = document.getElementsByClassName ('tituloServicio');

const precioServicio = document.getElementsByClassName ('precioServicio');


const reflejarServicios =  datos => {
    datos.array.forEach(servicio => {

        document.getElementsByClassName ('tituloServicio').textContent = servicio.tituloServicio



        
    });
}


class Servicios {

    constructor(item){
        this.id = item.id;
        this.nombre = item.nombre;
        this.precio = item.precio;
    }

};

//ARRAY SERVICIOS

// const servicios = [
//     {id: 1, nombre: 'claseCantoIndividual', precio: 15 },
//     {id: 2, nombre: 'claseCantoMensual', precio: 50},
//     {id: 3, nombre: 'claseCantoTrimestral', precio: 130},
//     {id: 4, nombre: 'claseTapIndividual', precio: 15 },
//     {id: 5, nombre: 'claseTapMensual', precio: 50},
//     {id: 6, nombre: 'claseTapTrimestral', precio: 130},
//     {id: 7, nombre: 'performance1', precio: 60},
//     {id: 8, nombre: 'performance2', precio: 100},
// ];


agregarCarrito.addEventListener ('click',servicioAgregado);

function servicioAgregado () {

}


for (const servicio of servicios) {

        let count = 1

        const reservas = document.getElementsById ('totalCarrito');

        const divServicios = document.createElement ('p');

        divServicios.textContent = ""
    }

    




/*Servicios*/


// const contenedorServicios = document.getElementByClassName ("contenedorServicios");
// const contenedorServiciosCarrito = document.getElementById ("contendorServiciosCarrito");

const contenedorServicios = document.querySelector (".contenedorServicios");
const contenedorServiciosCarrito = document.querySelector (".contenedorServiciosCarrito");

comprar ();

function comprar () {
    contenedorServicios.addEventListener("click", reservarServicio);
    document.addEventListener("DOMContentLoaded", leerLocalStorage);
}
 
function reservarServicio (e) {

    if (e.target.classList.contains ("agregarCarrito")) {
        const servicio = document.querySelector(".servicio");
        datosServicio (servicio);
    }
}

function datosServicio () {
    const infoServicio = {
        titulo: servicio.querySelector('.tituloServicio').textContent,
        precio: servicio.querySelector('.precioServicio').textContent,
    }

    añadirCarrito (infoServicio);
}

function añadirCarrito (servicio) {
    const nuevoServicio = document.createElement ('p');
    nuevoServicio.innerHTML = `

    <p> ${titulo.servicio} </p>
    <p> ${precio.servicio} </p>
    `;

    contenedorServiciosCarrito.appendChild (nuevoServicio);
    servicioLocalStorage (servicio);

}

function servicioLocalStorage (servicio) {

    let servicios;
    servicios = obtenerServicioLocalStorage ();
    servicios.push (servicio);
    localStorage.setItem('servicios', JSON.stringify(servicios));

}


function obtenerPlatillosLocalStorage() {
    let serviciosLocalStorage;

    if(localStorage.getItem('servicios') === null) {
        servicioLocalStorage = [];
    }else {
        servicioLocalStorage = JSON.parse(localStorage.getItem('servicios'));
    }
    return servicioLocalStorage;
}

function leerLocalStorage() {
    
   

    servicioLocalStorage = obtenerPlatillosLocalStorage();

    servicioLocalStorage.forEach(function(servicio){
        const nuevoServicio = document.createElement('p');
        nuevoServicio.innerHTML = `
            <p> ${servicio.titulo} </p>
            <p> ${servicio.precio} </p>
        `;
        contenedorServiciosCarrito.appendChild(nuevoServicio);
    });
}
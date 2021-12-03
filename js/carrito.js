
/*Servicios*/


// const contenedorServicios = document.getElementByClassName ("contenedorServicios");
// const contenedorServiciosCarrito = document.getElementById ("contendorServiciosCarrito");

const totalCarrito = document.querySelector('.totalCarrito');
const contenedorServicios = document.querySelector (".contenedorServicios");
const contenedorServiciosCarrito = document.querySelector ("#contenedorServiciosCarrito");
const vaciar = document.querySelector('#vaciar')


comprar ();

function comprar () {
    contenedorServicios.addEventListener("click", reservarServicio);
    vaciar.addEventListener("click", vaciarCarrito);
    document.addEventListener("DOMContentLoaded", leerLocalStorage);
}
 
function reservarServicio (e) {
    e.preventDefault();
    if (e.target.classList.contains ('agregarCarrito')) {
        const servicio = e.target.parentElement;
        datosServicio (servicio);
    }
}

function datosServicio (servicio) {
    const infoServicio = {
        titulo: servicio.querySelector('.tituloServicio').textContent,
        precio: servicio.querySelector('.precioServicio').textContent,
    }

    añadirCarrito (infoServicio);
}

function añadirCarrito (servicio) {
    const nuevoServicio = document.createElement ('div');
    nuevoServicio.innerHTML = `

    <p class="estilo"> ${servicio.titulo} = ${servicio.precio}</p>
    `;

    contenedorServiciosCarrito.appendChild(nuevoServicio);
    servicioLocalStorage (servicio);

}

function vaciarCarrito(){
    while(contenedorServiciosCarrito.firstChild){
        contenedorServiciosCarrito.removeChild(contenedorServiciosCarrito.firstChild);
    }
    vaciarLocalStorage ();

    return false;
}

function vaciarLocalStorage() {
    localStorage.clear();
}

function servicioLocalStorage (servicio) {

    let servicios;
    servicios = obtenerServiciosLocalStorage ();
    servicios.push (servicio);
    localStorage.setItem('servicios', JSON.stringify(servicios));

}


function obtenerServiciosLocalStorage() {
    let serviciosLocalStorage;

    if(localStorage.getItem('servicios') === null) {
        serviciosLocalStorage = [];
    }else {
        serviciosLocalStorage = JSON.parse(localStorage.getItem('servicios'));
    }
    return serviciosLocalStorage;
}

function leerLocalStorage() {
    let serviciosLocalStorage;

    serviciosLocalStorage = obtenerServiciosLocalStorage();

    serviciosLocalStorage.forEach(function(servicio){
        const nuevoServicio = document.createElement('div');
        nuevoServicio.innerHTML = `
            <p> ${servicio.titulo} </p>
            <p> ${servicio.precio} </p>
        `;
        contenedorServiciosCarrito.appendChild(nuevoServicio);
    });
}


let finalizar = document.getElementById("reservar"); 

finalizar.addEventListener('click' , () => {
    alert(
        'Has reservado exitosamente'
      );

      vaciarCarrito();
})


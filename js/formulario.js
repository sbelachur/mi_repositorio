
// let nombre = document.getElementById('nombre').value;
// let mail = document.getElementById('mail').value;
// let telefono = document.getElementById ('telefono').value;
// let texto = document.getElementById ('consulta').value;


let nombre = $('#nombre').value;
let mail = $('#mail').value;
let telefono = $('#telefono').value;
let texto = $('#consulta').value;


$(document ).ready(function() {
    $("#formulario").on('submit', validarFormulario); 
  });
  
  function validarFormulario(e) {
    e.preventDefault();
    
    if(nombre.length == 0) {
        alert('El nombre no puede estar vacío');
        return false;
      
    } else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
        alert ('El correo electrónico no es válido')
        return false;
    
    } else if (telefono.length < 10) {
        alert ('El teléfono no es válido');
        return false;
    } 

    
    this.submit();
  }

  $('h2').prepend ('<h2 id="rellenar"> Antes de enviar el formulario rellena todos los campos  </h2>');

  $('#rellenar').slideDown(4000)
  .delay (2000)
  .fadeOut(4000);
  

const enlace = "https://jsonplaceholder.typicode.com/posts"

const datosForm = {nombre: "Pepe", email: "pepe@gmail.com", telefono: "643917909", consulta: "Hola"}



$(".botonFormulario").click (() => {

    $.post (enlace, datosForm, (response, status) => {

        if (status === "success") {
            $("body").append (`<div>
            Formulario enviado </div>`);
        }
    });
});

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
        console.log('Escribe tu nombre');
        return false;
      
    } else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
        return false;
    
    } else if (telefono.length < 10) {
        console.log ('El teléfono no es válido');
        return false;
    } 

    
    this.submit();
  }

  $('h2').prepend ('<h2 id="rellenar"> Completa todos los campos del formulario </h3>');

  $('#rellenar').css("background-color", "white")
  .slideDown(4000)
  .delay (2000)
  .fadeOut(4000);
  

  
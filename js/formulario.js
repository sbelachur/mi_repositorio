
let nombre = document.getElementById('nombre').value;
let mail = document.getElementById('mail').value;
let telefono = document.getElementById ('telefono').value;
let texto = document.getElementById ('consulta').value;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
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
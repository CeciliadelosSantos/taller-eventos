document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('container');
    let button= document.getElementById ('saludarBoton');
   
    container.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        alert('Hola!');
    });
});
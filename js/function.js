document.addEventListener('DOMContentLoaded', function() {
    let enlaces = document.querySelectorAll('.enlace-alerta');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir la acción por defecto del enlace
            alert('Estás a punto de dirigirte a otro sitio web.');
            window.open(this.href, '_blank'); // Abrir el enlace en una nueva pestaña
        });
    });
});

//alert(`Te estas redireccionando a otra pagina web`)
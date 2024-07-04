

function newsletter(){

    if (confirm('Podes recibir contenido preferencial ¿Quieres suscribirte a nuestro Newsletter?')){
        let nombre = prompt('Por favor, ingresa tu nombre:');
        if (nombre === null) return;

        let apellido = prompt('Por favor, ingresa tu apellido:');
        if (apellido === null) return;
    
        let gmail = prompt('Por favor, ingresa tu Gmail:');
        if (gmail === null) return;


    }
}


window.addEventListener('load', function() {
    let formulario = document.getElementById('registro');
    let inputNombre = document.querySelector('#nombre');
    let inputEmail = document.querySelector('#email');
    let inputMensaje = document.querySelector('#mensaje');
    let errorNombre = document.querySelector('#errorNombre');
    let errorEmail = document.querySelector('#errorEmail');
    let errorMensaje = document.querySelector('#errorMensaje');
    let respuesta = document.querySelector('.respuesta');


    

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario para manejarlo manualmente

        let dbEncontranos = [];
        let jsonStringyy = localStorage.getItem('contactos');
        try {
            dbEncontranos = JSON.parse(jsonStringyy) || [];
        } catch (e) {
            console.error("Error parsing JSON:", e);
        }

        let erroresNombre = [];
        let erroresEmail = [];
        let erroresMensaje = [];

        // Validación del nombre
        if (inputNombre.value === '') {
            erroresNombre.push('El nombre es obligatorio.');
        } else if (inputNombre.value.length < 3) {
            erroresNombre.push('El campo NOMBRE debe tener al menos 3 caracteres.');
        } else {
            errorNombre.innerHTML = ''; // Limpiar errores anteriores
        }

        // Validación del email
        if (inputEmail.value === '') {
            erroresEmail.push('El Email es obligatorio.');
        } else if (inputEmail.value.length < 10) {
            erroresEmail.push('El campo EMAIL debe tener al menos 10 caracteres.');
        } else if (!inputEmail.value.includes('@')) {
            erroresEmail.push('El campo EMAIL debe contener un @.');
        } else {
            errorEmail.innerHTML = ''; // Limpiar errores anteriores
        }

        // Validación del mensaje
        if (inputMensaje.value === '') {
            erroresMensaje.push('Aún no escribiste el mensaje');
        } else if (inputMensaje.value.length < 50) {
            erroresMensaje.push('El campo Mensaje debe tener al menos 50 caracteres.');
        } else {
            errorMensaje.innerHTML = ''; // Limpiar errores anteriores
        }

        // Mostrar errores si los hay
        if (erroresNombre.length > 0) {
            errorNombre.innerHTML = ''; // Limpiar errores anteriores
            for (let i = 0; i < erroresNombre.length; i++) {
                errorNombre.innerHTML += `<li>${erroresNombre[i]}</li>`;
            }
        }

        if (erroresEmail.length > 0) {
            errorEmail.innerHTML = ''; // Limpiar errores anteriores
            for (let i = 0; i < erroresEmail.length; i++) {
                errorEmail.innerHTML += `<li>${erroresEmail[i]}</li>`;
            }
        }

        if (erroresMensaje.length > 0) {
            errorMensaje.innerHTML = ''; // Limpiar errores anteriores
            for (let i = 0; i < erroresMensaje.length; i++) {
                errorMensaje.innerHTML += `<li>${erroresMensaje[i]}</li>`;
            }
        }

        // Si no hay errores, guardar datos
        if (erroresNombre.length === 0 && erroresEmail.length === 0 && erroresMensaje.length === 0) {
            console.log("Nombre:", inputNombre.value);
            console.log("Email:", inputEmail.value);
            console.log("Mensaje:", inputMensaje.value);

            const formularioPorGuardar = {
                nombre: inputNombre.value,
                email: inputEmail.value,
                mensaje: inputMensaje.value
            };

            dbEncontranos.push(formularioPorGuardar);
            localStorage.setItem('contactos', JSON.stringify(dbEncontranos));

            let saludo = `${inputNombre.value}, gracias por contactarte. Pronto recibirás una respuesta.`;
            respuesta.innerHTML = saludo;

            // Limpiar campos del formulario
            formulario.reset();
        }
    });


    let botonEnviar = document.getElementById('boton-enviar');
    let botonCancelar = document.getElementById('boton-cancelar');

    botonCancelar.addEventListener('click', function() {
        console.log('Botón cancelar clickeado');
        formulario.reset();
        errorNombre.innerHTML = '';
        errorEmail.innerHTML = '';
        errorMensaje.innerHTML = '';
        
        let cancelo = `Cancelaste el envío de mensaje.`;
        respuesta.innerHTML = cancelo;
        console.log('Mensaje de cancelación mostrado');
        
    });

    // Estilos para los botones
    botonEnviar.addEventListener('mouseover', () => {
        botonEnviar.style.backgroundColor = '#fd7023';
        botonEnviar.style.color = 'white';
    });

    botonEnviar.addEventListener('mouseout', () => {
        botonEnviar.style.backgroundColor = ''; // Vuelve al color original
        botonEnviar.style.color = '';           // Vuelve al color original
    });

    botonCancelar.addEventListener('mouseover', () => {
        botonCancelar.style.backgroundColor = '#fd7023';
        botonCancelar.style.color = 'white';
    });

    botonCancelar.addEventListener('mouseout', () => {
        botonCancelar.style.backgroundColor = '';
        botonCancelar.style.color = '';
    });
});


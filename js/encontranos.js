
window.addEventListener('load', function() {
    let formulario = document.getElementById('registro');
    let inputNombre = document.querySelector('#nombre');
    let inputEmail = document.querySelector('#email');
    let inputMensaje = document.querySelector('#mensaje');

    
    formulario.addEventListener('submit', function(event) {
      console.log(123)
        let dbEncontranos = [];
        let jsonStringyy = localStorage.getItem('contactos');
        try {
            dbEncontranos = JSON.parse(jsonStringyy) || [];
            console.log(dbEncontranos);
        } catch (e) {
            console.error("Error parsing JSON:", e);
        }

        let erroresNombre = [];
        let erroresEmail = [];
        let erroresMensaje = [];

        let errorNombre = document.querySelector('#errorNombre');
        let errorEmail = document.querySelector('#errorEmail');
        let errorMensaje = document.querySelector('#errorMensaje');

        // Validación del nombre
        if (inputNombre.value === '') {
            erroresNombre.push('El nombre es obligatorio.');
        } else if (inputNombre.value.length < 3) {
            erroresNombre.push('El campo NOMBRE debe tener al menos 3 caracteres.');
        } else {
            document.querySelector('#errorNombre').innerHTML = ''; // Limpiar anterior
        }

        if (erroresNombre.length > 0) {
            event.preventDefault(); 
            errorNombre.innerHTML = ''; // Limpiar errores anteriores
            for (let i = 0; i < erroresNombre.length; i++) {
                errorNombre.innerHTML += `<li>${erroresNombre[i]}</li>`;
            }
        }

        // Validación del email
        if (inputEmail.value === '') {
            erroresEmail.push('El Email es obligatorio.');
        } else if (inputEmail.value.length < 10) {
            erroresEmail.push('El campo EMAIL debe tener al menos 10 caracteres.');
        } else if (!inputEmail.value.includes('@')) {
            erroresEmail.push('El campo EMAIL debe contener un @.');
        } else {
            document.querySelector('#errorEmail').innerHTML = '';
        }

        if (erroresEmail.length > 0) {
            event.preventDefault();
            errorEmail.innerHTML = ''; 
            for (let i = 0; i < erroresEmail.length; i++) {
                errorEmail.innerHTML += `<li>${erroresEmail[i]}</li>`;
            }
        }

        // Validación del mensaje
        if (inputMensaje.value === '') {
            erroresMensaje.push('Aún no escribiste el mensaje');
        } else if (inputMensaje.value.length < 50) {
            erroresMensaje.push('El campo Mensaje debe tener al menos 50 caracteres.');
        } else {
            document.querySelector('#errorMensaje').innerHTML = '';
        }

        if (erroresMensaje.length > 0) {
            event.preventDefault();
            errorMensaje.innerHTML = ''; 
            for (let i = 0; i < erroresMensaje.length; i++) {
                errorMensaje.innerHTML += `<li>${erroresMensaje[i]}</li>`;
            }
        }

        // Si no hay errores
        if (erroresNombre.length === 0 && erroresEmail.length === 0 && erroresMensaje.length === 0) {
            event.preventDefault();
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

            let respuesta = document.querySelector(".respuesta");
            respuesta.innerHTML = saludo;
        
            console.log("Saludo mostrado:", saludo);

            // Limpiar campos del formulario
            formulario.reset();

            setTimeout(function() {
                respuesta.innerHTML = '';
            }, 15000);

        }
    });

    let botonEnviar = document.getElementById('boton-enviar');
    let botonCancelar = document.getElementById('boton-cancelar');

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

    botonCancelar.addEventListener('click', function() {


        console.log('Botón cancelar clickeado');
        formulario.reset(); // Limpiar campos del formulario
        errorNombre.innerHTML = '';
        errorEmail.innerHTML = '';
        errorMensaje.innerHTML = '';
        let respuesta = document.querySelector('.respuesta');
        respuesta.innerHTML = 'Cancelaste el envío de mensaje.';
        console.log('Formulario y mensajes de error limpiados');
         

        setTimeout(function() {
            respuesta.innerHTML = '';
        }, 3000); 
    });

});

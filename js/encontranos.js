function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('mail').value;
    const mensaje = document.getElementById('mensaje').value;
    let errores = '';

    if (nombre === '') {
        errores += 'El nombre es obligatorio.\n';

    }

    if (email === '') {
        errores += 'El correo electrónico es obligatorio.\n';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errores += 'El correo electrónico no es válido.\n';
    }

    if (mensaje === '') {
        errores += 'El mensaje es obligatorio. ';
    }

    if (errores) {
        console.log("error")
        alert(errores);
        return false;
    }

    // Crear un objeto con los datos del formulario
    const datosFormulario = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Convertir el objeto a una cadena JSON
    const datosJSON = JSON.stringify(datosFormulario);

    // Mostrar la cadena JSON en una alerta 
    alert('Datos del formulario en formato JSON:\n' + datosJSON);

    // Aca se puede agregar código para enviar los datos a un servidor usando AJAX o fetch API

    return true;
}

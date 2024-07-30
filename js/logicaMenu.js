window.addEventListener('load', function(){
    const buttonMenu = document.querySelector('#btnMenu');
    const menuDeNavegacion = document.querySelector('#menuDeNavegacion');

    buttonMenu.addEventListener('click', function(e){
        // console.log(menuDeNavegacion.className)

        if(menuDeNavegacion.className === 'noMostrarMenu'){
            menuDeNavegacion.className = 'mostrarMenu'
        } else {
            menuDeNavegacion.className = 'noMostrarMenu'
        }
    })
})
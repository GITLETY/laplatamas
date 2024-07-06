
function newsletter(){
     if (confirm('Podes recibir contenido preferencial ¿Quieres suscribirte a nuestro Newsletter?')){
       
        let nombre
        let apellido
        let email

        do { 
            nombre = prompt('Por favor, ingresa tu nombre:');
            console.log(nombre);
            if (nombre === ''){
            alert("Debes ingresar tu nombre para continuar");
            }
        }while(nombre === '')

     if(nombre !== null){
        
        do { 
            apellido = prompt('Por favor, ingresa tu apellido:');
            if (apellido === ''){
            alert("Debes ingresar tu apellido para continuar.");
            }
        }while(apellido === '')
    

      if(apellido !== null){ 
    
        do { email = prompt('Por favor, ingresa tu mail:');
        if (email === '') {
            alert("Debes ingresar tu email para continuar");
            }
        }while(email === '')

      if(email !== null){

        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        console.log("Email:", email);

        let saludo = `Bienvenido ${nombre} ${apellido}a nuestra comunidad. Pronto recibirás un mail con contenido exclusivo.`;
        alert(saludo)

        console.log("Saludo mostrado:", saludo);

       } } }
   if(nombre === null || apellido === null || email === null){ alert( "No se ha podido suscribir"); }
 } else {
        console.log("Usuario canceló la suscripción al newsletter."); 
      }
}


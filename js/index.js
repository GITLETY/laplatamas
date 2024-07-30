
function newsletter(){
    

    let dbSuscripciones = []
let jsonString = localStorage.getItem('suscriptores');
try {
     dbSuscripciones = JSON.parse(jsonString);
    console.log(dbSuscripciones);
} catch (e) {
    console.error("Error parsing JSON:", e);
}

     if (confirm('Podes recibir contenido preferencial ¿Quieres suscribirte a nuestro Newsletter?')){
       
        let nombreIngresado
        let apellidoIngresado
        let emailIngresado

       

        do { 
            nombreIngresado = prompt('Por favor, ingresa tu nombre:');
            if (nombreIngresado === ''){
                alert("Debes ingresar tu nombre para continuar");
            }else if (nombreIngresado.length < 3) {
                alert('El campo NOMBRE debe tener al menos 3 caracteres.');
                nombreIngresado ='';
            }
        }while(nombreIngresado === '' || nombreIngresado.length < 3)


     if(nombreIngresado !== null){
        
        do { 
            apellidoIngresado = prompt('Por favor, ingresa tu apellido:');
            if (apellidoIngresado === ''){
                alert("Debes ingresar tu apellido para continuar.");
            }else if (apellidoIngresado.length < 3) {
                alert('El campo APELLIDO debe tener al menos 3 caracteres.');
                apellidoIngresado ='';
            }
            
        }while(apellidoIngresado === ''|| apellidoIngresado.length < 3)
    

      if(apellidoIngresado !== null){ 
    
        do { emailIngresado = prompt('Por favor, ingresa tu mail:');
        if (emailIngresado === '') {
            alert("Debes ingresar tu email para continuar");
            } else if(emailIngresado.length < 10) {
                alert('El campo EMAIL debe tener al menos 10 caracteres.');
                emailIngresado="";
            } else if(emailIngresado.includes('@')== false) {
                alert ('El campo EMAIL debe contener un @.');
                emailIngresado="";
            }
        }while(emailIngresado === '' || emailIngresado.length < 10 || emailIngresado.includes('@')== false)

      if(emailIngresado != null){

        console.log("Nombre:", nombreIngresado);
        console.log("Apellido:", apellidoIngresado);
        console.log("Email:", emailIngresado);

        let nombreDelSuscriptor;
        let suscriptorEncontrado = false;
        console.log(dbSuscripciones.length);
        for(let i=0; i< dbSuscripciones.length; i++){
        if(dbSuscripciones[i].email === emailIngresado){
            
                nombreDelSuscriptor = dbSuscripciones[i].nombre;
                suscriptorEncontrado = true; 
                let yaSucripto= `${nombreDelSuscriptor} usted ya está sucript@.`;
                let recordatorio= document.querySelector(".bienvenida");
                recordatorio.innerHTML= yaSucripto;
               
            } 
        }
        
        if (suscriptorEncontrado !== true){
            const suscriptorPorGuardar = {
                 nombre : nombreIngresado,
                 apellido : apellidoIngresado,
                 email : emailIngresado
                }

             dbSuscripciones.push(suscriptorPorGuardar); 
            
         
            nombreDelSuscriptor = [nombreIngresado + " " + apellidoIngresado];

            localStorage.setItem('suscriptores', JSON.stringify(dbSuscripciones))

          /*  localStorage.setItem('suscriptores', [nombreDelSuscriptor +" " + emailIngresado])
            localStorage.setItem( 'datosDelSuscriptor', JSON.stringify(suscriptorPorGuardar))
            si setea se modifica/pisaba el localstorage con el nuevo dato*/

            
            let saludo = `Bienvenid@ ${nombreDelSuscriptor} a nuestra comunidad. Pronto recibirás un mail con contenido exclusivo.`;
            

            let bienvenida = document.querySelector(".bienvenida"); 
            bienvenida.innerHTML = saludo;

            console.log("Saludo mostrado:", bienvenida); 

        }
            
    } } }
    if(nombreIngresado === null || apellidoIngresado === null || emailIngresado === null){ 
        alert( "No se ha podido suscribir"); }
  } else {
         console.log("Usuario canceló la suscripción al newsletter."); 
       }
 }




function newsletter(){
    let dbSuscripciones= [
        {
        "nombre": "Yesica",
        "apellido":"Ochoa",
        "email": "yesicadanielaochoa@gmail.com"
        },
    
        { 
         "nombre": "Laura",
         "apellido": "Rodriguez",
         "email": " lrodriguez@gmail.com"
        },
        
        {           
        "nombre": "Marina",
        "apellido": "lorca",
        "email": " lorcamarina@gmail.com"
        }
    
    ]
    dbSuscripciones = JSON.stringify(dbSuscripciones)
    
    let db = JSON.parse(dbSuscripciones)
    console.log(db)

     if (confirm('Podes recibir contenido preferencial ¿Quieres suscribirte a nuestro Newsletter?')){
       
        let nombreIngresado
        let apellidoIngresado
        let emailIngresado

        do { 
            nombreIngresado = prompt('Por favor, ingresa tu nombre:');
            if (nombreIngresado === ''){
            alert("Debes ingresar tu nombre para continuar");
            }
        }while(nombreIngresado === '')

     if(nombreIngresado !== null){
        
        do { 
            apellidoIngresado = prompt('Por favor, ingresa tu apellido:');
            if (apellidoIngresado === ''){
            alert("Debes ingresar tu apellido para continuar.");
            }
        }while(apellidoIngresado === '')
    

      if(apellidoIngresado !== null){ 
    
        do { emailIngresado = prompt('Por favor, ingresa tu mail:');
        if (emailIngresado === '') {
            alert("Debes ingresar tu email para continuar");
            }
        }while(emailIngresado === '')

      if(emailIngresado != null){

        console.log("Nombre:", nombreIngresado);
        console.log("Apellido:", apellidoIngresado);
        console.log("Email:", emailIngresado);
        
        let nombreDelSuscriptor;
        let suscriptor
        let suscriptorEncontrado = false;
        console.log(db.length);
        for(let i=0; i< db.length; i++){
        if(db[i].email === emailIngresado){
            
                nombreDelSuscriptor = db[i].nombre;
                suscriptorEncontrado = true; 
                alert("Usted ya está suscripto");
            } 
        }
        if (suscriptorEncontrado !== true){
            const suscriptorPorGuardar = {
                 nombre : nombreIngresado,
                 apellido : apellidoIngresado,
                 email : emailIngresado
                }

             db.push(suscriptorPorGuardar);
             suscriptor = suscriptorPorGuardar; 
         
            nombreDelSuscriptor = [nombreIngresado + " " + apellidoIngresado];
            sessionStorage.setItem('suscriptor', [nombreDelSuscriptor +" " + emailIngresado])
            sessionStorage.setItem( 'datosDelSuscriptor', JSON.stringify(suscriptor))

            
            let saludo = `Bienvenido ${nombreDelSuscriptor} a nuestra comunidad. Pronto recibirás un mail con contenido exclusivo.`;
            alert(saludo);

            console.log("Saludo mostrado:", saludo); 

        }
            
    } } }
    if(nombreIngresado === null || apellidoIngresado === null || emailIngresado === null){ 
        alert( "No se ha podido suscribir"); }
  } else {
         console.log("Usuario canceló la suscripción al newsletter."); 
       }
 }


let nombreIngresado = prompt (`ingrese su nombre por favor `);
let emailIngresado  = prompt (`ingrese su correo por favor `);
let mensajeIngrsado = prompt (`dejanos tu mensaje`)
console.log(nombreIngresado,emailIngresado,mensajeIngrsado);
//aca no estoy diciendo que si el mail es vacio lo pida otra vez? 
//porque si lo escribo lo pide de nuevo
let email;
do{
    email = prompt (`el email es obligatorio`);
    } while(email === null)

let nombreDelUsuario;
let Usuario;

let usuarioEncontrado = false;
if(nombreIngresado !=null && emailIngresado !=null ){
              for(let i=0; i< db.lenght ; i++){
                 if(db[i].email === emailIngrasdo){
                      nombreDelUsuario = db[i].nombre;
                      usuarioEncontrado = true;
                      Usuario = {
                        nombre: db[i].nombre,
                        email: db[i].email,
                    } 
                }
            }
            if (usarioEncontrado !== true){
                const usuarioPorGuardar =  {
                  nombre: nombreIngresado,
                  email: emailIngresado,
              }
                  db.push(usuarioPorGuardar);
                  Usuario = usuarioPorGuardar;
      
              nombreDelUsuario = nombreIngresado;
      
              }
              sessionStorage.setItem(`usuario`,nombreDelUsuario )
              sessionStorage.setItem(`datos del usuario`,JSON.stringify(Usuario))
              
              //en este alert no toma el sessionstorage.setItem
              alert (`Bienvenid@ ${nombreDelUsuario} a nuestra pagina`)
          } else{
              alert (`Bienvenid@ invitado a nuestra pagina`)
          }
          console.log(db)
          console.log(JSON.parse(sessionStorage.setItem(`datos del usuario`)))
          console.log(JSON.stringify(db))

//y se me traba toda la pagina hasta que no completas no carga
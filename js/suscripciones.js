
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
];

localStorage.setItem('suscriptores', JSON.stringify(dbSuscripciones));

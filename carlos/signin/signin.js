

let username = document.getElementById('username');
let email = document.getElementById('email');

// let pass = document.getElementbyId('pass');
// let confpass = document.getElementbyId('confpass');



let boton = document.getElementById('boton');


let prueba = document.getElementById('prueba');

const confimacin = () => {

   
    if(username.value != email.value){
        prueba.innerHTML = username.value + " y " + email.value + " NO SON IGUALES";
    } else{ 
       prueba.innerHTML = "SON IGUALES";
    }
    

}


boton.addEventListener('click', confimacin);

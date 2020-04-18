

let username = document.getElementById('username');
let email = document.getElementById('email');

// let pass = document.getElementbyId('pass');
// let confpass = document.getElementbyId('confpass');



let boton = document.getElementById('boton');


let prueba = document.getElementById('prueba');


let correo = [];

const confimacin = () => {

   
        correo.push(email.value);
   
    alert(correo[0]);

}




boton.addEventListener('click', confimacin);

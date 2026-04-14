// funciones
function verificarEntrada() {
    // obtener los valores del input
    let edad = document.getElementById("edadUsuario").value;
    console.log(edad);// agarara el valor de edada y lo guarada en la consola.
    let codigo = document.getElementById("codigoUsuario").value;
    console.log(codigo);
    let fondo = document.body;
    // Convertir el codigo a mayuasculas 
    codigo = codigo.toUpperCase();
    console.log(codigo);
    // Condicionales 
    if (edad >= 18 && edad < 65 && codigo === "GAMER") {
        mensajeFinal.textContent = "eres >18 y tienes codigo de acceso, pudes entrar al arcade y eres acrreedor a fichas";
        fondo.style.backgroundColor = "gold";
        mensajeFinal.style.color = "green";
    }
    
   else if (edad >=18 && edad<65) {
        mensajeFinal.textContent = "tines acceso ilimitado a arcade";
        fondo.style.backgroundColor = "silver";
        mensajeFinal.style.color = "blue";
   }
   
   else if (edad >= 13 && edad < 18 ) {
        mensajeFinal.textContent = "Acceso permitido";
        fondo.style.backgroundColor = "green";
        mensajeFinal.style.color = "white";
    }
     else if (edad >=65 && codigo === "GAMER") {
        mensajeFinal.textContent = "eres >65 y tienes codigo de acceso, pudes entrar al arcade y eres acrreedor a fichas";
        mensajePreferencial.textContent = "eres un cliente preferencial";
        fondo.style.backgroundColor = "salmon";
    }


    else {
        mensajeFinal.textContent = "Bienvenido al arcadae pero no tienes codigo de acceso";
        fondo.style.backgroundColor = "silver";
        mensajeFinal.style.color = "";
    }   
}
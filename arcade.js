// funciones
function verificarEntrada() {
    // obtener los valores del input
    let edad = document.getElementById("edadUsuario").value;
    console.log(edad); // agarara el valor de edada y lo guarada en la consola.
    let codigo = document.getElementById("codigoUsuario").value;
    console.log(codigo);
    let fondo = document.body;

    // IMPORTANTE: Definir las variables que reciben el texto en el HTML
    let mensajeFinal = document.getElementById("mensajeFinal");
    let mensajePreferencial = document.getElementById("mensajePreferencial");

    // Convertir el codigo a mayuasculas 
    codigo = codigo.toUpperCase();
    console.log(codigo);

    // Condicionales 
    if (edad >= 18 && edad < 65 && codigo === "GAMER") {
        mensajeFinal.textContent = "eres >18 y tienes codigo de acceso, pudes entrar al arcade y eres acrreedor a fichas";
        fondo.style.backgroundColor = "gold";
        mensajeFinal.style.color = "green";
    }
    else if (edad >= 18 && edad < 65) {
        mensajeFinal.textContent = "tines acceso ilimitado a arcade";
        fondo.style.backgroundColor = "silver";
        mensajeFinal.style.color = "blue";
    }
    else if (edad >= 13 && edad < 18) {
        mensajeFinal.textContent = "Acceso permitido";
        fondo.style.backgroundColor = "green";
        mensajeFinal.style.color = "white";
    }
    else if (edad >= 65 && codigo === "GAMER") {
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

// Variables globales (Usando tus nombres originales)
let numsecreto = 0;
let intentosRestantes = 0;
let juegoTerminado = false;

// ====================== INICIAR JUEGO ======================
function iniciarJuego() {
    // Obtener el valor de dificultad y convertirlo a número
    let nivel = parseInt(document.getElementById("dificultad").value);
    
    // Referencias a tus IDs originales del HTML
    let zonaJuego = document.getElementById("zonaAdivina");
    let pistas = document.getElementById("pistaJuego");
    let textoIntentos = document.getElementById("intentosRestantesTexto");

    // Si no se elige dificultad, ocultar la zona de juego
    if (nivel === 0) {
        zonaJuego.style.display = "none";
        return;
    }

    // Mostrar el juego y resetear el estado
    zonaJuego.style.display = "block";
    juegoTerminado = false;
    
    // Limpiar el input para un nuevo juego
    document.getElementById("numeroInterno").value = "";

    // Configurar intentos según dificultad (Niveles: 10, 50, 100)
    if (nivel === 10) {
        intentosRestantes = 3;
    } else if (nivel === 50) {
        intentosRestantes = 5;
    } else if (nivel === 100) {
        intentosRestantes = 7;
    }

    // Math.random para generar el número secreto
    numsecreto = Math.floor(Math.random() * nivel) + 1;

    // Consola para debug
    console.log("El numero secreto es: ", numsecreto);

    // Mensajes iniciales en pantalla
    pistas.textContent = "juego iniciado adivina el numero entre 1 al :" + nivel;
    pistas.style.color = "black"; // Reset de color
    textoIntentos.textContent = " IntentosRestantesTexto: " + intentosRestantes;
    
    // Color para los intentos (usando skyblue que sí funciona)
    textoIntentos.style.color = "skyblue";
}

// ====================== ADIVINAR NÚMERO ======================
function adivinaNumero() {
    // Bloquear si el juego ya acabó
    if (juegoTerminado === true) {
        alert("El juego ha terminado, por favor inicia otra vez");
        return;
    }

    // Obtener el número que el usuario ingresó (ID: numeroInterno)
    let input = document.getElementById("numeroInterno");
    let intento = parseInt(input.value);
    
    // Referencias a los textos (IDs: pistaJuego y intentosRestantesTexto)
    let pistas = document.getElementById("pistaJuego");
    let textoIntentos = document.getElementById("intentosRestantesTexto");

    // Validar que no esté vacío
    if (isNaN(intento)) {
        pistas.textContent = "¡Ingresa un número primero!";
        return;
    }

    // Restar un intento
    intentosRestantes--;

    // Lógica de comparación
    if (intento === numsecreto) {
        // Victoria
        pistas.textContent = "Felicidades, has adivinado el numero secreto!";
        pistas.style.color = "green";
        juegoTerminado = true;
    } 
    else if (intentosRestantes === 0) {
        // Derrota
        pistas.textContent = "Game Over. El numero secreto era: " + numsecreto;
        pistas.style.color = "red";
        juegoTerminado = true;
    } 
    else {
        // Pistas de Mayor o Menor (Aquí acoplamos el mensaje para que se imprima)
        if (intento < numsecreto) {
            pistas.textContent = "El numero secreto es mayor que " + intento;
        } else {
            pistas.textContent = "El numero secreto es menor que " + intento;
        }
        pistas.style.color = "orange";
    }

    // Actualizar siempre el contador de intentos en el HTML
    textoIntentos.textContent = " IntentosRestantesTexto: " + intentosRestantes;

    // Limpiar input y poner el foco para seguir escribiendo rápido
    input.value = "";
    input.focus();
}
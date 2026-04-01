console.log("Hello,word!");
// tipo de variables
let nombre= "samira"
let edad = 25;
let estudiante = true;
// var variables 
var ciudad="quito"
var pais="Ecuador"
var codigoPstal= 20;
var edad2=20;
var es_empleado= false;
const PI=3.1416;
document.getElementById('nuevo').innerHTML= 'Hola mundo';

// funciono el colorbdel fondo
function cambiarColorFondo(){
    document.body.style.background='lightblue';
}
// funcion para pdr al usr prc y cantidad
function CalcularTotal(){
    let precio = document.getElementById('prescio').value;
    let cantidad= document.getElementById('cantidad').value;
    let total= parseFloat(precio)*parseFloat(cantidad);
    alert("el total a pagar es:" + total);
    alert ("precio con iva:"+ (total* 0.15))
}
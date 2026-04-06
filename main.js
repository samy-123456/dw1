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
    let precio = document.getElementById('precio').value;/
    let cantidad= document.getElementById('cantidad').value;
    let sumaproducto=parseFloat(precio)*parseFloat(cantidad);// total del producto 1
    if(cantidad<10){
      precioTotal1 = sumaproducto;  // se almacena sin desc
  
    } else{
       let descuento=sumaproducto*0.20;
       precioTotal1= sumaproducto-descuento;
    }

    let precio2= document.getElementById('precio2').value;
    let cantidad2= document.getElementById('cantidad2').value;
    let total2= parseFloat(precio2)*parseFloat(cantidad2);

    let precio3= document.getElementById('precio3').value;
    let cantidad3= document.getElementById('cantidad3').value;
    let total3= parseFloat(precio3)*parseFloat(cantidad3);
    
    
    let preciofinal=precioTotal1+precioTotal2+precioTotal3;

    let iva=preciofinal*0.15;

    let PrecioIva= preciofinal + iva;

    alert("el total a pagar es:" + total);
    alert ("precio con iva:"+ (total* 0.15))
}

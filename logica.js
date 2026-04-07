let saldo = 1000;
let saldoActual=0;
console.log("Hola samira");

function depositar(){
     let numDeposito = document.getElementById("cantidad de dinero").value;
     if(numDeposito<=0){
      alert("error ingrese una cantidad valida a depositar:");  

     }else{
        saldoActual=parseFloat(saldo) + parseFloat(numDeposito);
        saldo = saldoActual;
        alert("tu saldo actual es: " + saldo);
     }


    }
    function retirar(){
     let numRetiro = document.getElementById("cantidad de dinero").value;
     if(numRetiro<=0){
      alert("error ingrese una cantidad valida a depositar:");  

     }else{
        saldoActual=saldo-numRetiro;
        saldo = saldoActual;
        alert("tu saldo actual es" + saldo);
     }
    }
        
    function mostrarSaldo(){
alert("su saldo actual es "+ saldo);

}
// SE CRERA UNA FUNCION QUE TRAE LO QUE EL USUSARIOP INGRESA MEDIANTE UN INPUT , SE LO HACE MEDIANTE document.getElementById
//document.getElementById: para traer la informacion del usuario q ingreso en el input .
function mostrarMensaje(){
   let mensajeIngresado = document.getElementById("mensaje ingresado").value
   console.log(mensajeIngresado);
   

   alert("Hols samira:"+mensajeIngresado);
}

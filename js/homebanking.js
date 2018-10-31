//Declaración de variables
var nombreUsuario = "Kristian Escobedo";
var saldoCuenta = 400;
var saldoCuentaAnterior;
var limiteExtraccion= 10000;

var importe;
var servicio;
var validacionRestar;

var cuentaAmiga1= 1234567;
var cuentaAmiga2= 7654321;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
function input(mensaje) {

	do {
		importeString=prompt(mensaje);
		importe = parseInt(importeString);
		saldoCuentaAnterior=saldoCuenta;

//Si el usuario cancela la transaccion, la operacion se ejecuta pero con valor 0, si la transaccion es el cambio de limite de extraccion se mantiene		
		if (importeString==null||importe<0){
			importe=0;
			if (mensaje=="Eliga el nuevo limite de extraccion") {
				importe=limiteExtraccionAntiguo;
			}
		} 
		} while(importeString!=null && isNaN(importe)&&importe<0); 
		return importe;
	}

function sumar(input) {
	saldoCuenta= saldoCuenta + input;
	return saldoCuenta;
}

function restar(input) {
	if (saldoCuenta>=importe) {
	saldoCuenta= saldoCuenta - input;
	validacionRestar = true;
	} else {
		alert("No hay suficiente saldo en su cuenta");
		validacionRestar = false;
	}
	return saldoCuenta;		
}

function cartel(tipo) {
	alert("Has "+tipo+": $"+importe+"\nSaldo Anterior: $"+saldoCuentaAnterior+"\nSaldo Actual: $"+saldoCuenta);
}
//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
	limiteExtraccionAntiguo = limiteExtraccion;
	input("Eliga el nuevo limite de extraccion");
	limiteExtraccion = importe;
	actualizarLimiteEnPantalla();
	if (importe!=limiteExtraccionAntiguo&&isNaN(importe)) {
		alert("Nuevo limite de extraccion: $"+limiteExtraccion);
	}
	
}

function extraerDinero() {
		do {
			alert("Disponible solo billetes de 100 pesos","Ingresar un monto multiplo de 100");
			
			input("Introducir el monto a extraer");  //<----- function
			if (importe>limiteExtraccion) {
				alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion");
			}
			restar(importe);
			} while(importe>limiteExtraccion||importe%100!=0||importe<0||validacionRestar==false);
		
		actualizarSaldoEnPantalla();
		cartel("Extraido");
	}	

function depositarDinero() {
	
	input("Introducir el monto a depositar");
	sumar(importe);
	actualizarSaldoEnPantalla();
	cartel("Depositado");
}

function pagarServicio() {
//VEASE COMO ESTAN DEFINIDAS LOS SERVICIOS SEGUN LOS CASOS PARA QUEDE CONCATENADO DE FORMA PRECISA (IM GENIOUS!)
	do {
		input("Ingrese el numero que corresponda segun el servicio que desee pagar\n1- Agua\n2- Luz\n3- Internet\n4- Telefono");
	} while((importe>4||importe<1)&&importeString!=null);
	
	
	servicio=importe;

	switch (servicio) {
			case 0:
			importe = 0;
			servicio = " 'Ningun Servicio'";
			break;
			case 1:
			importe = 350;
			servicio = "l Agua";
			break;
			case 2:
			importe = 425;
			servicio = " la Luz";
			break;
			case 3:
			importe = 210;
			servicio = " Internet";
			break;
			case 4:
			importe = 570;
			servicio = " Telefonia";
			break;
		}
	
	if(importe>saldoCuenta||0>importe) {
		importe=0;
		alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
		servicio = " 'Ningun Servicio'";
	}

	restar(importe);
	actualizarSaldoEnPantalla();
	cartel("pagado el servicio de"+servicio)
}

function transferirDinero() {

	input("Ingrese el monto que desee transferir");
	restar(importe);
	actualizarSaldoEnPantalla();
	cartel("transferido");
}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
var input	= document.querySelector(".input");
var output = document.querySelector(".output");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

var a = "ai";
var e = "enter";
var i = "imes";
var o = "ober";
var u = "ufat";

function encriptar() {
	var msj = input.value.toLowerCase();
	var msjEncriptado = "";
	for (var j = 0; j < msj.length; j++) {
		switch(msj.charAt(j)){
			case 'á':
			case 'a':
				msjEncriptado += a; break;
			case 'é':
			case 'e':
				msjEncriptado += e; break;
			case 'í':
			case 'i':
				msjEncriptado += i; break;
			case 'ó':
			case 'o':
				msjEncriptado += o; break;
			case 'ú':
			case 'u':
				msjEncriptado += u; break;
			default: 
				msjEncriptado += msj.charAt(j); break;
		}
	}
	output.value = msjEncriptado;
}

function desencriptar(){
	var msj = input.value.toLowerCase();
	var msjDesencriptado = "";
	
	for (var j = 0; j < msj.length; j++) {
		switch(msj.charAt(j)){
			case 'a':
				if (msj.substring(j, j + a.length) == a) {msjDesencriptado += 'a'; j += a.length-1;	break;}
			case 'e':
				if (msj.substring(j, j + e.length) == e) {msjDesencriptado += 'e'; j += e.length-1; break;}
			case 'i':
				if (msj.substring(j, j + i.length) == i) {msjDesencriptado += 'i'; j += i.length-1; break;}
			case 'o':
				if (msj.substring(j, j + o.length) == o) {msjDesencriptado += 'o'; j += o.length-1; break;}
			case 'u':
				if (msj.substring(j, j + u.length) == u) {msjDesencriptado += 'u'; j += u.length-1; break;}
			default:
				msjDesencriptado += msj.charAt(j); break;
		}
	}
	output.value = msjDesencriptado;
}

function copiar(){
	// https://www.delftstack.com/es/howto/javascript/javascript-copy-to-clipboard/
	// Agréguelo al portapapeles usando
	// document.execCommand('copy')
	output.select();

	document.execCommand('copy');
}

function borrar(){
	input.value = "";
	input.focus();
}
var inputPalabra = document.querySelector(".palabra")
var inputResultado = document.querySelector(".resultado")
var buttonEncriptar = document.querySelector(".encriptar")
var buttonDesencriptar = document.querySelector(".desencriptar")
var buttonCopiar = document.querySelector(".copiar")

function encriptar(){
 
var palabra = inputPalabra.value;
var palabraEncriptada = palabra
.replaceAll("e","enter")
.replaceAll("i","imes")
.replaceAll("a","ai")
.replaceAll("o","ober")
.replaceAll("u","ufat");

inputResultado.value = palabraEncriptada;

}

function desencriptar(){
var palabraEncriptada = inputPalabra.value;
var palabra = palabraEncriptada
.replaceAll("enter","e") 
.replaceAll("imes","i")
.replaceAll("ai","a")
.replaceAll("ober","o")
.replaceAll("ufat","u");
inputResultado.value = palabra; 
}

function copiar(){
var palabraEncriptada = inputResultado.value;
navigator.clipboard.writeText(palabraEncriptada);



}

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopiar.onclick = copiar; 


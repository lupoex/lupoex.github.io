window,addEventListener("load",function(){
  // SECCION DE VARIABLES GLOBALES QUE NECESITAMOS EN EL JUEGO
var letra = document.querySelector("button")
var contadorVidas = document.querySelector("h2")
var vidas = 6
var palabra = document.querySelector(".palabra")
var palabras = ["teclado","javascript","digitalhouse","pelele","caballo","consumo","maquina","computadora","misantropia","hechizar","proteccion","envenenar","diagrama","Ventriculo","plegable","supercalifragilisticoespialidoso","esclerosis","olimpico","rinoceronte","necrosis","matutino","triple","tatuaje","millonario","medicos","lealtad","filantropia","isquemia","siembra","granjero","epilepsia","centrar","cartero","corticoides","sollozo","insulina","comico","electroencefalografista","moqueta","hipotiroidismo","barril","equipaje","migaja","transportar","esternocleidomastoideo","division","pijama","Peyorativo","hipotalamo","lenguaje"]


var botones
var mostrarPalabra
var ganaste
var arrayPalabra
// HAY 50 PALABRAS
var palabraRandom = palabras[Math.floor(Math.random()* palabras.length)]
// console.log(palabraRandom)
var coleccionLetrasUsadas = []
// SECCION DE VARIABLES GLOBALES QUE NECESITAMOS EN EL JUEGO

prepararPalabra()
chequearClicks()


// SECCION PROCEDIMIENTOS DEL JUEGO
function prepararPalabra() {
  arrayPalabra = palabraRandom.split("")
  // console.log(arrayPalabra);
    mostrarPalabra= arrayPalabra[0]

  for (var i = 1; i < arrayPalabra.length; i++) {
    // arrayPalabra[i].addEventListener("click", contandoClicks)

    mostrarPalabra += " _"
  }
  palabra.innerText = mostrarPalabra
}// Termino prepararPalabra


function chequearClicks() {
  botones = document.getElementsByClassName("boton")
  // console.log(botones);
  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", chequearLetra)
  }
} //Termino chequearClicks

function chequearLetra() {
  this.removeEventListener("click", chequearLetra)
  var letra = this.innerText
  var acierto = false
  for (var i = 1; i < arrayPalabra.length; i++) {
    if (letra.toLowerCase() == arrayPalabra[i]) {
      // console.log("Esta en la palabra");
      mostrarPalabra = mostrarPalabra.split(" ")
      mostrarPalabra[i] = letra.toLowerCase()
      // console.log(mostrarPalabra);
      mostrarPalabra = mostrarPalabra.join(" ")
      palabra.innerText = mostrarPalabra
      acierto = true
      deshabilitarLetra(letra)
      palabraCompleta()
      this.style.backgroundColor = "green"
      // recargarDisplay(letra.toLowerCase())
    }else if (acierto == false && i+1 == arrayPalabra.length) {
      // console.log(i);
      // console.log(arrayPalabra.length);
      restarVida()
      this.style.backgroundColor = "red"
    }
  }
} //termina chequearLetra

function restarVida() {
  vidas--
  contadorVidas.innerHTML = "VIDAS: " + vidas
  if (vidas == 0) {
    for (var i = 0; i < botones.length; i++) {
      botones[i].removeEventListener("click", chequearLetra)
    }
    var perdiste= document.querySelector(".perdiste")
    perdiste.style.display = "flex";
  }
}


function palabraCompleta() {
   var palabraUsuario = mostrarPalabra.split(" ")
  // console.log(palabraUsuario.join("") == palabraRandom);
  if (palabraUsuario.join("") == palabraRandom) {
    ganaste = document.querySelector(".ganaste");
    ganaste.style.display = "flex";
  }




  // if (mostrarPalabra == palabraRandom) {
  //   console.log("Ganaste");
  // }
}


function deshabilitarLetra(letra) {


}

function recargarDisplay(letra){

}

// SECCION DE FUNCIONES DE PROCEDIMIENTOS
// POR EJ FUNCION PARA DESHABILITAR LETRAS

// SECCION DE FUNCIONES DE PROCEDIMIENTOS
})
alert("LA PRIMERA LETRA PUEDE ESTAR REPETIDA PERO NO VA A APARECER")

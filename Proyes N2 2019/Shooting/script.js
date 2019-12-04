window.addEventListener("load", function() {
// ESPERA A QUE SE CARGUE LA PAGINA PARA EMPEZAR EL JS
var click = 0;
var contenedorClicks = document.querySelector("#click")

var clickmenos = 0;
var contenedorClickmenos = document.querySelector("#clickmenos")




var rojo = document.querySelector(".rojo")
rojo.addEventListener("click", mover)
rojo.addEventListener("click", sumaClick)

var tablero = document.querySelector(".tablero")
tablero.addEventListener("click", sumaClick)


function mover() {
  var randomLeft = Math.floor(Math.random() * 1200 )
  var randomTop = Math.floor(Math.random() * 410 )
  rojo.style.top = randomTop.toString() + "px"
  rojo.style.left = randomLeft.toString() + "px"
}

function sumaClick(event) {
  console.log(this);
  if (this == tablero) {
    clickmenos++;
    contenedorClickmenos.innerText = "Missed clicks: " + clickmenos
    contenedorClicks.innerText = "Clicks on target: " + click

  }else {
    click++;
    clickmenos--;
    contenedorClicks.innerText = "Clicks on target: " + click
  }

// timer("time:")



}

function clicksmenos() {
clickmenos++
contenedorClicks.innerText = "Clicks-" + click
}




// nivel 1
setInterval(mover, 1500)

var reloj = document.querySelector("#reloj")
var tiempoJuego = 60;

var miIntervalo = setInterval(restarTiempo, 1000)


function restarTiempo() {
  console.log(tiempoJuego);
  tiempoJuego--
  reloj.innerHTML = "Time left: " + tiempoJuego;
  if (tiempoJuego == 0) {
    reloj.innerHTML = "Time left: 0"
    clearInterval(miIntervalo);
    rojo.style.display ="none"
    var mensaje = document.querySelector(".mensaje")
    mensaje.style.display ="block"
    mensaje.innerHTML += "<p>You hit the target " +click+ " times</p>"
    mensaje.innerHTML += "<p>You missed the target " +clickmenos+ " times</p>"
  }

}

})

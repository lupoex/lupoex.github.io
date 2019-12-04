window.onload= function() {

var contador=document.querySelector("#contador");
var tic = 0
var tablero = document.querySelector("#tablero")
var cardClickeada1 = 0
var cardClickeada

var imagenes = ["imagen0", "imagen1", "imagen2", "imagen3", "imagen4", "imagen5","imagen0", "imagen1", "imagen2", "imagen3", "imagen4", "imagen5"]


imagenes.sort(function () {
  return 0.5- Math.random()
})

var cards = document.getElementsByClassName("card")

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", mifuncion)
  cards[i].classList.toggle(imagenes[i])
}

// document.querySelector("#tablero").addEventListener("click", mifuncion)
function mifuncion(evento) {
  evento.target.classList.toggle("signoPregunta")
  if (cardClickeada1 == 0) {
    cardClickeada1 = evento.target
    cardClickeada1.removeEventListener("click",mifuncion)
    console.log(cardClickeada1);
  }else {
    cardClickeada2 = evento.target
    if (cardClickeada1.classList[1] == cardClickeada2.classList[1]) {
      cardClickeada1.removeEventListener("click",mifuncion)
      cardClickeada2.removeEventListener("click",mifuncion)
      cardClickeada1.classList
      cardClickeada2.classList
      cardClickeada1 = 0
      cardClickeada2 = 0
      ganaste()
    }else {
      tic = tic + 1
      contador.innerHTML= " Clicks: " + tic
      setTimeout(function() {
        cardClickeada1.classList.toggle("signoPregunta")
        cardClickeada2.classList.toggle("signoPregunta")
        cardClickeada1.addEventListener("click",mifuncion)
        cardClickeada1 = 0
        cardClickeada2 = 0
      },800)

    }

  }

if (tic >= 10) {
  contador.innerHTML= " Clicks: 10"
  document.querySelector(".cartel-perdio").style.display = "block"
}
}




function ganaste() {
  var cards = document.getElementsByClassName("card")
  var ganador = []
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains("signoPregunta") == false) {
      ganador.push(i)
    }
  }
  if (ganador.length == cards.length) {
    document.querySelector(".cartel-ganaste").style.display = "block"
  }
}









// No mover
}
// No mover

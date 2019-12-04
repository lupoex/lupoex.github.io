  window.onload=function () {
  var turno = "player1"
  var cambiarturno= "player2"

var cuadrados = document.getElementsByClassName("cuadrado")

for (var i = 0; i < cuadrados.length; i++) {
  cuadrados[i].addEventListener('click', insertar)
}
var a1 = document.querySelector("#a1")
var a2 = document.querySelector("#a2")
var a3 = document.querySelector("#a3")
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var c1 = document.querySelector("#c1")
var c2 = document.querySelector("#c2")
var c3 = document.querySelector("#c3")

function insertar(event) {
  var objetivo = event.target
  var fotito1= document.querySelector(".fotito1")
  var fotito2= document.querySelector(".fotito2")
  console.log(objetivo.innerHTML == 1);
if (objetivo.innerHTML == 1 || objetivo.innerHTML == 2 || objetivo.innerHTML == 3 || objetivo.innerHTML == 4 || objetivo.innerHTML == 5 || objetivo.innerHTML == 6 || objetivo.innerHTML == 7 || objetivo.innerHTML == 8 || objetivo.innerHTML == 9) {
  if (turno=="player1") {
    fotito2.style.display = "block"
    fotito1.style.display = "none"
    var img = '<img class="simbolo" id="x" src="img/x.png" alt="">'
    objetivo.innerHTML=  img
    chequeargano()
    turno = "player2"
  }else if (turno=="player2") {
    fotito1.style.display = "block"
    fotito2.style.display = "none"

      var img = '<img class="simbolo" id="o" src="img/o.png" alt="">'
      objetivo.innerHTML=  img
      chequeargano()
      turno = "player1"
    }

    }else {
      alert("Clickea un cuadrado vacio")
    }


}



function chequeargano() {

// if (a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML || b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML || c1.innerHTML==c2.innerHTML && c1.innerHTML==c3.innerHTML || a1.innerHTML==b2.innerHTML && a1.innerHTML==c3.innerHTML || a3.innerHTML==b2.innerHTML && a3.innerHTML==c1.innerHTML || a1.innerHTML==b1.innerHTML && a1.innerHTML==c1.innerHTML || a2.innerHTML==b2.innerHTML && a2.innerHTML==c2.innerHTML || a3.innerHTML==b3.innerHTML && a3.innerHTML==c3.innerHTML) {
//   console.log("Hay elementos en linea");
//
//
//     }

if (a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML) {
  avisarGanador(a1)
}else if ( b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML) {
  avisarGanador(b1)

}else if (c1.innerHTML==c2.innerHTML && c1.innerHTML==c3.innerHTML) {
  avisarGanador(c1)

}else if (a1.innerHTML==b2.innerHTML && a1.innerHTML==c3.innerHTML) {
  avisarGanador(a1)

}else if (a3.innerHTML==b2.innerHTML && a3.innerHTML==c1.innerHTML) {
  avisarGanador(a3)

}else if (a1.innerHTML==b1.innerHTML && a1.innerHTML==c1.innerHTML) {
  avisarGanador(a1)

}else if (a2.innerHTML==b2.innerHTML && a2.innerHTML==c2.innerHTML) {
  avisarGanador(a2)

}else if (a3.innerHTML==b3.innerHTML && a3.innerHTML==c3.innerHTML) {
  avisarGanador(a3)

}

}

function avisarGanador(ganador) {
  if (ganador.innerHTML == '<img class="simbolo" id="o" src="img/o.png" alt="">') {
    document.querySelector(".mensaje2").style.display="block";
    console.log("Gano O");
    document.getElementById("myBtn2").addEventListener("click",function () {
      window.location.reload();
    })

  }else {
    document.querySelector(".mensaje1").style.display="block";
    console.log("Gano X");
    document.getElementById("myBtn1").addEventListener("click",function () {
      window.location.reload();
    })
  }
}



}

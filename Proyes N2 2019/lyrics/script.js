window.onload=function () {
var puntos = 0;
var cancion = [
{
letra: "I know you know that I made those mistakes maybe one or twice",
opcioncorrecta: "Sorry-Justin Bieber",
opcionincorrecta: ["Love Yourself-Justin Bieber", "Thinking Out Loud-Ed Sheeran", "Sorry-Justin Bieber"],
cancion: "audio/sorry.mp3"
},
{
letra: "Yo no sé cómo hacer pa' no tenerte La ganas que te tengo",
opcioncorrecta: "Tutu-Camilo,Pedro Capó",
opcionincorrecta: ["La Boca-Camilo, Mau y Ricky", "Desconocidos-Camilo,Mau y Ricky,Manuel Turizo"],
cancion: "audio/tutu.mp3"
},
{
letra: "Soy persona de ignorar sentimientos  Pero tú eres la excepción",
opcioncorrecta: "Te Soñe De Nuevo-Ozuna",
opcionincorrecta: ["La Cancion-J Balvin,Bad Bunny", "Delincuente-Farruko,Anuel AA,Kendo Kaponi"],
cancion: "audio/ozuna.mp3"
},
{
letra: "Se me para el cora' solo con mirarte Porque a ti te canto pa' que tú me cantes",
opcioncorrecta: "Yo x ti,Tu x mi-Rosalia,Ozuna",
opcionincorrecta: ["Con Altura-Rosalia,J Balvin,El Guincho", "Te Robaré-Nicky Jam,Ozuna"],
cancion: "audio/rosalia.mp3"
},
{
letra: "Whip,Whip Run me like a racehorse Pull me like a ripcord",
opcioncorrecta: "Whatever It Takes-Imagine Dragons",
opcionincorrecta: ["Radioactive-Imagine Dragons", "Something Just Like This-Coldplay"],
cancion: "audio/imagine-dragons.mp3"
},
{
letra: "Old friend, why are you so shy Ain't like you to hold back",
opcioncorrecta: "Someone Like You-Adele",
opcionincorrecta: ["Set Fire To The Rain-Adele", "Rolling The Deep-Adele"],
cancion: "audio/adele.mp3"
},
{
letra: "You're turning heads when you walk through the door Don't need make-up, to cover up",
opcioncorrecta: "What Makes You Beautiful-One Direction",
opcionincorrecta: ["Kiss You-One Direction", "Steal My Girl-One Direction"],
cancion: "audio/one-direction.mp3"
},
{
letra: "Y te lo digo a los gritos Y te ríes y me tomas por un loco atrevido",
opcioncorrecta: "No Me Doy Por Vencido-Luis Fonsi",
opcionincorrecta: ["Despacito Remix-Luis Fonsi,Daddy Yankee,Justin Bieber", "Echame La Culpa-Luis Fonsi,Demi Lovato"],
cancion: "audio/luis-fonsi.mp3"
},
{
letra: "De Snapchat te borré, de Facebook te borré De Instagram te borré, de mi vida re borré",
opcioncorrecta: "Que Pretendes-J Balvin,Bad Bunny",
opcionincorrecta: ["X-Nicky Jam, J Balvin", "Traicionera-Sebastian Yatra"],
cancion: "audio/que-pretendes.mp3"
},
{
letra: "Este fuego, fuego Con tus labios me quemo, quemo",
opcioncorrecta: "Fuego-Juanes",
opcionincorrecta: ["Besos En Guerra-Juanes,Morat", "Por Mil Noches-Airbag"],
cancion: "audio/fuego.mp3"
},
]
var puntaje = document.querySelector("#puntos")
var contenedorLetra = document.querySelector(".titulo")
var respuestas = document.getElementsByClassName("opcion")
respuestas = Array.prototype.slice.call(respuestas)
respuestas=respuestas.sort(function(){
  return 0.5 - Math.random()
})

console.log(respuestas);

var cancionActual = 0;
var indexIncorrecto = 0;

function preparaJuego() {
  var contenedorAudio = document.querySelector(".contenedorAudio")
  console.log(contenedorAudio);
  contenedorAudio.innerHTML= '<audio autoplay loop controls hidden id="miAudio"><source class="audioSource" src="'+cancion[cancionActual].cancion+'" type="audio/ogg"></audio>'
  contenedorLetra.innerText = '"' + cancion[cancionActual].letra+ '"'
  var numRandom = Math.floor(Math.random() * 3)
  for (var i = 0; i < respuestas.length; i++) {
    if (i == numRandom) {
        respuestas[i].innerText = cancion[cancionActual].opcioncorrecta
    }else if(indexIncorrecto == 0){
      respuestas[i].innerText = cancion[cancionActual].opcionincorrecta[0]
      indexIncorrecto++
    }else {
      respuestas[i].innerText = cancion[cancionActual].opcionincorrecta[1]
      indexIncorrecto = 0

    }

  }
}

preparaJuego()
var play = false
document.querySelector("#audioPlay").onclick = function () {
  if (play == false) {
    document.querySelector("#miAudio").play()
      play = true
  }else {
    document.querySelector("#miAudio").pause()
    play = false
  }
}


var opcion1 = document.querySelector(".cajaopcion1");
var opcion2 = document.querySelector(".cajaopcion2");
var opcion3 = document.querySelector(".cajaopcion3");

opcion1.addEventListener("click", verificar)
opcion2.addEventListener("click", verificar)
opcion3.addEventListener("click", verificar)

function verificar(event) {
  var click = event.target;
  console.log(click);
  if (click.innerHTML == cancion[cancionActual].opcioncorrecta) {
    alert("Correcto")
    puntos++
    puntaje.innerHTML = "Puntos:" + puntos
    cancionActual++
    preparaJuego()
  }else {
    alert("Incorrecto")
    cancionActual++
    preparaJuego();
  }
}

}

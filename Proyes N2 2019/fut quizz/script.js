window.addEventListener("load", function () {
// ESPERA A QUE CARGUE LA PAGINA, DESPUES EJECUTA EL SCRIPT

document.querySelector("#empezar").addEventListener("click",function () {
  document.querySelector(".juego").style.display = "block"
  document.querySelector(".bienvenida").style.display = "none"
  prepararJuego()
})
var score = 0;
var vidas = 2;
var puertas


var preguntas = [
  {
pregunta: "¿Qué equipo ganó el mundial que se disputó en Rusia en el 2018?",
rcorrecta: "Francia",
rincorrecta: ["Alemania", "Brazil"],
info: "Francia fue el campeón de ese mundial imponiéndose 4-2 sobre Croacia en la final."
},
  {
pregunta: "Pregunta 2: ¿Quien fue el ganador de la Copa Libertadores 2018?",
rcorrecta: "River Plate",
rincorrecta: ["Boca Juniors","Grêmio de Porto Alegre  "],
info: "El Club Atlético River Plate fue el campeón de esa edición por 3-1, partido que se terminó jugando en el Santiago Bernabéu, en Madrid. Es y será recordada como la final más importante de la historia con hechos inéditos, como un gol, sin arquero en el último minuto."
},
  {
pregunta: "Pregunta 3: ¿ De qué nacionalidad es Cristiano Ronaldo?",
rcorrecta: "Portugal",
rincorrecta: ["Francia","Brazil"],
info: "Cristiano Ronaldo es Portugués, ya gano 2 titulos para su seleccion. la Eurocopa 2016 y la Uefa Nations League."
},
  {
pregunta: "Pregunta 4: ¿ En qué equipo NO jugó Lionel Messi en primera división?",
rcorrecta: "Todas son correctas",
rincorrecta: ["River Plate", "Newells Old Boys"],
info: "Lionel Messi solo jugo en el futbol de primera división en el F.C Barcelona, en River Plate y Newells Old Boys jugó en las inferiores."
},

  {
pregunta: "Pregunta 5: ¿ Quién es el presidente de la A.F.A?",
rcorrecta: "Claudio chiqui Tapia",
rincorrecta: ["Julio Humberto Grondona", "Marcelo Tinelli"],
info: "Claudio Chiqui Tapia es el actual presidente, asumió como presidente temporal y terminó quedándose. En 2017 fue elegido como presidente."
},
{
pregunta: "Pregunta 6: ¿ Cuál es el actual club de Ricardo Adrián Centurión?",
rcorrecta: "Club Atlético San Luis",
rincorrecta: ["Atlético San Luis","Racing Club de Avellaneda"],
info: "Ricardo Centurión se encuentra en este club desde el Invierno de 2019, después de su conflictivo paso por Racing."
},  {
pregunta: "Pregunta 7: ¿ Qué equipo salio subcampeon del mundo en el Mundial Femenino de fútbol 2019?",
rcorrecta: "Holanda",
rincorrecta: ["Alemania","Brasil"],
info: "Holanda fue el Subcampeón de este mundial perdiendo la final contra Estados Unidos en el estadio Parc des Princes."
},  {
pregunta: "Pregunta 8 : ¿ Cuál es el nombre completo del Flamengo?",
rcorrecta: "Clube de Regatas do Flamengo",
rincorrecta: ["Flamengo Futebol Clube ","Clube Atlético do Flamengo"],
info: "El Clube de Regatas do Flamengo, conocido simplemente como Flamengo, es un club deportivo de la ciudad de Río de Janeiro, Brazil, conocido fundamentalmente por su sección de fútbol. Se llama así porque el remo era el deporte dominador de Rio, luego llego el futbol y su historia cambio."
},  {
pregunta: "Pregunta 9: ¿ Quién es el segundo máximo goleador de la historia de los mundiales?",
rcorrecta: "Ronaldo Nazario",
rincorrecta: ["Miroslav Klose","Cristiano Ronaldo"],
info: "Ronaldo Nazario es el segundo máximo goleador con 15 tantos, solo por detras de Miroslav Klose con 16 goles."
},  {
pregunta: "Pregunta 10: ¿ Quien es el arquero titular del equipo Portland Timbers?",
rcorrecta: "Steve Clark",
rincorrecta: ["Jeff Attinella","Kendal Moore"],
info: "Steve Clark es el actual portero titular de este equipo. Jeff y Kendall son suplentes."
},  {
pregunta: "Pregunta 11: ¿ Cuánto salió el primer tiempo del partido 3 en el grupo C del mundial de 1962 , que salio 2-1 en el resultado final,que se disputó en Chile entre España y Brasil ( el campeón de ese mundial)?",
rcorrecta: "Brasil 0 - 1 España",
rincorrecta: ["Brasil 1- 1 España","Brasil 2- 0 España"],
info: "El primer tiempo de este salio 0-1 a favor de España, el gol fue marcador por Cardozo en el 23´."

},  {
pregunta: "Pregunta 12 :¿ Donde se hizo el mundial de 1954?",
rcorrecta: "Suiza",
rincorrecta: ["Chile","Suecia"],
info: ["El mundial de 1954 se disputó en Suiza, fue el primero e ultimo disputado en estas tierras."]
},  {
pregunta: "Pregunta 13:¿ Cómo se llama el estadio donde se disputó la final del mundial de 1954?",
rcorrecta: "Wankdorf stadion",
rincorrecta: ["Clanck Dorf stadion","Zurich national stadium"],
info: "Este estadio es considerado el más importante de Suiza y el que mayor capacidad tiene por lo tanto, allí se disputó la final."
},  {
pregunta: "Pregunta 14: ¿ Cómo había salido el primer partido que disputaron en fase de grupos?",
rcorrecta: "Hungría 8 - 3 Alemania",
rincorrecta: ["Hungría 2 - 2 Alemania", "Hungría 1- 1 Alemania"],
info: "Aunque parezca imposible, lo fue. Luego el conjunto Alemán les terminó ganando la final del mundo contra todos los pronósticos."
},
  {
pregunta: "Pregunta 15 ¿ En qué país se llevó a cabo la primera edición del mundial de fútbol femenino en 1991?",
rcorrecta: "China",
rincorrecta: ["Estados Unidos", "Inglaterra"],
info: "Se disputó en China, mundial que gano la seleccion de Estados Unidos, en el segundo puesto fue la selección Noruega, en el tercero Suecia y por cuarto Alemania. Se jugaron 26 partidos y se anotaron 99 goles.Lo disputaron 12 equipos desde el 16 de noviembre de 1991 hasta el 30 de noviembre de 1991. "
},
 {
pregunta: "¿Cual fue el mundial que se marcaron mas goles?",
rcorrecta: "Brasil 2014",
rincorrecta: ["Sudafrica 2010", "Rusia 2018"],
info: "Brasil 2014 fue el Mundial en el que se marcaron la mayor cantidad de goles: 171."
},
{
pregunta: "¿Cual fue es el partido en el cual se hicieron más goles en toda la historia de un mundial?",
rcorrecta: "Austria - Suiza mundial 1954",
rincorrecta: ["Hungria  - El Salvador mundial 1982", "Francia - Kuwait mundial 1982"],
info: "El partido por los cuartos de final disputado entre Austria y Suiza en el Mundial de Suiza 1954, es en el que se han marcado la mayor cantidad de goles en una Copa del Mundo. El marcador final fue de 7-5 a favor de los austriacos. Un total de 12 goles."
},
{
pregunta: "¿Que super estrella del fútbol nunca jugo una libertadores?",
rcorrecta: "Maradona",
rincorrecta: ["Ronaldo Nazario", "Cafu"],
info: "Es una de las curiosidades más extrañas de la Copa Libertadores. Diego Armando Maradona nunca participó del torneo. Cuando se consagró campeón de la Argentina con Boca Juniors en 1981, se perdió la Copa del año siguiente porque ya había pasado a Barcelona de España. Y después, nunca más jugó en un equipo americano que estuviese participando en el certamen."
},
{
pregunta: "¿Que equipo se le inundó  el vestuario contra Junior, en Barranquilla en la edición 2018?",
rcorrecta: "Olimpia",
rincorrecta: ["Deportivo Cali", "Colo-Colo"],
info: "Olimpia de Paraguay Olimpia viajó a Barranquilla en la edición 2018 para jugar la revancha de la primera fase y cuando llegó al vestuario se encontró con que estaba inundado."
},
{
pregunta: "¿Que club rompió el trofeo sin querer el dia que lo ganó?",
rcorrecta: "Once Caldas",
rincorrecta: ["Argentino Juniors", "Velez Sarfield"],
info: "Once Caldas logró lo imposible. Un club de poca trayectoria y jerarquía lograba imponerse a Boca en la final de 2004, y fue tal el festejo que en plena celebración rompieron el preciado trofeo original"
},
{
pregunta: "¿Quien es el maximo goleador de la historia de Honduras?",
rcorrecta: "Carlos Pavon",
rincorrecta: ["Cristian Gimenez", "Raul Pereira"],
info: "El jugador de Honduras tiene 57 goles en 101 partidos."
},
{
pregunta: "¿Cuantos goles hizo Rene Higuita?",
rcorrecta: "41",
rincorrecta: ["22", "16 "],
info: "Rene Higuita, el ex-arquero colombiano marco 41 goles."
},
{
pregunta: "¿Cuantos goles hizo Chilavert?",
rcorrecta: "62",
rincorrecta: ["63", "72"],
info: "Chilavert, el ex-arquero paraguayo marco 62 goles"
},
{
pregunta: "¿Donde jugaba Juan Fer Quintero antes de jugar en River?",
rcorrecta: "Independiente de Medellin",
rincorrecta: ["Atletico Nacional", "Deportivo Medellin"],
info: "El crack colombiano jugo en Independiente de Medellin."
},
{
pregunta: "¿Donde juega Elias Lopez?",
rcorrecta: "Reserva de River",
rincorrecta: ["Reserva de Racing", "Reserva de Boca Juniors"],
info: "Elias Lopez juega de 4, en la reserva de River "
},

]

puertas = document.getElementsByClassName('puertas')
puertas = Array.prototype.slice.call(puertas);

puertas.sort(function () {
  return 0.5 - Math.random
})

console.log(puertas);

var respuestasCorrecta = 0; // determinar si ya ganamos
var respuestaIncorrecta = 0; // solo para insertar respuestas

function prepararJuego() {

var preguntaActual = preguntas[respuestasCorrecta]
document.querySelector(".ppregunta").innerText = preguntaActual.pregunta
var posicionRCorrecta = Math.floor(Math.random()* 3)
for (var i = 0; i < puertas.length; i++) {
  if (i == posicionRCorrecta) {
    puertas[i].innerHTML = '<p>' +preguntaActual.rcorrecta+ '</p>'
  }else if(respuestaIncorrecta == 0){
    puertas[i].innerHTML = '<p>' +preguntaActual.rincorrecta[0]+ '</p>'
    respuestaIncorrecta++
  }else {
    puertas[i].innerHTML = '<p>' +preguntaActual.rincorrecta[1]+ '</p>'
    respuestaIncorrecta = 0
  }
}
}

for (var i = 0; i < puertas.length; i++) {
  puertas[i].addEventListener("click", rcorrectas)
}
function rcorrectas() {
  var click = event.target;
  console.log(click.innerText);
  console.log(preguntas[respuestasCorrecta].rcorrecta);
  if (click.innerText == preguntas[respuestasCorrecta].rcorrecta) {
    // alert(preguntas[respuestasCorrecta].info)
    var mensaje = document.querySelector(".mensaje")
    mensaje.style.display ="block"
    mensaje.innerHTML = (preguntas[respuestasCorrecta].info)
    setTimeout(function () {
      mensaje.style.display= "none"
    },4000)
    score++
      document.getElementById("scores").innerHTML = "Score: " + score;
      mostrarsiguiente()
      if (score==25){
        var mensaje = document.querySelector(".mensaje")
        mensaje.style.display ="block"
        mensaje.innerHTML = "<p>GANASTE, toma 50 pesos</p>"
      }

  }else {
    click.style.backgroundColor = "red"
    vidas--;
    document.getElementById("vidass").innerHTML = "Vida: " + vidas;
    console.log(vidas);
    if (vidas<1){

    var mensaje = document.querySelector(".mensaje")
  mensaje.style.display ="block"
  mensaje.innerHTML = "<p>PERDISTE, SI QUERES JUGAR DE NUEVO, PAGA 50 PESOS</p>"
}
}
}
function mostrarsiguiente() {
  respuestasCorrecta++
  prepararJuego()
}


  // ACA TERMINA
})

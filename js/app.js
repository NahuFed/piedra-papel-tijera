const parsearEleccion = (eleccion) => {
  switch (eleccion) {
    case 1:
      return "piedra";
    case 2:
      return "papel";
    case 3:
      return "tijera";
  }
};

const jugarPiedraPapelTijeras = (eleccion, eleccionComputadora) => {
  switch (eleccion) {
    case "1":
    case "piedra":
      switch (eleccionComputadora) {
        case "piedra":
          return "empate";
        case "papel":
          return "gana computadora";
        case "tijera":
          return "gana jugador";
      }
      break;
    case "2":
    case "papel":
      switch (eleccionComputadora) {
        case "piedra":
          return "gana jugador";
        case "papel":
          return "empate";
        case "tijera":
          return "gana computadora";
      }
      break;
    case "3":
    case "tijera":
      switch (eleccionComputadora) {
        case "piedra":
          return "gana computadora";
        case "papel":
          return "gana jugador";
        case "tijera":
          return "empate";
      }
      break;
  }
};

const generarEleccionComputadora = () =>
  parsearEleccion(Math.floor(Math.random() * 3) + 1);

let resultado = "";
let ganoJugador = 0;
let ganoComputadora = 0;
let partidasJugadas = 0;
let empates = 0;

let botonPiedra = document.querySelector("#btnPiedra");
let botonPapel = document.querySelector("#btnPapel");
let botonTijera = document.querySelector("#btnTijera");
let eleccionJugador = document.querySelector("#eleccionJugador");
let eleccionCpu = document.querySelector("#eleccionComputadora");
let pResultado = document.querySelector("#resultado");
let jugadas = document.querySelector("#jugadas");
let ganadas = document.querySelector("#ganadas");
let perdidas = document.querySelector("#perdidas");
let empatadas = document.querySelector("#empatadas");

botonPiedra.addEventListener("click", piedra);
botonPapel.addEventListener("click", papel);
botonTijera.addEventListener("click", tijera);

function jugar(eleccion) {
  eleccionJugador.innerHTML = eleccion;
  eleccionCpu.innerHTML = generarEleccionComputadora();
  resultado = jugarPiedraPapelTijeras(eleccion, eleccionCpu.innerHTML);
  pResultado.innerHTML = resultado;
  contadores(resultado);
  imprimirResultados();
}

function piedra() {
  jugar("piedra");
}
function papel() {
  jugar("papel");
}
function tijera() {
  jugar("tijera");
}

function contadores(resultado) {
  if (resultado === "gana jugador") {
    ganoJugador++;
  } else if (resultado === "gana computadora") {
    ganoComputadora++;
  } else {
    empates++;
  }
  partidasJugadas++;
}

function imprimirResultados() {
  jugadas.innerHTML = partidasJugadas;
  ganadas.innerHTML = ganoJugador;
  perdidas.innerHTML = ganoComputadora;
  empatadas.innerHTML = empates;
}

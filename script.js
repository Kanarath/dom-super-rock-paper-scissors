// === Variables de referencia a elementos del DOM ===
const tablero = document.getElementById("screen");
const containerCards = document.getElementsByClassName("container-Cards");
const cards = document.querySelectorAll(".playerCard");
const powerCards = document.querySelectorAll(".playerPower");
const allCards = document.querySelectorAll(".card");
const endTurnBtn = document.getElementById("endTurnBtn");
const modal = document.getElementById("modal");
const iaHandResults = document.getElementById("iaHandResults");
const iaPowerUpResults = document.getElementById("iaPowerUpResults");
const handResults = document.getElementById("handResults");
const powerUpResults = document.getElementById("powerUpResults");


// === Variables de estado y globales ===
let isSelectedHand = false;
let isSelectedPowerUp = false;
let iaHandSelected = "";
let iaPowerUpSelected = "";
let cardSelectedId = 0;
let powerSelectedId = 0;
let showResults = false;
let cardReady = false;
let powerReady = false;
const playerSelectedHandCards = [];
const playerSelectedPowerUpCards = [];
const turnSelectedCards=[];
let lastSeletedHandCards = "";
let lastSelectedPowerUpCards = "";
const handCardsEvaluation =[];

//funciones de animaciones para cartas a raíz de Power Ups:
function startRotationClockwiseIA(){
const cardToRotateCW = document.getElementById("iaHandResults")
cardToRotateCW.style.animation = 'rotationClockWise 2s ease';
}

function startRotationCounterClockwiseIA(){
  const cardToRotateCCW = document.getElementById("iaHandResults")
  cardToRotateCCW.style.animation = 'rotationCounterClockWise 2s ease';
}

function startRotationClockwisePlayer(){
  const cardToRotateCW = document.getElementById("handResults")
  cardToRotateCW.style.animation = 'rotationClockWise 2s ease';
  }

  function startRotationCounterClockwisePlayer(){
    const cardToRotateCCW = document.getElementById("handResults")
    cardToRotateCCW.style.animation = 'rotationCounterClockWise 2s ease';
  }


//Casuisticas de los power ups del Player
function powerUpInterventionPlayer() {
  if(lastSelectedPowerUpCards === "reversePower-player") {
    if (lastSeletedHandCards === "rock-player" && iaHandSelected === "piedra"){
      return
    }
    if (lastSeletedHandCards === "rock-player" && iaHandSelected === "papel"){
      lastSeletedHandCards = "paper-player"
      iaHandSelected = "piedra"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      return
    }
    if (lastSeletedHandCards === "rock-player" && iaHandSelected === "tijera"){
      lastSeletedHandCards = "scissors-player"
      iaHandSelected = "piedra"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      return
    }
    if (lastSeletedHandCards === "paper-player" && iaHandSelected === "piedra"){
      lastSeletedHandCards = "rock-player"
      iaHandSelected = "papel"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      return
    }
    if (lastSeletedHandCards === "paper-player" && iaHandSelected === "papel"){
      return
    }
    if (lastSeletedHandCards === "paper-player" && iaHandSelected === "tijera"){
      lastSeletedHandCards = "scissors-player"
      iaHandSelected = "papel"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      return
    }
    if (lastSeletedHandCards === "scissors-player" && iaHandSelected === "piedra"){
      lastSeletedHandCards = "rock-player"
      iaHandSelected = "tijera"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      return
    }
    if (lastSeletedHandCards === "scissors-player" && iaHandSelected === "papel"){
      lastSeletedHandCards = "paper-player"
      iaHandSelected = "tijera"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      return
    }
    if (lastSeletedHandCards === "scissors-player" && iaHandSelected === "tijera"){
      return
    }
  }
  if(lastSelectedPowerUpCards === "changePlus-player") {
    if(iaHandSelected === "piedra") {
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      startRotationClockwiseIA()
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      iaHandResults.classList.add("clockWiseAnim");
      return iaHandSelected = "papel";
    }
    if(iaHandSelected === "papel") {
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      startRotationClockwiseIA()
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      iaHandResults.classList.add("clockWiseAnim");
      return iaHandSelected = "tijera";
    }
    if(iaHandSelected === "tijera") {
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      startRotationClockwiseIA()
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      iaHandResults.classList.add("clockWiseAnim");
      return iaHandSelected = "piedra";
    }
  }
  if(lastSelectedPowerUpCards === "changeMinus-player") {
    if(iaHandSelected === "piedra") {
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_ROCK.png')]");
      startRotationCounterClockwiseIA()
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      iaHandResults.classList.add("clockCounterWiseAnim");
      return iaHandSelected = "tijera";
    }
    if(iaHandSelected === "papel") {
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      startRotationCounterClockwiseIA()
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      iaHandResults.classList.add("clockCounterWiseAnim");
      return iaHandSelected = "piedra";
    }
    if(iaHandSelected === "tijera") {
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      startRotationCounterClockwiseIA()
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      iaHandResults.classList.add("clockCounterWiseAnim");
      return iaHandSelected = "papel";
    }
  }
}

//Casuistica de los Power Ups de la IA:
function powerUpInterventionIA() {
  if(iaPowerUpSelected === "reversePower") {
    if (lastSeletedHandCards === "rock-player" && iaHandSelected === "piedra"){
      return
    }
    if (lastSeletedHandCards === "rock-player" && iaHandSelected === "papel"){
      lastSeletedHandCards = "paper-player"
      iaHandSelected = "piedra"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      return
    }
    if (lastSeletedHandCards === "rock-player" && iaHandSelected === "tijera"){
      lastSeletedHandCards = "scissors-player"
      iaHandSelected = "piedra"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      return
    }
    if (lastSeletedHandCards === "paper-player" && iaHandSelected === "piedra"){
      lastSeletedHandCards = "rock-player"
      iaHandSelected = "papel"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      return
    }
    if (lastSeletedHandCards === "paper-player" && iaHandSelected === "papel"){
      return
    }
    if (lastSeletedHandCards === "paper-player" && iaHandSelected === "tijera"){
      lastSeletedHandCards = "scissors-player"
      iaHandSelected = "papel"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      return
    }
    if (lastSeletedHandCards === "scissors-player" && iaHandSelected === "piedra"){
      lastSeletedHandCards = "rock-player"
      iaHandSelected = "tijera"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      return
    }
    if (lastSeletedHandCards === "scissors-player" && iaHandSelected === "papel"){
      lastSeletedHandCards = "paper-player"
      iaHandSelected = "tijera"
      iaHandResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      return
    }
    if (lastSeletedHandCards === "scissors-player" && iaHandSelected === "tijera"){
      return
    }
  }
  if(iaPowerUpSelected === "changePlus") {
    if(lastSeletedHandCards === "rock-player") {
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      startRotationClockwisePlayer()
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.add("clockWiseAnim");
      return lastSeletedHandCards = "paper-player";
    }
    if(lastSeletedHandCards === "paper-player") {
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      startRotationClockwisePlayer()
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.add("clockWiseAnim");
      return lastSeletedHandCards = "scissors-player";
    }
    if(lastSeletedHandCards === "scissors-player") {
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      startRotationClockwisePlayer()
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.add("clockWiseAnim");
      return lastSeletedHandCards = "rock-player";
    }
  }
  if(iaPowerUpSelected === "changeMinus") {
    if(lastSeletedHandCards === "rock-player") {
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      startRotationCounterClockwisePlayer()
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      handResults.classList.add("clockCounterWiseAnim");
      return lastSeletedHandCards = "scissors-player";
    }
    if(lastSeletedHandCards === "paper-player") {
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      startRotationCounterClockwisePlayer()
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      handResults.classList.add("clockCounterWiseAnim");
      return lastSeletedHandCards = "rock-player";
    }
    if(lastSeletedHandCards === "scissors-player") {
      handResults.classList.remove("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      startRotationCounterClockwisePlayer()
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      handResults.classList.add("clockCounterWiseAnim");
      return lastSeletedHandCards = "paper-player";
    }
  }
}

//Casuistica del resultado.
function evaluationHandCards(array) {
  if (array[0] === "rock-player" && array[1] === "piedra"){
    console.log("It's a Tie");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_TIE.png')]");
  }
  if (array[0] === "rock-player" && array[1] === "papel"){
    console.log("You Lose");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_LOSE.png')]");
  }
  if (array[0] === "rock-player" && array[1] === "tijera"){
    console.log("You Win");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_WIN.png')]");
  }
  if (array[0] === "paper-player" && array[1] === "piedra"){
    console.log("You Win");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_WIN.png')]");
  }
  if (array[0] === "paper-player" && array[1] === "papel"){
    console.log("It's a Tie");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_TIE.png')]");
  }
  if (array[0] === "paper-player" && array[1] === "tijera"){
    console.log("You Lose");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_LOSE.png')]");
  }
  if (array[0] === "scissors-player" && array[1] === "piedra"){
    console.log("You Lose");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_LOSE.png')]");
  }
  if (array[0] === "scissors-player" && array[1] === "papel"){
    console.log("You Win");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_WIN.png')]");
  }
  if (array[0] === "scissors-player" && array[1] === "tijera"){
    console.log("It's a Tie");
    resultImg.classList.add("bg-[url('./src/img/RESULTS_TIE.png')]");
  }
}


// === Sonidos ===
const bgSound = new Audio("/src/sound/RPS_Loop.mp3");
const hoverSoundCard = new Audio("/src/sound/CardSwash.mp3");
const hoverSoundButton = new Audio("/src/sound/Shuffle.mp3");
const clickSound = new Audio("/src/sound/CardSelect.mp3");

// === Elementos de audio relacionados con eventos ===
const hoverSoundCardClass = document.getElementsByClassName("soundCards");
const hoverSoundButtonClass = document.getElementsByClassName("soundButton");
const clickSoundClass = document.getElementsByClassName("clickSoundActivated");

// === Eventos de la página ===
window.addEventListener("load", showInstructionsOnFirstLoad);
window.onload = resetGameOnLoad;

// === Eventos de sonido para hover y clic ===
Array.from(hoverSoundCardClass).forEach((card) => {
  card.addEventListener("mouseenter", playHoverSound.bind(null, hoverSoundCard));
});
Array.from(hoverSoundButtonClass).forEach((button) => {
  button.addEventListener("mouseenter", playHoverSound.bind(null, hoverSoundButton));
});
Array.from(clickSoundClass).forEach((button) => {
  button.addEventListener("click", playClickSound);
});

// === Eventos de selección de cartas y power-ups ===
cards.forEach((card) => card.addEventListener("click", cardSelection));
powerCards.forEach((powerCard) => powerCard.addEventListener("click", powerSelection));

// === Evento de intercambio en contenedor de cartas ===
const swapContainer = document.querySelector(".swap-container");
swapContainer.addEventListener("click", () => {
  swapContainer.classList.toggle("swap");
});

// === Evento para cambiar de fondo en el tablero y mostrar botones ===
tablero.addEventListener("click", revealUIElements);


// Muestra instrucciones solo una vez por sesión
function showInstructionsOnFirstLoad() {
  if (!sessionStorage.getItem("alertShown")) {
    alertInstructions();
    sessionStorage.setItem("alertShown", "true");
  }
}

// Reproduce sonido de hover
function playHoverSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

// Reproduce sonido de clic
function playClickSound() {
  clickSound.pause();
  clickSound.currentTime = 0;
  clickSound.play();
}

// Función para seleccionar una carta de mano
function cardSelection(event) {
  let currentTargetId = event.currentTarget.id;
  if (!isSelectedHand || (isSelectedHand && cardSelectedId === currentTargetId)) {
    cardSelectedId = currentTargetId;
    const cardElement = event.currentTarget.querySelector(".relative");
    cardElement.classList.toggle("group-hover:translate-y-[-40px]");
    cardElement.classList.toggle("selection");
    playerSelectedHandCards.push(currentTargetId);
    lastSeletedHandCards = playerSelectedHandCards[playerSelectedHandCards.length-1]
    turnSelectedCards[0]=lastSeletedHandCards;

    console.log(playerSelectedHandCards);
    isSelectedHand = !isSelectedHand;
    cardReady = !cardReady;
  }
  console.log(document.querySelectorAll(".playerCard .selection").length);
}

// Función para seleccionar un power-up
function powerSelection(event) {
  let currentTargetId = event.currentTarget.id;
  if (!isSelectedPowerUp || (isSelectedPowerUp && powerSelectedId === currentTargetId)) {
    powerSelectedId = currentTargetId;
    const cardElement = event.currentTarget.querySelector(".relative");
    cardElement.classList.toggle("group-hover:translate-y-[-40px]");
    cardElement.classList.toggle("selection");
    playerSelectedPowerUpCards.push(currentTargetId);
    lastSelectedPowerUpCards = playerSelectedPowerUpCards[playerSelectedPowerUpCards.length-1]
    turnSelectedCards[1]=lastSelectedPowerUpCards;
    console.log(playerSelectedPowerUpCards);
    isSelectedPowerUp = !isSelectedPowerUp;
    powerReady = !powerReady;
  }
  console.log(document.querySelectorAll(".playerPower .selection").length);
}

// Cambia el fondo del tablero y muestra elementos de UI
function revealUIElements() {
  if (!tablero.classList.contains("change-background")) {
    tablero.classList.add("change-background");
  }
  toggleUIElementsVisibility(true);
  sessionStorage.setItem("titleShown", "true");
}

// Resetea el juego al cargar la página si la sesión lo requiere
function resetGameOnLoad() {
  if (sessionStorage.getItem("titleShown")) {
    tablero.classList.add("change-background");
    toggleUIElementsVisibility(true);
  }
}

// Función para alternar la visibilidad de los elementos de UI
function toggleUIElementsVisibility(visible) {
  const classesToAdd = visible ? ["opacity-100", "scale-100", "pointer-events-auto"] : ["opacity-0", "scale-95", "pointer-events-none"];
  const classesToRemove = visible ? ["opacity-0", "scale-95", "pointer-events-none"] : ["opacity-100", "scale-100", "pointer-events-auto"];
  [creditsBtn, endTurnBtn, helpBtn].forEach((btn) => {
    btn.classList.add(...classesToAdd);
    btn.classList.remove(...classesToRemove);
  });
  Array.from(containerCards).forEach((card) => {
    card.classList.add("flex", ...classesToAdd);
    card.classList.remove(...classesToRemove);
  });
}

// Selección aleatoria de cartas y power-ups de la IA
function iaSelectionCards() {
  const iaHandCards = ["piedra", "papel", "tijera"];
  const iaPowerUpCards = ["reverse", "changePlus", "changeMinus"];
  iaHandSelected = iaHandCards[Math.floor(Math.random() * iaHandCards.length)];
  iaPowerUpSelected = iaPowerUpCards[Math.floor(Math.random() * iaPowerUpCards.length)];
}

// Evento de finalización del turno
endTurnBtn.addEventListener("click", (event) => {
  if (isSelectedHand && isSelectedPowerUp) {
    hideAllCards();
    showModal();
    iaSelectionCards();
    iaSelectedResults();
    playerSelectedResults(turnSelectedCards);
    console.log(`Esta es la combinación que seleccionó la IA: ${iaHandSelected}, ${iaPowerUpSelected}`);
    console.log(`Esta es la combinación que seleccionó del Jugador: ${turnSelectedCards}`);
    powerUpInterventionPlayer();
    powerUpInterventionIA();
    console.log(`Este es el resultado de la IA después de ejecutar los Power ups: ${iaHandSelected}, ${iaPowerUpSelected}`);
    console.log(`Este es es el resultado de del Jugador después de ejecutar los Power Ups: ${turnSelectedCards}`);
    handCardsEvaluation.push(lastSeletedHandCards, iaHandSelected);
    console.log(`Esta es la determinación de la casuistica después de las funciones anteriores y resultados: ${handCardsEvaluation}`);
    evaluationHandCards(handCardsEvaluation);
  } else {
    alert("You need to choose one Hand card and one Power Up Card to end the turn.");
  }
});

function playerSelectionCards() {
  const playerHandCardsSelected = document.querySelectorAll(".selection")
  console.log(playerHandCardsSelected);
}

// Muestra resultados de la selección de las cartas "hand" del Jugador
function playerSelectedResults(array) {
  switch (array[0]) {
    case "rock-player":
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      break;
    case "paper-player":
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      break;
    case "scissors-player":
      handResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      break;
  }
  switch (array[1]) {
    case "reversePower-player":
      powerUpResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_REVERSE.png')]");
      break;
    case "changePlus-player":
      powerUpResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_CHANGE_PLUS.png')]");
      break;
    case "changeMinus-player":
      powerUpResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_CHANGE_MINUS.png')]");
      break;
  }
}

// Muestra resultados de la selección de la IA
function iaSelectedResults() {
  switch (iaHandSelected) {
    case "piedra":
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PIEDRA.png')]");
      break;
    case "papel":
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_PAPEL.png')]");
      break;
    case "tijera":
      iaHandResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_SCISSORS.png')]");
      break;
  }
  switch (iaPowerUpSelected) {
    case "reverse":
      iaPowerUpResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_REVERSE.png')]");
      break;
    case "changePlus":
      iaPowerUpResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_CHANGE_PLUS.png')]");
      break;
    case "changeMinus":
      iaPowerUpResults.classList.add("bg-[url('./src/img/CARTA_PROYECTO_CHANGE_MINUS.png')]");
      break;
  }
}

// Muestra créditos del juego
function showCredits() {
  alert("Developer: Gerard Montero Sellares.\n\nSpecial Thanks:\nValeria 'Alpaca', for being at my side believing in me all the time; Ya tebya lyublyu.\nFélix Rodríguez, for all the help provided and enthusiasm to push me further and beyond.\n\nLast but not least, Thank YOU for playing!")
}

// Muestra ayuda para jugar
function showHelp() {
  alertInstructions();
}

// Restaura el juego
function resetGame() {
  location.reload();
}

// Funciones de ayuda
function alertInstructions() {
  alert("\nHow to Play:\nYou have 3 hand cards and 3 power up cards. During your turn you have to choose one hand card and one power up card to be able to end your turn.\n\nHand cards are the ones you might already now; Rock win against Scissors, Paper wins against Rock and Scissors wins against Paper.\n\nPower Up cards are the twist to this well known game and we have three of them; Reverse swaps your choosen hand card for the rival hand card. Change + makes the rival hand card to transform into the next hand card (the normal loop of cards goes; Rock, Paper, Scissors) and then we have the Change - that does exactly the same the last card we mentioned but anti-clockwise.\n\nThe way phases work, as we mentioned avobe, during our turn we select one hand card and one power up card and then we end turn. After this we get into the resolve phase in which the power ups appñy theyr effects in order, first the player power up and then the rival power up. Right after the hand cards resulted from the power ups applied are shown and we get the result of our game in which you can win, lose or tie.\n\nHave fun and Rock those Scissors in this Paper game!")
}

function showModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function hideAllCards() {
  allCards.forEach((card) => card.classList.add("hidden"));
}

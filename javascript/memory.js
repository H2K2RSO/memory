

const cartes = document.querySelectorAll(".cartes");

let aTourneCarte = false;
let bloquePLateau = false;
let carte1, carte2;
let tours = 0;
const counter = document.querySelector(".counter");

function tourneCarte() {
  if (bloquePLateau) return;
  if (this === carte1) return;

  this.classList.add("flip");

  if (!aTourneCarte) {
    aTourneCarte = true;
    carte1 = this;
    return;
  }

  carte2 = this;
  bloquePLateau = true;

  verifPair();
}

function verifPair() {
    tours++;
    counter.innerHTML = tours;
    let isPair = carte1.dataset.framework === carte2.dataset.framework;
    isPair ? disableCartes() : cartesPasTournees();
}

function disableCartes() {
  carte1.removeEventListener("click", tourneCarte);
  carte2.removeEventListener("click", tourneCarte);

  resetPlateau();
}

function cartesPasTournees() {
  setTimeout(() => {
    carte1.classList.remove("flip");
    carte2.classList.remove("flip");

    resetPlateau();
  }, 500);
}

function resetPlateau() {
  [aTourneCarte, bloquePLateau] = [false, false];
  [carte1, carte2] = [null, null];
}

(function melangeCartes() {
  cartes.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 25);
    card.style.order = randomPosition;
  });
})();

cartes.forEach((cartes) => cartes.addEventListener("click", tourneCarte));


// function startJeu() {
//     // document.getElementById(cartesBack).style.display = inline-block;
//     tours = 0;
//     counter.innerHTML = "0";
//     resetPlateau();
//     melangeCartes();
// };

// document.onkeydown("keydown", (event) => {
//   if (key === 32) {
//     // Event.preventDefault();
//     tours = 0;
//     counter.innerHTML = "0";
//     resetPlateau();
//     melangeCartes();
//   }
// });

// let key = Event.key;
// if (key == 32) {
//     Event.preventDefault();
//     tours = 0;
//     counter.innerHTML = "0";
//     resetPlateau();
//     melangeCartes();
// };

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    location.reload();
  }
});
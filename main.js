// Functionize Minecraft Fishing Start Code

// HTML Variables

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  let character = document.getElementById("character-select").value;
  // Steve Fish Simulator
  if (character === "steve") {
    let randNum = Math.random();
    if (randNum < 0.7) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  }
  if (character === "alex") {
    let randNum = Math.random();
    if (randNum < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  }
  if (character === "villager") {
    let randNum = Math.random();
    if (randNum <= 0.25) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum <= 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    } else if (randNum <= 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  }
}

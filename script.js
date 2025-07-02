let clickMeButton = document.getElementById("clicker");
let counterText = document.getElementById("text");
let boasterButton = document.getElementById("boaster");
let rotater = document.getElementById('kajuImage')

let kajuKatli = 0;
let multiplier = 1;
let multiplierCost = 25;
let rotation = 0;

function displayAmt() {

    counterText.innerText = "You have " + Math.round(kajuKatli * 100) / 100 + " Kaju Katli";
}

clickMeButton.addEventListener('click', function () {
    kajuKatli += multiplier;
    displayAmt();
    rotation += 90;
    rotater.style.transform = `rotate(${rotation}deg)`;

})

boasterButton.addEventListener('click', function () {
    if (kajuKatli >= multiplierCost) {
        kajuKatli -= multiplierCost;
        multiplierCost *= 1.25;
        multiplier++;
        displayAmt();
        boasterButton.innerText = "Boast Click for " + Math.round(multiplierCost * 100) / 100 + " Kaju Katli";
    }
    else {
        alert("You dont have enough Kaju Katli");
    }

})
var i = 0;
var numberOfDrums = document.querySelectorAll(".drum").length;

//Detect button click
while (i < numberOfDrums) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    i++;
}

//Detect keyboard press
document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

//Make sound function
function makeSound(input) {

    switch (input) {
        case "w":
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kickBass = new Audio("assets/sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "l":
            var snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(input);
            break;
    }
}

function buttonAnimation(input) {
    var activeButton = document.querySelector("." + input);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

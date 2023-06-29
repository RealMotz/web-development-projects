var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kick = new Audio('sounds/kick-bass.mp3');

function playSound(key) {
    switch (key) {
        case 'w':
            tom1.currentTime = 0;
            tom1.play();
            break;
        case 'a':
            tom2.currentTime = 0;
            tom2.play();
            break;
        case 's':
            tom3.currentTime = 0;
            tom3.play();
            break;
        case 'd':
            tom4.currentTime = 0;
            tom4.play();
            break;
        case 'j':
            snare.currentTime = 0;
            snare.play();
            break;
        case 'k':
            crash.currentTime = 0;
            crash.play();
            break;
        case 'l':
            kick.currentTime = 0;
            kick.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    if(activeButton === null) return;

    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}

document.addEventListener('keydown', function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});


document.querySelectorAll('.drum').forEach((drum) => {
    drum.addEventListener('click', function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
});



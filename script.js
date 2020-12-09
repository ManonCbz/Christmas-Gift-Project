var audio = new Audio('sound/son.sound');
var count = 0;

document.getElementById("gift").onclick = function () {
    if (count === 0) {
        audio.play();
        count++;
    }
}

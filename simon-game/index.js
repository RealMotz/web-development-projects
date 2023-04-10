function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(document).ready(function(){
    $("button").on("click", function(event) {
        playSound(this.name);
    });
});
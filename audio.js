var audio = new Audio('./audio.mp3');
audio.play(); //Error (Reason = Google Autoplay Services claims user doesn't interact with page, however that's wrong (False Error))
function play() {
var audio = new Audio('./audio.mp3');
audio.loop = true;
audio.play();
}
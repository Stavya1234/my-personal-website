var i=0
var txt = "Hi, I'm Stavya!"
var speed = 60;
function typeWriter(){
    if (i < txt.length){
        document.getElementById('Intro').innerHTML += txt.charAt(i);
        i++ ;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener("load", typeWriter());


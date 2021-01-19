
document.addEventListener("keypress", function(e){

    switch (e.key){
        case "1":
            var audio = new Audio("sounds/1.wav");
            audio.play();
            break;
        case "2":
            var audio = new Audio("sounds/2.mp3");
            audio.play();
            break;
        case "3":
            var audio = new Audio("sounds/3.mp3");
            audio.play();
            break;
        case "4":
            var audio = new Audio("sounds/4.wav");
            audio.play();
            break;
        case "5":
            var audio = new Audio("sounds/5.mp3");
            audio.play();
            break;
        case "6":
            var audio = new Audio("sounds/6.mp3");
            audio.play();
            break;
        case "7":
            var audio = new Audio("sounds/7.mp3");
            audio.play();
            break;
        default:
            console.log("");

    }
});







document.querySelectorAll(".drum")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/1.wav");
    audio.play();});

document.querySelectorAll(".drum")[1].addEventListener("click", function() {
    var audio = new Audio("sounds/2.mp3");
    audio.play();});

document.querySelectorAll(".drum")[2].addEventListener("click", function() {
    var audio = new Audio("sounds/3.mp3");
    audio.play();});

document.querySelectorAll(".drum")[3].addEventListener("click", function() {
    var audio = new Audio("sounds/4.wav");
    audio.play();});

document.querySelectorAll(".drum")[4].addEventListener("click", function() {
    var audio = new Audio("sounds/5.mp3");
    audio.play();});

document.querySelectorAll(".drum")[5].addEventListener("click", function() {
    var audio = new Audio("sounds/6.mp3");
    audio.play();});

document.querySelectorAll(".drum")[6].addEventListener("click", function() {
    var audio = new Audio("sounds/7.mp3");
    audio.play();
});
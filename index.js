var numberOfDrums = document.querySelectorAll("img").length;

for(var i= 0; i < 7; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
      var clickedButton = this.innerHTML;
        makeSound(clickedButton);
    });    
}

document.addEventListener("keydown",function(event){
    makeSound(event.key)
});

function makeSound(key){
    animateButton(key);
    switch(key){
        case "a":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
       break;
       case "b":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
       break;
       case "c":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
       break;
       case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
       break;
       case "e":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
       break;
       case "f":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
       break;
       case "g":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
       break;
       default:
    }
}

function animateButton(activeButton){
    var btn = document.querySelector("#"+activeButton);
    btn.classList.add("pressed");

    setTimeout(function(){
        btn.classList.remove("pressed");
    }, 100)
}

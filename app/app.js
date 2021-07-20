let btn = document.querySelector(".btn");
let popup= document.querySelector('.popup');
let main= document.getElementsByClassName("dummy_text");

let close =document.querySelector(".close");

let confettiPopUp =document.querySelector("#my-canvas");

//Confetti 
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();



btn.addEventListener("click", ()=>
{
    popup.classList.add("active");
    confettiPopUp.classList.add("active");
});

close.addEventListener("click", ()=>
{
    confettiPopUp.classList.remove("active");
    popup.classList.remove("active");

});

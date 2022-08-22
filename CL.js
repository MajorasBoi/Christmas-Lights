const button = document.querySelector(".player");
const len = document.querySelectorAll(".light");
const slider = document.querySelector(".slider");

const on = function(){
    for(i=0; i< len.length;i++){
        len[i].removeAttribute("style");
        len[i].style.animationPlayState = "runing";
    }
}

const off = function(){
    for(i = 0;i < len.length;i++){
        len[i].style.animationDuration = '1000ms';
        len[i].style.animation = "none";
        len[i].style.background = "#563260";
    }
}

const FrecVar = function(){
    for(i = 0;i < len.length;i++){
        len[i].style.animationDuration = slider.value + 'ms';
    }
}

slider.addEventListener("input", FrecVar);

button.addEventListener("click", (e)=>{
    if(button.innerHTML === "Play"){ //Parar
        button.innerHTML = "Pause";
        on();
        for(i = 0;i < len.length;i++){
            len[i].style.animationDuration = slider.value + 'ms';
        }
    }
    else{ //Empezar
        button.innerHTML = "Play";
        off();
    }
});
const button = document.querySelector(".player");
const len = document.querySelectorAll(".light");
const slider = document.querySelector(".slider");
const color1 = document.querySelector(".one");
const color2 = document.querySelector(".two");
const color3 = document.querySelector(".three");
const color4 = document.querySelector(".four");

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

color1.addEventListener("input", (e)=>{
    document.documentElement.style.setProperty('--color-one', color1.value);
});

color2.addEventListener("input", (e)=>{
    document.documentElement.style.setProperty('--color-two', color2.value);
});

color3.addEventListener("input", (e)=>{
    document.documentElement.style.setProperty('--color-three', color3.value);
});

color4.addEventListener("input", (e)=>{
    document.documentElement.style.setProperty('--color-four', color4.value);
});

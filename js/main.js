'use strict';
const secondHands = document.querySelector('.second-hand');
const minsHands = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = ((seconds/60)*360)+90;
    secondHands.style.transform = `rotate(${secondsDegress}deg)`;

    const mins = now.getMinutes();
    const minsDegress = ((mins/60)*360)+90;
    minsHands.style.transform = `rotate(${minsDegress}deg)`;;

    const hour = now.getHours();
    const hourDegress = ((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;
    
}

setInterval(setDate, 1000);


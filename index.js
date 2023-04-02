let homeScore = 0;
let guestScore = 0;

function hadd1(){
    homeScore += 1
   document.getElementById("home").textContent = homeScore
}
function hadd2(){
     homeScore += 2
   document.getElementById("home").textContent = homeScore
}
function hadd3(){
     homeScore += 3
   document.getElementById("home").textContent = homeScore
}

function gadd1(){
    guestScore += 1
   document.getElementById("guest").textContent = guestScore
}
function gadd2(){
     guestScore += 2
   document.getElementById("guest").textContent = guestScore
}
function gadd3(){
     guestScore += 3
   document.getElementById("guest").textContent = guestScore
}

function resetAll(){
   document.getElementById("guest").textContent = 0
   document.getElementById("home").textContent = 0
}

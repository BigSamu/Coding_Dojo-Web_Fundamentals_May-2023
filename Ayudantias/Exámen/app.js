function hide(){
    var divToDelete = document.querySelector(".suscribe-section");
    divToDelete.remove() 
}


function incrementScore(elmt){
    var score = parseInt(elmt.innerHTML);
    score += 1;
    elmt.innerHTML = score
}

function game_over(){
    alert("The ninjas have won");
    clearInterval(nIntervId);
}


let nIntervId = setInterval(() => {
    var seconds_span = document.querySelector("#seconds");
    var seconds = parseInt(seconds_span.innerHTML);
    seconds -= 1;
    seconds_span.innerHTML = seconds;
    
}, 1000)

setTimeout(game_over, 13 * 1000);

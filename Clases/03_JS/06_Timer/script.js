var timerInterval;
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

// document.getElementById("start").addEventListener("click", startTimer);
// document.getElementById("stop").addEventListener("click", stopTimer);
// document.getElementById("reset").addEventListener("click", resetTimer);

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 10); // Update every 10 milliseconds
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTimerDisplay();
}

// Function for updating variables milliseconds, seconds, minutes and hours.
// Once updated, it calls updateTimerDisplay() function
function updateTimer(){
  milliseconds += 10;
  if(milliseconds == 1000){
    milliseconds = 0;
    seconds++;
    if(seconds == 60){
      seconds = 0;
      minutes++;
      if(minutes == 60){
        minutes = 0;
        hours++;
      }
    }
  }
  updateTimerDisplay();
}

// Function for updating displays spans content in HTML
function updateTimerDisplay(){
  var hoursSpan = document.getElementById("hours");
  var minutesSpan = document.getElementById("minutes");
  var secondsSpan = document.getElementById("seconds");
  var millisecondsSpan = document.getElementById("milliseconds");

  hoursSpan.innerHTML = padZero(hours);
  minutesSpan.innerHTML = padZero(minutes);
  secondsSpan.innerHTML = padZero(seconds);
  millisecondsSpan.innerHTML = padTwoDigits(milliseconds);
}

// Auxiliar Functions for padding values

function padZero(value) {
  // var numToString = value.toString();
  // var paddedNumToString = numToString.padStart(2, "0");
  // return paddedNumToString;

  // Lines above same as below
  return value.toString().padStart(2, "0");
}

function padTwoDigits(value) {
  // var numToString = value.toString();
  // var paddedumToString = numToString.padStart(2, "0");
  // var slicedPaddedNumToString = paddedumToString.slice(0, 2);
  // return slicedPaddedNumToString;

  // Lines above same as below
  return value.toString().padStart(3, "0").slice(0, 2);
}

var petImg = document.getElementById("pet-img");
// var petImg = document.querySelector("#pet-img");
var isCat = true;

function switchImg(){
  isCat = !isCat; // If isCat = true -> isCat = false
                  // Id isCat = false -> isCat = true
  if(isCat){
    petImg.src = "./images/cat.png";
  } else {
    petImg.src = "./images/dog.png";
  }
}

function changeButtonColor(element){

  if(element.classList.contains("dark-mode")){
    // do change to light
    element.innerText = "Change Button Color to Dark";
    element.classList.remove("dark-mode");
    element.classList.remove("big-button");
  }
  else{
    // do change to dark
    element.innerText = "Change Button Color to Light";
    element.classList.add("dark-mode");
    element.classList.add("big-button");
  }

}


function changeBackgroundColor(element) {
  // var container = document.getElementsByClassName('container')[0];
  var container = document.querySelector('.container');

  if (container.classList.contains("dark-mode")) {
    element.innerText = "Change Bakground Color to Dark";
    container.classList.remove('dark-mode');
  } else {
    element.innerText = "Change Bakground Color to Light";
    container.classList.add('dark-mode');
  }
  // container.classList.toggle('dark-mode');
}

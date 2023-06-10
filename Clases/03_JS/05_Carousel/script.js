var currentIndex = 0;
var images = document.querySelectorAll(".carousel-image");
var indicators = document.querySelectorAll(".indicator");

// var images = document.getElementsByClassName("carousel-image");
// var indicators = document.getElementsByClassName("indicator");

// Initially display the first image and active indicator
images[currentIndex].classList.add("active");
indicators[currentIndex].classList.add("active");

function moveToNextImage() {
  // Hide current image and remove active indicator
  images[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  // Move to the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Show the new current image and add active indicator
  images[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");
}

function moveToPrevImage() {
  // Hide current image and remove active indicator
  images[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  // Move to the previous image
  currentIndex = (currentIndex - 1 + images.length) % images.length;

  // Show the new current image and add active indicator
  images[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");
}

function moveToImage(index) {
  // Hide current image and remove active indicator
  images[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active");

  // Move to the specific image
  currentIndex = index;

  // Show the new current image and add active indicator
  images[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");
}


// var nextControl = document.getElementById("next");
// var prevControl = document.getElementById("prev");

// nextControl.addEventListener("click", moveToNextImage);
// prevControl.addEventListener("click", moveToPrevImage);
// indicators[0].addEventListener("click", moveToImage.bind(null, 0));
// indicators[1].addEventListener("click", moveToImage.bind(null, 1));
// indicators[2].addEventListener("click", moveToImage.bind(null, 2));

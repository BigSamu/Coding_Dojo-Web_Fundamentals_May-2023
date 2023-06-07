function getColor() {
  // i) Array of <p> tags
  var paragraphElements = document.querySelectorAll("p");

  // ii) get color selected by user
  var inputElement = document.querySelector("#inputColor");

  // iii) Update font color for each paragraph in text
  for (var i = 0; i < paragraphElements.length; i++) {
    paragraphElements[i].style.color = inputElement.value;
  }
}

function changeTextOne(id) {
  var element = document.querySelector("#"+id);
  element.innerHTML = "Hello World";
}

function changeTextTwo(element) {
  // When changeText(this) is called in HTML
  // -> element = this -> element = <button>...</button>
      // -> element: function parameter
      // -> this: function argument (real value)
  element.innerHTML = "Text Changed in Button";
}

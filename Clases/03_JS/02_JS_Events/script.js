function handleClick() {
  alert("Hello World!");
  console.log("Hello World 222")
}

function handleChange() {
  alert("Change in Input!");
}

function handleMouseOver() {
  alert("Mouse Over!");
}

function handleMouseOut() {
  alert("Mouse Out!");
}

function handleKeyDown() {
  alert("Key Down!");
}

function handleKeyUp() {
  alert("Key Up!");
}

function handleKeyPress() {
  alert("Key Press!");
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Form Submitted!");
}

function openWindow() {
  window.open("https://google.com");
}

function closeWindow() {
  window.close();
}

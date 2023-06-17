$(document).ready(function () {
  // Click - With JQuery
  var colors = ["blue", "#999"];
  var currentIndex = 0;
  $("#colorButton").click(function () {
    $("#colorParagraph").css("color", colors[currentIndex]);
    currentIndex = (currentIndex + 1) % colors.length;
  });

  // Click - With Vanilla JS
  // var colors = ["blue", "#999"];
  // var currentIndex = 0;

  // document.getElementById("colorButton").addEventListener("click", function() {
  //   var colorParagraph = document.getElementById("colorParagraph");
  //   colorParagraph.style.color = colors[currentIndex];
  //   currentIndex = (currentIndex + 1) % colors.length;
  // });

  // Change - With JQuery
  $("#toggleCheckbox").change(function () {
    if ($(this).is(":checked")) {
      $("#toggleParagraph").hide();
    } else {
      $("#toggleParagraph").show();
    }
  });

  // Change - With Vanilla JS
  // document.getElementById("toggleCheckbox").addEventListener("change", function() {
  //   var toggleParagraph = document.getElementById("toggleParagraph");
  //   if (this.checked) {
  //     toggleParagraph.style.display = "none";
  //   } else {
  //     toggleParagraph.style.display = "block";
  //   }
  // });

  // Submit - With JQuery
  $("#listForm").submit(function (event) {
    event.preventDefault();
    var newItem = $("#newItemInput").val().trim();
    if (newItem) {
      var listItem = $("<li>").text(newItem);
      $("#list").append(listItem);
      $("#newItemInput").val("");
    }
  });

  // Submit - With Vanilla JS
  // document.getElementById("listForm").addEventListener("submit", function(event) {
  //   event.preventDefault();
  //   var newItemInput = document.getElementById("newItemInput");
  //   var newItem = newItemInput.value.trim();
  //   if (newItem) {
  //     var listItem = document.createElement("li");
  //     listItem.textContent = newItem;
  //     document.getElementById("list").appendChild(listItem);
  //     newItemInput.value = "";
  //   }
  // });

  // Hover - With JQuery
  $("#hoverDiv").mouseenter(function () {
    $(this).css("background-color", "blue");
  });

  $("#hoverDiv").mouseleave(function () {
    $(this).css("background-color", "#ccc");
  });

  // Hover - With Vanilla JS
  // var hoverDiv = document.getElementById("hoverDiv");

  // hoverDiv.addEventListener("mouseenter", function() {
  //   this.style.backgroundColor = "blue";
  // });

  // hoverDiv.addEventListener("mouseleave", function() {
  //   this.style.backgroundColor = "#ccc";
  // });
});

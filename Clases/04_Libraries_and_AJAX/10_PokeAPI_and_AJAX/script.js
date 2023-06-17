
// OLD WAY
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the reference to the Pokémon list element and the fetch button
//   var pokemonListElement = document.getElementById("pokemon-list");
//   var fetchButton = document.getElementById("fetchButton");

//   // Add a click event listener to the fetch button
//   fetchButton.addEventListener("click", function() {
//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();

//     // Open a GET request to the PokeAPI endpoint
//     xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=15", true);

//     // Define the function to be executed when the ready state of the request changes
//     xhr.onreadystatechange = function() {
//       // Check if the ready state is DONE (4) and the status is OK (200)
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         // Parse the response text as JSON
//         var response = JSON.parse(xhr.responseText);

//         // Get the Pokémon list from the response
//         var pokemonList = response.results;

//         // Iterate over each Pokémon in the list
//         pokemonList.forEach(function(pokemon, idx) {
//           // Create a new list item element
//           var listItem = document.createElement("li");
//           // Set the class name for styling
//           listItem.className = "list-group-item";
//           // Set the text content as the Pokémon name
//           listItem.textContent = `${idx+1}. ${pokemon.name}`;
//           // Append the list item to the Pokémon list element
//           pokemonListElement.appendChild(listItem);
//         });
//       }
//     };

//     // Send the request
//     xhr.send();
//   });
// });

// MODERN WAY
document.addEventListener("DOMContentLoaded", function() {
  // Get the reference to the Pokémon list element and the fetch button
  var pokemonListElement = document.getElementById("pokemon-list");
  var fetchButton = document.getElementById("fetchButton");

  // Add a click event listener to the fetch button
  fetchButton.addEventListener("click", function() {
    // Fetch the Pokémon data from the PokeAPI using the provided URL
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
      .then(function(response) {
        // Check if the response was successful (status code in the range of 200-299)
        if (response.ok) {
          // Extract the JSON data from the response
          return response.json();
        } else {
          // Throw an error if the response was not successful
          throw new Error("Failed to retrieve Pokémon data.");
        }
      })
      .then(function(data) {
        console.log(data);
        // Access the Pokémon list from the response data
        var pokemonList = data.results;

        // Iterate over each Pokémon in the list
        pokemonList.forEach(function(pokemon,idx) {
          // Create a new list item element
          var listItem = document.createElement("li");
          // Set the class name for styling
          listItem.className = "list-group-item";
          // Set the text content as the Pokémon name
          listItem.textContent = `${idx+1}. ${pokemon.name}`;
          // Append the list item to the Pokémon list element
          pokemonListElement.appendChild(listItem);
        });
      })
      .catch(function(error) {
        // Log any errors that occurred during the fetch operation
        console.log(error);
      });
  });
});

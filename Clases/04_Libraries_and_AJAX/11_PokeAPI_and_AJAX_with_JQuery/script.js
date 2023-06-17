$(document).ready(function() {
  // Get the reference to the Pokémon list element and the fetch button
  var pokemonListElement = $("#pokemon-list");
  var fetchButton = $("#fetchButton");

  // Add a click event listener to the fetch button
  fetchButton.click(function() {
    // Fetch the Pokémon data from the PokeAPI using the provided URL
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon?limit=15",
      method: "GET"
    })
      .done(function(data) {
        console.log(data)
        // Access the Pokémon list from the response data
        var pokemonList = data.results;
        // Iterate over each Pokémon in the list
        $.each(pokemonList, function(idx,pokemon) {
          // Create a new list item element
          var listItem = $("<li>").addClass("list-group-item");
          // Set the text content as the Pokémon name
          listItem.text(`${idx+1}. ${pokemon.name}`);
          // Append the list item to the Pokémon list element
          pokemonListElement.append(listItem);
        });
      })
      .fail(function(error) {
        // Log any errors that occurred during the fetch operation
        console.log(error);
      });
  });
});

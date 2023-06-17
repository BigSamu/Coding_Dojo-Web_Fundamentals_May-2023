function get_people() {
    var input_elmt = $("input");
    var people_id = input_elmt.val();

    $.ajax(`https://swapi.dev/api/people/${people_id}/`,
    {
        complete: (jqXHR, textStatus) => {
            console.log(textStatus);
            console.log(jqXHR);
            if (textStatus === "success"){
                var name = jqXHR.responseJSON["name"];
                var hair_color = jqXHR.responseJSON["name"];

                delete jqXHR.responseJSON['created'] ;
                delete jqXHR.responseJSON['edited'] ;


                $("#content").html(JSON.stringify(jqXHR.responseJSON, null, 2))
            } else {
                $("#content").html("Error: Se nos cayó el hiperespacio")
            }
        }
    });
}

$(document).ready(function() {
    $("#search_btn").on("click", get_people);
});
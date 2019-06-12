$(document).ready(function(){
    var character_URL = 'https://rickandmortyapi.com/api/character/';

    var pages = 25;
    var morty = [];
    var rick = [];

    for (let i = 0; i < 25; i++) {
        var char_pages_URL = 'https://rickandmortyapi.com/api/character/?page=' + i;
        $.ajax({
            url: char_pages_URL,
            method: 'GET'
        }).then(function (response) {
            //console.log(response);
            console.log(response.results);
            var counter = 0;
            var row_counter = 0;
            const $row = $(`<div class="row" id = ${row_counter}>`);

            for (let j = 0; j < response.results.length; j++){
                counter++;
                if (counter === 5 ) {
                    counter = 0;
                    row_counter++;
                    // Grab data
                    var char_name = response.results[j].name;
                    var char_img = response.results[j].image;
                    var char_status = response.results[j].status;
                    var char_species = response.results[j].species;
                    var char_gender = response.results[j].gender;
                    var char_origin = response.results[j].origin.name;
                    var char_location = response.results[j].location.name;
                    // Create Card column
                    const $card = $('<div class="card">');
                    // Append Image
                    $card.append(`<img class="card-image-top" src="${char_img}" alt="${char_name}">`);
                    // Append Char name
                    $card.append(`<h3 class="card-title">${char_name}</h3>`);
                    // Create cards content
                    const $card_body = $('<div class="card-body">');


                    // Create content for card body
                            $card_body.append(`<p class="card-text">STATUS: ${char_status}</p><hr>`);
                            $card_body.append(`<p class="card-text">SPECIES: ${char_species}</p><hr>`);
                            $card_body.append(`<p class="card-text">GENDER: ${char_gender}</p><hr>`);
                            $card_body.append(`<p class="card-text">ORIGIN: ${char_origin}</p><hr>`);
                            $card_body.append(`<p class="card-text">LAST<br>LOCATION: ${char_location}</p><hr>`);

                    // Append card body to the card
                    $card.append($card_body);
                    $row.append($card);
                    // Append to cards the row
                    $('#cards').append($row);
                }
                // $('#cards').append(`<div class="row" id = ${row_counter}>`);
                // } else {
                //     $(`#${row_counter}`).append($card);
                // }

                //


                //
                // if (char_name.includes("Morty")) {
                //     //console.log(char_name);
                //     morty.push(response.results[j]);
                // }
                // if (char_name.includes("Morty Jr's interviewer")) {
                //     morty = _.reject(morty, response.results[j]);
                // }
                // if (char_name.includes("Rick")) {
                //     rick.push(response.results[j]);
                // }
                //

                // console.log(char_name);
            }
        })
    }
})

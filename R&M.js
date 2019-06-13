$(document).ready(function(){
    //var character_URL = 'https://rickandmortyapi.com/api/character/';

        var pages = 25;
        var morty = [];
        var rick = [];
        var counter = 0;
        var row_counter = 1;
        var searched = false;


        var value = $(this).val().toLowerCase();
        var searching_Char = 'https://rickandmortyapi.com/api/character/?name=' + value;

        for (let j = 1; j < 125; j++) {
            const $row = $(`<div class="row" id = ${j}>`);
            $('#cards').append($row);
        }
        for (let i = 1; i < 494; i++) {
            //var char_pages_URL = 'https://rickandmortyapi.com/api/character/?page=' + i;
            var char_pages_URL = 'https://rickandmortyapi.com/api/character/' + i;

            $.ajax({
                url: char_pages_URL,
                method: 'GET'
            }).then(function (response) {
                //console.log(response);
                // Grab data
                counter++;
                //console.log("starting" + counter);
                var char_name = response.name;
                var char_img = response.image;
                var char_status = response.status;
                var char_species = response.species;
                var char_gender = response.gender;
                var char_origin = response.origin.name;
                var char_location = response.location.name;
                // Create Card column
                const $card = $(`<div class="card col-4"  id = "${char_name}">`);
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
                $(`#${row_counter}`).append($card);
                if (counter === 4) {
                    counter = 0;
                    row_counter++;
                }

                if (char_name.includes("Morty")) {
                    //console.log(char_name);
                    morty.push(response.results);
                }
                if (char_name.includes("Morty Jr's interviewer")) {
                    morty = _.reject(morty, response.results);
                }
                if (char_name.includes("Rick")) {
                    rick.push(response.results);
                }

                // console.log(char_name);

            });


        }
    $("#myInput").on("keyup", function() {
        var input, filter, row_container, row, td, i, txtValue;
        var value = $(this).val().toLowerCase();
        //console.log(value);
        row = $("#cards > .row");

        // Loop through all table rows, and hide those who don't match the search query
        for (let k = 0; k < row.length; k++) {
            td = row[k].getElementsByClassName("card");//[0];
            if (td) {
                txtValue = td.attr('id');
                if (txtValue.toLowerCase().indexOf(value) > -1) {
                    row[k].style.display = "";
                } else {
                    row[k].style.display = "none";
                }
            }
<<<<<<< HEAD
        })
    }
    //joke   Work in progress
     $card.append(`<img class="card-image-top" src="${char_img}" alt="${char_name}">`);
     var char_img = response.results[j].image;

    for (let i = 0; i < 4; i++ ){
        var char_img = $("<div>");
        char_img.attr("class")
        $(".text").append(`<li class="list-group-item">${data[i]}</li>`)
    }


    function setNewImage()
    {
        document.getElementById(img).src ="images"
    }
    function append(){
        $("#").append("<img id")
    }


})
=======
        }
    });
});
>>>>>>> 6ee2f7e586a6ebc2a98ba046163a216aff189247

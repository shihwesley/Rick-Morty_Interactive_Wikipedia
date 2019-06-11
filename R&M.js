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
        for (let j = 0; j < response.results.length; j++) {
            var char_name = response.results[j].name;
            const $h1 = $('<h1>');
            $h1.text(char_name);

            if (char_name.includes("Morty")) {
                //console.log(char_name);
                morty.push(response.results[j]);
            }
            if (char_name.includes("Morty Jr's interviewer")) {
                morty = _.reject(morty, response.results[j]);
            }
            if (char_name.includes("Rick")) {
                rick.push(response.results[j]);
            }

            $("#characters").append($h1);

            // console.log(char_name);
        }
    })
}
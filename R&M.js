$(document).ready(function () {
<<<<<<< HEAD
    var character_URL = 'https://rickandmortyapi.com/api/character/';

    var pages = 25;
    var morty = [];
    var rick = [];
=======
  const firebaseConfig = {
    apiKey: "AIzaSyBFiy-wZ4lyjGUMAueHvWgzEL1kM0FUEp0",
    authDomain: "rick-morty-8e725.firebaseapp.com",
    databaseURL: "https://rick-morty-8e725.firebaseio.com",
    projectId: "rick-morty-8e725",
    storageBucket: "rick-morty-8e725.appspot.com",
    messagingSenderId: "884114584570",
    appId: "1:884114584570:web:3f1ca8adf063f323"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
>>>>>>> 5f91b49916d5c8e071894d14815889348478066e

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

<<<<<<< HEAD
            for (let j = 0; j < response.results.length; j++) {
                counter++;
                if (counter === 5) {
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
    //joke   Work in progress
    $card.append(`<img class="card-image-top" src="${char_img}" alt="${char_name}">`);
    var char_img = response.results[j].image;

    for (let i = 0; i < 4; i++) {
        var char_img = $("<div>");
        char_img.attr("class")
        $(".text").append(`<li class="list-group-item">${data[i]}</li>`)
    }


    function setNewImage() {
        document.getElementById(img).src = "images"
    }
    function append() {
        $("#").append("<img id")
    }


})
=======
  // var pages = 25;
  // var morty = [];
  // var rick = [];
  var counter = 0;
  var row_counter = 1;
  //var searched = false;
  // var data = [];

  // var value = $(this).val().toLowerCase();
  // var searching_Char = 'https://rickandmortyapi.com/api/character/?name=' + value;

  for (let j = 1; j < 125; j++) {
    const $row = $(`<div class="row" id = ${j}>`);
    $('#cards').append($row);
  }
  // for (let m = 0; m < 25; m++) {
  //   var char_pages_URL = 'https://rickandmortyapi.com/api/character/?page=' + m;
  //   $.ajax({
  //     url: char_pages_URL,
  //     method: 'GET'
  //   }).then(function (response) {
  //     for (let g = 0; g < response.results.length; g++) {
  //       database.ref('characters/').push({
  //         character :  response.results[g]
  //       });
  //     }
  //
  //   });
  // }

  database.ref('/characters').on('value', function (snapshot) {
    snapshot.forEach(function (childSnap) {
      counter++;
      var char = childSnap.val().character;
      var char_id = char.id;
      var char_name = char.name;
      var char_img = char.image;
      var char_status = char.status;
      var char_species = char.species;
      var char_gender = char.gender;
      var char_origin = char.origin.name;
      var char_location = char.location.name;
      //console.log(childSnap.val().character.name);
      // Create Card column
      const $card = $(`<div class="card col-4"  id = "${char_name}">`);
      // Append Image
      $card.append(`<img class="card-image-top" src="${char_img}" alt="${char_name}">`);
      // Append Char name
      $card.append(`<h3 class="card-title">${char_name}</h3>`);
      // Create cards content
      const $card_body = $('<div class="card-body">');


      // Create content for card body
      $card_body.append(`<p class="card-text">ID: ${char_id}</p><hr>`);
      $card_body.append(`<p class="card-text">STATUS: ${char_status}</p><hr>`);
      $card_body.append(`<p class="card-text">SPECIES: ${char_species}</p><hr>`);
      $card_body.append(`<p class="card-text">GENDER: ${char_gender}</p><hr>`);
      $card_body.append(`<p class="card-text">ORIGIN: ${char_origin}</p><hr>`);
      $card_body.append(`<p class="card-text">LAST<br>LOCATION: ${char_location}</p><hr>`);

      $card.append($card_body);
      $(`#${row_counter}`).append($card);
      if (counter === 4) {
        counter = 0;
        row_counter++;
      }
    })
  });

  $("#myInput").on("keyup", function () {
    $('#cards').empty();
    var value = $(this).val().toLowerCase();
    database.ref('/characters').on('value', function (snapshot) {
      snapshot.forEach(function (childSnap) {
        const char = childSnap.val().character;
        var char_name = char.name;
        if (char_name.includes(value)) {
          console.log(value);
          console.log(char_name);
        }
      });
    });
    // for(let key in data){
    //   //   var char_name = data[n].name;
    //   //   var char_img = data[n].image;
    //   //   var char_status = data[n].status;
    //   //   var char_species = data[n].species;
    //   //   var char_gender = data[n].gender;
    //   //   var char_origin = data[n].origin.name;
    //   //   var char_location = data[n].location.name;
    // }
    //
    // for (let n = 1; n < 494; n++) {
    //   console.log(data);
    //   counter++;
    //   var char_name = data[n].name;
    //   var char_img = data[n].image;
    //   var char_status = data[n].status;
    //   var char_species = data[n].species;
    //   var char_gender = data[n].gender;
    //   var char_origin = data[n].origin.name;
    //   var char_location = data[n].location.name;
    //   // Create Card column
    //   const $card = $(`<div class="card col-4"  id = "${char_name}">`);
    //   // Append Image
    //   $card.append(`<img class="card-image-top" src="${char_img}" alt="${char_name}">`);
    //   // Append Char name
    //   $card.append(`<h3 class="card-title">${char_name}</h3>`);
    //   // Create cards content
    //   const $card_body = $('<div class="card-body">');
    //
    //
    //   // Create content for card body
    //   $card_body.append(`<p class="card-text">STATUS: ${char_status}</p><hr>`);
    //   $card_body.append(`<p class="card-text">SPECIES: ${char_species}</p><hr>`);
    //   $card_body.append(`<p class="card-text">GENDER: ${char_gender}</p><hr>`);
    //   $card_body.append(`<p class="card-text">ORIGIN: ${char_origin}</p><hr>`);
    //   $card_body.append(`<p class="card-text">LAST<br>LOCATION: ${char_location}</p><hr>`);
    //
    //   $card.append($card_body);
    //   $(`#${row_counter}`).append($card);
    //   if (counter === 4) {
    //     counter = 0;
    //     row_counter++;
    //   }
    // }

    // for (let i = 1; i < 494; i++) {
    //     //var char_pages_URL = 'https://rickandmortyapi.com/api/character/?page=' + i;
    //     var char_pages_URL = 'https://rickandmortyapi.com/api/character/' + i;
    //
    //     $.ajax({
    //         url: char_pages_URL,
    //         method: 'GET'
    //     }).then(function (response) {
    //         //console.log(response);
    //         // Grab data
    //         counter++;
    //         //console.log("starting" + counter);
    //         var char_name = response.name;
    //         var char_img = response.image;
    //         var char_status = response.status;
    //         var char_species = response.species;
    //         var char_gender = response.gender;
    //         var char_origin = response.origin.name;
    //         var char_location = response.location.name;
    //         // Create Card column
    //         const $card = $(`<div class="card col-4"  id = "${char_name}">`);
    //         // Append Image
    //         $card.append(`<img class="card-image-top" src="${char_img}" alt="${char_name}">`);
    //         // Append Char name
    //         $card.append(`<h3 class="card-title">${char_name}</h3>`);
    //         // Create cards content
    //         const $card_body = $('<div class="card-body">');
    //
    //
    //         // Create content for card body
    //         $card_body.append(`<p class="card-text">STATUS: ${char_status}</p><hr>`);
    //         $card_body.append(`<p class="card-text">SPECIES: ${char_species}</p><hr>`);
    //         $card_body.append(`<p class="card-text">GENDER: ${char_gender}</p><hr>`);
    //         $card_body.append(`<p class="card-text">ORIGIN: ${char_origin}</p><hr>`);
    //         $card_body.append(`<p class="card-text">LAST<br>LOCATION: ${char_location}</p><hr>`);
    //
    //
    //         // Append card body to the card
    //         $card.append($card_body);
    //         $(`#${row_counter}`).append($card);
    //         if (counter === 4) {
    //             counter = 0;
    //             row_counter++;
    //         }
    //
    //         if (char_name.includes("Morty")) {
    //             //console.log(char_name);
    //             morty.push(response.results);
    //         }
    //         if (char_name.includes("Morty Jr's interviewer")) {
    //             morty = _.reject(morty, response.results);
    //         }
    //         if (char_name.includes("Rick")) {
    //             rick.push(response.results);
    //         }

    // console.log(char_name);


  });
});
// $("#myInput").on("keyup", function () {
//   var input, filter, row_container, row, td, i, txtValue;
//   var value = $(this).val().toLowerCase();
//   //console.log(value);
//   row = $("#cards > .row");
//   console.log(row.length);
//
//   // Loop through all table rows, and hide those who don't match the search query
//   for (let k = 0; k < row.length; k++) {
//     td = row[k].getElementsByClassName("card")[0];
//     if (td) {
//       txtValue = td.getAttribute('id');
//       if (txtValue.toLowerCase().indexOf(value) > -1) {
//         row[k].style.display = "";
//       } else {
//         row[k].style.display = "none";
//       }
//     }
//   }
// });
// })
// ;
>>>>>>> 5f91b49916d5c8e071894d14815889348478066e

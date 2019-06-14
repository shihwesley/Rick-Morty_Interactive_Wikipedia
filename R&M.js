$(document).ready(function () {
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

  // function setNewImage() {
  //     document.getElementById(img).src = "images"
  // }
  // function append() {
  //     $("#").append("<img id")
  // }

  // var morty = [];
  // var rick = [];
  var counter = 0;
  var row_counter = 1;

  //var text = ["Pickle Rick!!!", "Squirrels Morty!", "Take 2 strokes off my golf game", "Summer!", "What is my Purpose? Pass me the butter.", "Not Beebo, he's our friend! He lead us to water!", "Existence is Pain", "In a world of Rick and Mortys': Be a Rick.", "Nobody Exists on Purpose. Nobody Belongs Anywhere. We're All Going to Die."]

  for (let j = 1; j < 121; j++) {
    const $row = $(`<div class="row" id = ${j}>`);
    $('#cards').append($row);
  }

  //DO NOT DELETE THIS FOLLOWING COMMENT
 // for (let m = 1; m < 25; m++) {
 //      var char_pages_URL = 'https://rickandmortyapi.com/api/character/?page=' + m;
 //      $.ajax({
 //        url: char_pages_URL,
 //        method: 'GET'
 //      }).then(function (response) {
 //        for (let u = 0; u < 20; u++){
 //          database.ref('/characters').push({
 //            character :  response.results[u]
 //          });
 //        }
 //
 //
 //      });
 //    }
 //    for (let p = 1; p < 77; p++) {
 //      var location_URL = 'https://rickandmortyapi.com/api/location/' + p;
 //      $.ajax({
 //        url: location_URL,
 //        method: 'GET'
 //      }).then(function (response) {
 //        console.log(response);
 //        database.ref('/locations').push({
 //          location: response
 //        });
 //
 //
 //      });
 //    }
  var quote_URL = 'http://loremricksum.com/api/?paragraphs=1&quotes=1';
  database.ref('/characters').on('value', function (snapshot) {
    snapshot.forEach(function (childSnap) {
      counter++;
      var char = childSnap.val().character;
      var char_name = char.name;
      var char_img = char.image;
      var char_status = char.status;
      var char_species = char.species;
      var char_gender = char.gender;
      var char_origin = char.origin.name;
      var char_location = char.location.name;
      //console.log(childSnap.val().character.name);
      // Create Card column
      const newIndex = Math.floor(Math.random()*9);
      const $card = $(`<div class="card imageContainer"  id = "${char_name}">`);
      // Append Image
      $card.append(`<img class="card-image-top" src="${char_img}" alt="${char_name}">`);
      $.ajax({
        url: quote_URL,
        method: 'GET'
      }).then(function(data) {
        $card.append(`<div class="hoverCard"><p class="quoteText">${data.data}`);
      });
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

      $card.append($card_body);
      $(`#${row_counter}`).append($card);
      if (counter === 4) {
        counter = 0;
        row_counter++;
      }
    })
  });

  database.ref('/locations').on('value', function (snapshot) {
    //console.log(snapshot);
    var dimensions = [];
    snapshot.forEach(function (childSnap) {
      //console.log(childSnap.val());
      dimensions.push(childSnap.val().location.dimension);

      //console.log(dimen);

    });
    var dimen  = _.uniq(dimensions);
    console.log(dimen);
    for ( let r = 0; r < dimen.length; r++){
      console.log(dimen[r]);
      const $container = $('<div class="container-hover floating">');
      $container.append(`<img src="./assets/images/portal.gif" alt="${dimen[r]}" class="image">`);
      //$container.append(`<p class="dimension-name">${dimen[r]}</p>`);
      const $overlay = $('<div class="overlay"></div>');
      $overlay.append(`<div class="text">${dimen[r]}</div>`);
      $container.append($overlay);
      $('.d').append($container);
  };
});


  // $("#myInput").on("keyup", function () {
  //   $('#cards').empty();
  //   var value = $(this).val().toLowerCase();
  //   database.ref('/characters').on('value', function (snapshot) {
  //     snapshot.forEach(function (childSnap) {
  //       const char = childSnap.val().character;
  //       var char_name = char.name;
  //       if (char_name.includes(value)) {
  //         console.log(value);
  //         console.log(char_name);
  //       }
  //     });
  //   });
  // });
});
// $("#myInput").on("keyup", function () {
//   var input, filter, row_container, row, td, i, txtValue;
//   var value = $(this).val().toLowerCase();
//   //console.log(value);
//   row = $("#cards > .row");
//   console.log(row.length);

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

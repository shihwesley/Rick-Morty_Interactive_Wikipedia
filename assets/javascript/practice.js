$(document).ready(function () {
    //var queryUrl = "http://loremricksum.com/api/?paragraphs=1&quotes=1"
    var queryUrl2 = "http://loremricksum.com/api/?paragraphs=1&quotes=2"

    $("#mortyBtn").on("click", function(event) {
        event.preventDefault()
        $.ajax({
            url: queryUrl2,
            method: "GET"
        }).then(function(response) {
            var data = response.data
            console.log(data)
            for (let i = 0; i < data.length; i++ ){
                $("#mortyGroup").append(`<li class="list-group-item">${data[i]}</li>`)
            }
            //var quoteText = response
            //$("#mortyGroup").html(`<li class="list-group-item">${quoteText}</li>`)
        })
    })
})   
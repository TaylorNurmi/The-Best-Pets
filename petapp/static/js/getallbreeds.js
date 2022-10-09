
$(document).ready( function () {
    getDogBreeds();
});
var dogDiv = document.querySelector(`.dogbreed`)


function printBreedData(data, img) {
    var breed = `<div class = "dogbreed":>
                    <h2>${data.name}</h2>
                    <img class= "breedimg" src=${img.url} alt="dog">
                </div> `
    return breed
}

async function getDogBreeds() {
    var endpoint = new URL (`https://api.thedogapi.com/v1/breeds`)
    
    let response = await fetch(endpoint, headers = {"x-api-key": "live_eDVvEWU2f4QXqStdcVtwiHyB0XEqzfBCI3qwtD8rC3fbIg4pk1l3IstIJqcKqEQn"})
    
    let dogbreeds = await response.json();

    for (var i = 0; i < dogbreeds.length; i++) {
        let first = dogbreeds[i]
        var imgendpoint = new URL (`https://api.thedogapi.com/v1/images/${first.reference_image_id}`)
        let imgresponse = await fetch(imgendpoint, headers = {"x-api-key": "live_eDVvEWU2f4QXqStdcVtwiHyB0XEqzfBCI3qwtD8rC3fbIg4pk1l3IstIJqcKqEQn"})
        let breedimg = await imgresponse.json();
        dogDiv.innerHTML += printBreedData(dogbreeds[i], breedimg);
    }
}

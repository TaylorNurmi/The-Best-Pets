async function getDog() {
    let search = document.getElementById("search-input").value;

    if (!search) {
        alert("Please enter the name of a breed");
        return;
    }

    var endpoint = new URL (`https://api.thedogapi.com/v1/breeds/search?q=${ search }`)

    let response = await fetch(endpoint)

    if (response.status == 404) {
        alert("Breed not found!");
        return;
    }

    let data = await response.json();

    console.log(printJson(data))
}
function printJson(data) {
    return data[0]
}




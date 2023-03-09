const movie = {
    titile: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

function showProperties(object) {
    for (let index in object) {
        if (typeof object[index] === 'string') {
            console.log(index, object[index]);
        }
    }
}

showProperties(movie);
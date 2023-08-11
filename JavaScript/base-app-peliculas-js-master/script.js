document.getElementById('searchButton').addEventListener('click', searchMovies)

let urlBase = 'https://api.themoviedb.org/3/search/movie'
let apiKey= 'c98d87a0791b3d543f87a37131b0e9cd'
let urlPoster ='https://image.tmdb.org/t/p/w500'




function searchMovies(){

    let searchInput = document.getElementById('searchInput').value
    
    fetch(`${urlBase}?api_key=${apiKey}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))

}

function displayMovies(movies){
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML= ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p>No se encontraron resultados</p> '
        return
    }

     movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')
        
        
        let title = document.createElement('h2')
        title.textContent = movie.title


        let releaseDate = document.createElement('p')
        releaseDate.textContent = "Fecha de Estreno: " + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = "Reseña: " + movie.overview

        let posterPath = urlPoster + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath


        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
     })
}
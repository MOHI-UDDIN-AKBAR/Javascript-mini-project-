const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const img_path = "https://image.tmdb.org/t/p/w1280";
const search_api = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let main = document.querySelector("#main")
let form = document.getElementById("form")
getMovies(api_url)

async function getMovies(url) {
    const resp = await fetch(url)
    const resp_data = await resp.json()
    let movie_data = resp_data.results;
    console.log(movie_data)
    show_movies(movie_data)
}

function show_movies(all_movie) {
    main.innerHTML = ""

    all_movie.forEach(movie => {
        const {
            poster_path,
            title,
            vote_average,
            overview
        } = movie
        let new_div = document.createElement("div")
        new_div.classList.add("movieInfo")
        new_div.innerHTML =
            `
        <img src="${img_path+poster_path}" alt="${title}" class="img">
        <div class="footer">
        <kbd>${title}</kbd>
        <span class="${movie_rate(vote_average)}">${vote_average}</span>
        </div>
        <div class="details">
        <h3 class="overview">overview </h3>
        ${overview}
        </div>
        `

        main.appendChild(new_div)
    });
}

function movie_rate(vote) {
    const vote_rate = document.querySelector(".footer span")
    if (vote > 8) {
        return "green"
    } else if (vote > 5) {
        return "yellow"
    } else {
        return "red"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let movie_name = input.value
    // console.log(movie_name)
    search_movies(movie_name)
})

function search_movies(movie_name) {
    let search_term = search_api + movie_name
    if (search_term) {
        getMovies(search_term)
        input.value = ""
    }
}
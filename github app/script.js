const apiUrl = "https://api.github.com/users/"
const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")
// getData("Arafat-ops")
getData("Arafat-Ops")
async function getData(userUrl) {
    const resp = await fetch(apiUrl + userUrl)
    let respData = await resp.json()
    // console.log(respData)
    showProfile(respData)
    getRepository(userUrl)

}
async function getRepository(userName) {
    const resp = await fetch(apiUrl + userName + "/repos")
    let respData = await resp.json()
    addRepository(respData)
}

function showProfile(user_data) {
    const {
        name,
        avatar_url,
        bio,
        followers,
        following,
        public_gists
    } = user_data
    const profileCard =
        `
        <div class="img">
        <img src="${avatar_url}" alt="${name}">
    </div>
    <div class="profileInfo">
        <h2>${name}</h2>
        <p>${bio}</p>
        <ul>
            <li>${public_gists}
<strong>followers</strong>
            </li>
            <li>${followers}<strong>following</strong></li>
            <li>${following}<strong>repos</strong></li>
        </ul>
        <div id="repos"></div>
    </div>
    `
    main.innerHTML = profileCard
}

function addRepository(repositories) {
    const repos = document.getElementById("repos")
    // console.log(repositories);
    repositories.sort((a, b) => {
        b.stargazers_count - a.stargazers_count
    }).slice(0, 5).forEach(repo => {
        const reposEl = document.createElement("a")
        reposEl.classList.add("repository")
        reposEl.href = repo.html_url
        reposEl.target = "blank"
        reposEl.innerText = repo.name
        repos.appendChild(reposEl)
    });
    // console.log(repositories[0].name)

}



form.addEventListener("submit", (e) => {
    e.preventDefault()
    const search_value = search.value
    if (search_value) {
        getData(search_value)
        search.value = ""
    }
    // console.log(search_value);
})
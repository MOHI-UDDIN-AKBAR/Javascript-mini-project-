const form = document.querySelector("#form")
const input = document.querySelector(".input")
const ul = document.querySelector(".list")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo() {
    let text = input.value
    console.log(text);
    let li = document.createElement("li")
    if (text != "") {
        li.innerHTML = text
        ul.appendChild(li)
    }
    input.value = ""
    li.addEventListener("click", () => {
        li.classList.toggle("completed")
        updateLs()
    })
    // li.addEventListener("contextmenu", () => {
    //     li.remove()
    // })
    li.addEventListener("dblclick", () => {
        li.remove()
        updateLs()
    })
    updateLs()
}

function updateLs() {
    let allTodoLi = document.querySelectorAll("li")
    let todos = []
    allTodoLi.forEach(todo => {

        todos.push({
            text: todo.innerText,
            completed: todo.classList.contains("completed")
        })
    })
    console.log(allTodoLi);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodoLs() {
    let todo = JSON.parse(localStorage.getItem("todos"))
    console.log(todo)
    return todo
}
getTodoLs()
window.addEventListener("load", () => {
    let allTodo = getTodoLs()
    // console.log(allTodo.value);
    if (allTodo) {
        allTodo.forEach(todo => {
            let li = document.createElement("li")
            li.innerHTML = todo.text
            ul.appendChild(li)
            li.addEventListener("click", () => {
                li.classList.toggle("completed")
                updateLs()
            })

            li.addEventListener("dblclick", () => {
                li.remove()
                updateLs()

            })
        })
    }

})
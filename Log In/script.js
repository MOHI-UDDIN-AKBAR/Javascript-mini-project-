const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const formOne = document.getElementById("form1")
const formTwo = document.getElementById("form2")
const formThree = document.getElementById("form3")
const buttonOne = document.getElementById("btn1")
const buttonTwo = document.getElementById("btn2")
const buttonThree = document.getElementById("btn3")
const thank = document.querySelector("#thank")

function userPassword() {
    buttonThree.addEventListener("click", (e) => {
        e.preventDefault()

        let userPassword = password.value
        console.log(password.value)
        // console.log(userEmail.include('@'))
        if (userPassword.length < 1) {
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "#1f2633"
            thank.classList.remove("nonactive")
            formThree.classList.add("nonactive")
        }
    })
}



function userEmail() {
    buttonTwo.addEventListener("click", (e) => {
        e.preventDefault()
        let userEmail = email.value
        console.log(userEmail)
        if (userEmail.length < 1) {
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "#1f2633"
            formThree.classList.remove("nonactive")
            formTwo.classList.add("nonactive")
            userPassword()
        }
    })
}

function userName() {
    buttonOne.addEventListener("click", (e) => {
        e.preventDefault()
        let userName = name.value
        console.log(userName)
        if (userName.length < 1) {
            document.body.style.backgroundColor = "red"
        } else {
            document.body.style.backgroundColor = "#1f2633"
            formTwo.classList.remove("nonactive")
            formOne.classList.add("nonactive")
            userEmail()
        }
    })
}




userName()
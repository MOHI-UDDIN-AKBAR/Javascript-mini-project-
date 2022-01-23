const form = document.querySelector("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const password2Value = password2.value
    if (usernameValue === "") {
        setError(username, "username is empty")
    } else {
        setSuccess(username)
    }
    if (emailValue === "") {
        setError(email, "email is empty")
    } else if (!isEmail(emailValue)) {
        setError(email, "email is not valid")
    } else {
        setSuccess(email)
    }
    if (passwordValue === "") {
        setError(password, "password is empty")
    } else {
        setSuccess(password)
    }
    if (password2Value === "") {
        setError(password2, "password two is empty")
    } else if (passwordValue !== password2Value) {
        setError(password2, "passwords does not match")
    } else {
        setSuccess(password2)
    }
})

function setError(input, errorText) {
    const formTools = input.parentElement;
    const small = formTools.querySelector("small")
    small.innerHTML = errorText
    formTools.className = "form-tools error"
}

function setSuccess(input) {
    const formTools = input.parentElement;
    formTools.className = "form-tools success"
}

function isEmail(emailValue) {

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailValue);
}
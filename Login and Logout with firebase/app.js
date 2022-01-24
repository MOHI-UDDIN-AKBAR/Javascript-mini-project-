const form = document.getElementById("form")
const userName = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const passwordTwo = document.querySelector("#password2")
const logIn = document.getElementById("login")
const createAccount = document.querySelector("#create")
const signUp = document.querySelector("#signup")
//checking general rules for login
function rulesOfEmailAndPassword() {
    const emailValue = email.value
    const passwordValue = password.value
    // console.log(emailValue)
    if (emailValue === "") {
        setError(email, "email can not be empty")
    } else if (!isEmail(emailValue)) {
        setError(email, "email is not valid")
    } else {
        setSuccess(email)
    }
    if (passwordValue === "") {
        setError(password, "password can not be empty")
    } else if (passwordValue.length < 8) {
        setError(password, "length must greater than 7")
    } else {
        setSuccess(password)
        checkUserInfo(emailValue, passwordValue)
    }
}
//checking general rules for sign up
function checkRules() {
    const userValue = userName.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordTwoValue = passwordTwo.value
    if (userValue === "") {
        setError(userName, "username can not be empty")
    } else {
        setSuccess(userName)
    }
    if (emailValue === "") {
        setError(email, "username can not be empty")
    } else if (!isEmail(emailValue)) {
        setError(email, "email is not valid")
    } else {
        setSuccess(email)
    }
    if (passwordValue === "") {
        setError(password, "password can not be empty")
    } else if (passwordValue.length < 8) {
        setError(password, "length must greater than 7")
    } else {
        setSuccess(password)
    }
    // console.log(passwordTwoValue.length)
    if (passwordTwoValue.length < 7) {
        setError(passwordTwo, "length must greater than 7")
    } else if (passwordTwoValue !== passwordValue) {
        setError(passwordTwo, "passwords does not match")
    } else {
        setSuccess(passwordTwo)
        getInfoOfUser(userValue, emailValue, passwordValue)
    }
}
//if user do not put data or put wrong data
function setError(input, message) {
    const formTools = input.parentElement;
    const small = formTools.querySelector("small")
    small.innerHTML = message
    formTools.className = "form-tools error"
}
//if user put data correctly
function setSuccess(input) {
    const formTools = input.parentElement;
    formTools.className = "form-tools success"
}
//if email is correct return true else false
function isEmail(input) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
}

//if user already have a account
function checkUserInfo(email, password) {
    console.log(email, password);
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            if (doc.data().email === email && doc.data().password === password) {
                // console.log('congratulation')
                let success = document.createElement("div")
                success.innerHTML = `<h1>CONGRATULATIONS ❤️</h1><button>Log Out</button>`
                document.body.innerHTML = ``
                document.body.style.padding = "2rem"
                document.body.style.backgroundColor = "white"
                success.classList.add("logOut")
                document.body.appendChild(success)
                success.addEventListener("click", (e) => {
                    window.location.reload()
                })
            }

        });
    });

}

//getting user information while creating a account
function getInfoOfUser(username, email, password) {
    console.log(username, email, password)

    db.collection("users").add({
            userName: username,
            email: email,
            password: password
        })
        .then((docRef) => {
            window.location.reload()
            alert("sign up successfully !")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}
//when user log in
logIn.addEventListener("click", (e) => {
    e.preventDefault()
    rulesOfEmailAndPassword()
})
//when user sign in
function signUpAccount() {
    signUp.classList.remove("active")
    logIn.classList.add("active")
    createAccount.classList.add("active")
    signUp.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("arafat")
        checkRules()
    })


}
// creating a account
createAccount.addEventListener("click", (e) => {
    email.value = ""
    password.value = ""
    e.preventDefault()
    const formTools = document.querySelectorAll(".form-tools")
    const heading = document.querySelector(".heading")
    formTools.forEach(formTool => {
        heading.classList.remove("active")
        formTool.classList.remove("active")
        formTool.classList.remove("success")
        formTool.classList.remove("error")


    })
    signUpAccount()
})
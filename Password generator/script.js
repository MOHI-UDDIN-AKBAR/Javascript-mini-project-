const result = document.querySelector(".results span");
const refresh = document.querySelector(".results button");
const size = document.querySelector("#length");
const form = document.querySelector("#form");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbols = document.querySelector("#symbols");
const submit = document.querySelector("#ge-password");
const include = document.querySelectorAll("input[type=checkbox]");


let uppercase_text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase_text = "abcdefghijklmnopqrstuvwxyz";
let numbers_text = "0123456789";
let symbols_text = "~`!@#$%^&*()/_-+={}[]:>;',</?*-+";

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const length = size.value;
    // if (length > 20) {
    //     alert("Please password length have to be less or equal to 20")
    // }
    console.log(length);
    generatePassword(length)

})

function generatePassword(length) {
    let results = "";
    for (let i = 0; i < length; i++) {
        let x = getCondition()

        results += x.charAt(Math.random() * x.length);
    }
    result.innerHTML = results;
}
refresh.addEventListener("click", () => {
    result.innerHTML = "";
    password = [];
    size.value = ""
    uncheckAll();
});

function uncheckAll() {
    for (var i = 0; i < include.length; i++) {
        include[i].checked = false;
    }
}

function getCondition() {
    let xs = []
    if (uppercase.checked) {
        xs.push(uppercase_text)
    }
    if (lowercase.checked) {
        xs.push(lowercase_text)

    }
    if (number.checked) {
        xs.push(numbers_text)

    }
    if (symbols.checked) {
        xs.push(symbols_text)
    }
    return xs[Math.floor(Math.random() * xs.length)]
}
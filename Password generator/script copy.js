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
    if (length > 20) {
        alert("Please password length have to be less or equal to 20")
    }
    console.log(length);
    let text = "";
    if (uppercase.checked && lowercase.checked && number.checked && symbols.checked) {
        text = uppercase_text + lowercase_text + numbers_text + symbols_text
        generatePassword(text, length)
    } else if (lowercase.checked && number.checked && symbols.checked) {
        text = lowercase_text + numbers_text + symbols_text
        generatePassword(text, length)

    } else if (uppercase.checked && number.checked && symbols.checked) {
        text = uppercase_text + numbers_text + symbols_text
        generatePassword(text, length)
    } else if (uppercase.checked && lowercase.checked && symbols.checked) {
        text = uppercase_text + lowercase_text + symbols_text
        generatePassword(text, length)
    } else if (uppercase.checked && lowercase.checked && number.checked) {
        text = uppercase_text + lowercase_text + numbers_text
        generatePassword(text, length)
    } else if (uppercase.checked && lowercase.checked) {
        text = uppercase_text + lowercase_text
        generatePassword(text, length)
    } else if (uppercase.checked && number.checked) {
        text = uppercase_text + numbers_text
        generatePassword(text, length)
    } else if (uppercase.checked && symbols.checked) {
        text = uppercase_text + symbols_text
        generatePassword(text, length)
    } else if (lowercase.checked && number.checked) {
        text = lowercase_text + numbers_text
        generatePassword(text, length)
    } else if (lowercase.checked && symbols.checked) {
        text = lowercase_text + symbols_text
        generatePassword(text, length)
    } else if (number.checked && symbols.checked) {
        text = numbers_text + symbols_text
        generatePassword(text, length)
    } else if (uppercase.checked) {
        text = uppercase_text
        generatePassword(text, length)
    } else if (lowercase.checked) {
        text = lowercase_text
        generatePassword(text, length)
    } else if (number.checked) {
        text = numbers_text
        generatePassword(text, length)
    } else if (symbols.checked) {
        text = symbols_text
        generatePassword(text, length)
    }


})

function generatePassword(text, length) {
    let results = "";
    for (let i = 0; i < length; i++) {
        results += text.charAt(Math.random() * text.length);
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
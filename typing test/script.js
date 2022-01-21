console.clear();
const textApiUrl = "https://api.quotable.io/random?minLength=100&maxLength=150";
const text = document.getElementById("text");
const inputText = document.getElementById("input-text");
const startTest = document.getElementById("start-btn");
const stopTest = document.getElementById("stop-btn");
const results = document.querySelector(".results")
const timeOnScreen = document.getElementById("time")
const speed = document.getElementById("speed")

let time = 0;
let allMistake = 0;
let screenText;
let start;
let randomTextLength = 0
//getting random text from api
async function getText() {
    const res = await fetch(textApiUrl);
    const resData = await res.json();
    const randomText = resData.content;
    screenText = resData.content;
    splitRandomText(randomText);
    // getRandomText(randomText);
}
getText();
// split random text
const splitRandomText = (randomText) => {
    let randomChar = randomText.split("");
    randomChar.forEach((char) => {
        displayText(char);
    });
};
//putting random text in screen
function displayText(Char) {
    let span = document.createElement("span");
    // span.classList.add("primary")
    span.innerHTML += `<span class="text">${Char}</span>`;
    text.appendChild(span);
}
//situation after window load
window.addEventListener("load", () => {
    inputText.disabled = true;
    stopTest.style.display = "none";
    results.style.display = "none"

});
//after typing start-test button
startTest.addEventListener("click", () => {
    beginTest();
});

function beginTest() {
    inputText.disabled = false;
    startTest.style.display = "none";
    stopTest.style.display = "block";
    start = setInterval(() => {
        time++
        timeOnScreen.innerText = time + "s"
    }, 1000)
}
//getting value from textarea
inputText.addEventListener("input", () => {
    valueFromTextarea();
});

function valueFromTextarea() {
    const characters = inputText.value;
    compareCharacters(characters);
}
//comparing 
function compareCharacters(inputCharacters) {
    let span = document.querySelectorAll("#text .text");
    let inputTextValue = inputCharacters.split("");
    randomTextLength = span.length
    span.forEach((char, index) => {
        if (char.innerText == inputTextValue[index]) {
            char.classList.add("success");
        } else if (inputTextValue[index] == undefined) {
            if (char.classList.contains("success")) {
                char.classList.remove("success");
            }
        } else {
            if (!char.classList.contains("fail")) {
                char.classList.add("fail");
                allMistake++
                const mistakes = document.querySelector("#mistakes")
                mistakes.innerText = allMistake

            }
        }
    });
}
//after finishing the task
stopTest.addEventListener("click", () => {
    startTest.style.display = "block"
    stopTest.style.display = "none"
    inputText.disabled = true;
    const timeOnScreen = document.getElementById("time")
    console.log(allMistake)
    const accuracy = document.getElementById("accuracy")
    let timeCount = ((inputText.value.length - allMistake) / inputText.value.length).toFixed(2) * 100
    if (timeCount) {

        accuracy.innerText = timeCount + "%"
    } else {
        accuracy.innerText = "0%"
    }
    let speedCount = ((inputText.value.length / 5 / time) * 100).toFixed(2)
    speed.innerText = speedCount + "wpm"
    timeOnScreen.innerText = time + "s"
    clearInterval(start)
    console.log(randomTextLength)
    console.log(inputText.value.length);
    results.style.display = "flex"
})
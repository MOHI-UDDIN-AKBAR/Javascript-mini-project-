const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const clear = document.querySelector("#clear")
let screenSize = document.getElementById("size")
let screeColor = document.getElementById("color")
let x = undefined
let y = undefined
let size = screenSize.innerHTML
let mousePressed = false
let color = "black"
increase.addEventListener("click", (e) => {
    size++
    screenSize.innerHTML = size
})
decrease.addEventListener("click", (e) => {
    size--
    screenSize.innerHTML = size
})
screeColor.addEventListener("change", (e) => {
    color = e.target.value
})
canvas.addEventListener("mouseup", (e) => {
    x = undefined
    y = undefined
    mousePressed = false


})
canvas.addEventListener("mousedown", (e) => {
    mousePressed = true
    x = e.offsetX
    y = e.offsetY

})
canvas.addEventListener("mousemove", (e) => {
    if (mousePressed) {
        let x2 = e.offsetX
        let y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }

})

function drawCircle(x, y) {


    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = size * 2
    ctx.strokeStyle = color
    ctx.stroke()
    // ctx.fill()
}
clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
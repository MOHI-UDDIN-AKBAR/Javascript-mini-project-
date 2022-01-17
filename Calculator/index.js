console.clear()
let h1 = document.querySelector('h1')
let button = document.querySelectorAll('button')
let count = 0
Array.from(button).map(x => {
  x.addEventListener('click', (e) => {
    count++
    let text = e.target.textContent
    if (count == 15 || e.target.textContent == '=') {
      h1.innerHTML = calculate(h1.innerHTML)
    }
    if (text == 'x') {
      text = '*'
    }else if (text == 'C') {
      h1.innerHTML = 0
    }
    if (text)
      if (count == 1) {
        h1.textContent = text
    }
    if (count > 1) {
      if (text == '=') {
        h1.innerHTML = calculate(h1.innerHTML)
      }else if (text == 'D') {
        h1.innerHTML.length = h1.innerHTML.length - 1
      }
      else if (text == 'C') {
        h1.innerHTML = 0
        count = 0
      }else if (h1.innerHTML.length > 13) {
        h1.innerHTML = h1.innerHTML
      }else {
        h1.innerHTML = h1.innerHTML + text
      }
    }
  })
})
let calculate = (text) => {
  return eval(text)
}

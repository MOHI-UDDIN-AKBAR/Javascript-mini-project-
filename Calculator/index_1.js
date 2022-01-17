let input = document.querySelector('#input')
let button = document.querySelectorAll('button')
let count = 0
input.value = 0
Array.from(button).map(x => {
  x.addEventListener('click', (e) => {
    count++
    let text = e.target.innerHTML
    if (input.value == 0 && text != 'D' && text != 'C') {
      input.value = text
    }else if (text == '=') {
      input.value = calculate(input.value)
    }else if (text == 'D') {
      if (input.value.length == 1) {
        input.value = 0
      }
      else if (input.value != '') {
        input.value = input.value.slice(0, -1)
      }
    }else if (text == 'C') {
      input.value = 0
    }else {
      input.value = input.value + text
    }
  })
})
let calculate = (text) => {
  return eval(text)
}

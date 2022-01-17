let quiz_Data = [
  {
    question: 'What is your name ?',
    a: 'Arafat',
    b: 'Rifat',
    c: 'Samir',
    d: 'Jayed',
    correct: 'a'
  },
  {
    question: 'How old are you ?',
    a: 15,
    b: 24,
    c: 33,
    d: 22,
    correct: 'b'
  }, {
    question: 'what is your major ?',
    a: 'CSE',
    b: 'EEE',
    c: 'Management',
    d: 'psychology',
    correct: 'a'
  }, {
    question: 'which is most popular language ?',
    a: 'Javascript',
    b: 'C++',
    c: 'Java',
    d: 'Python',
    correct: 'a'
  }, {
    question: 'React.js is  ?',
    a: 'Javascript framework',
    b: 'javascript library',
    c: 'Python framework',
    d: 'None',
    correct: 'b'
  }
]
let current_question = document.getElementById('question')
let op_a = document.querySelector('#list li .a_text')
let op_b = document.querySelector('#list li .b_text')
let op_c = document.querySelector('#list li .c_text')
let op_d = document.querySelector('#list li .d_text')
let submit = document.querySelector('.quiz-heading .submit')
// console.log(answer)
let question_no = 0
let set_data = () => {
  const current_quiz_data = quiz_Data[question_no]
  current_question.innerText = current_quiz_data.question
  op_a.innerText = current_quiz_data.a
  op_b.innerText = current_quiz_data.b
  op_c.innerText = current_quiz_data.c
  op_d.innerText = current_quiz_data.d
  deselect()
}
set_data()
const answer = document.querySelectorAll('.answer')
function get_selected () {
  let selected = undefined
  answer.forEach((x) => {
    if (x.checked) {
      selected = x.id
    }
  })
  return selected
}
function deselect () {
  const answer = document.querySelectorAll('.answer')
  answer.forEach((x) => {
    x.checked = false
  })
}
let score = 0
submit.addEventListener('click', () => {
  let answer = get_selected()
  console.log(answer, quiz_Data[question_no].correct)
  if (answer === quiz_Data[question_no].correct) {
    score++
  }
  if (answer) {
    question_no++
    if (question_no < quiz_Data.length) {
      set_data()
    }else {
      let quiz_heading = document.querySelector('.quiz-heading')
      quiz_heading.innerHTML = `<h2>Your score is ${score}/${quiz_Data.length}</h2>`
      quiz_heading.style.border = '1px solid #1f2633'
      quiz_heading.style.borderRadius = '7px'
    }
  }
})

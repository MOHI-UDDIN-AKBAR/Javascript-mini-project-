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
let current_question = document.querySelector('#question')
// op=option
let op_1 = document.querySelector('.a_text')
let op_2 = document.querySelector('.b_text')
let op_3 = document.querySelector('.c_text')
let op_4 = document.querySelector('.d_text')
let submit = document.querySelector('.submit')
let quiz_no = 0
function set_data () {
  unchecked()
  const current_quiz = quiz_Data[quiz_no]
  current_question.innerText = current_quiz.question
  op_1.innerText = current_quiz.a
  op_2.innerText = current_quiz.b
  op_3.innerText = current_quiz.c
  op_4.innerText = current_quiz.d
}
// answer_el=answer element
let answer_el = document.querySelectorAll('li .answer')
function get_answer () {
  let answer = undefined
  answer_el.forEach(x => {
    if (x.checked) {
      answer = x.id
    }
  })
  return answer
}

let unchecked = () => {
  answer_el.forEach(x => {
    if (x.checked) {
      x.checked = false
    }
  })
}

set_data()
let score = 0
submit.addEventListener('click', function () {
  let answer = get_answer()
  if (answer == quiz_Data[quiz_no].correct) {
    score++
  }
  if (answer) {
    quiz_no++
    if (quiz_no < quiz_Data.length) {
      set_data()
    }else {
      let quiz_results = document.querySelector('.quiz-heading')
      quiz_results.innerHTML = `Your score is ${score}/${quiz_Data.length}`
      quiz_results.classList.add('add')
    }
  }
})

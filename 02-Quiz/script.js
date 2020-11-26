const quizData = [
  {
    question: 'What does HTML stand for?',
    a: 'Hyper Text Markup Language',
    b: 'home Tool Markup Language',
    c: 'Hyperlinks and Text Markup Language',
    correct: 'a',
  },
  {
    question: 'Who is making the Web standards?',
    a: 'Google',
    b: 'Mozilla',
    c: 'The World Wide Web Consortium',
    correct: 'c',
  },
  {
    question: 'Choose the correct HTML element for the largest heading:',
    a: '&lt;heading&gt;',
    b: '&lt;h1&gt;',
    c: '&lt;h6&gt;',
    correct: 'b',
  },
  {
    question: 'What is the correct HTML element for inserting a line break?',
    a: '&lt;lb&gt;',
    b: '&lt;break&gt;',
    c: '&lt;br&gt;',
    correct: 'c',
  },
  {
    question: 'hat is the correct HTML for adding a background color?',
    a: "&lt;body bg = 'yellow'&gt;",
    b: "&lt;body style = 'background-color: yellow;'&gt;",
    c: '&lt;background>yellow</background&gt;',
    correct: 'b',
  },
  {
    question: 'Choose the correct HTML element to define important text',
    a: '&lt;strong&gt;',
    b: '&lt;b&gt;',
    c: '&lt;important&gt;',
    correct: 'a',
  },
  {
    question: 'Choose the correct HTML element to define emphasized text',
    a: '&lt;italic&gt;',
    b: '&lt;i&gt;',
    c: '&lt;em&gt;',
    correct: 'c',
  },
];

const correct = document.querySelector('.correct');
const wrong = document.querySelector('.wrong');
const timeRemaining = document.querySelector('.time-remaining');

const quizNumber = document.querySelector('.quiz-number');
const quizBody = document.querySelector('.quiz-body');
const quizContent = document.querySelector('.quiz-content');
const aText = document.querySelector('.a_text');
const bText = document.querySelector('.b_text');
const cText = document.querySelector('.c_text');
const answerEls = document.querySelectorAll('.answer');

const total = quizData.length;

const sendBtn = document.querySelector('.send-btn');

//quiz content
let currentQuiz = 0;
let correct_score = 0;
let wrong_score = 0;

correct.innerHTML = `<i class="fas fa-times" style="width: 20px"></i> ${correct_score} correct`;
wrong.innerHTML = `<i class="fas fa-times" style="width: 20px"></i> ${wrong_score} wrong`;

function loadQuiz() {
  deselectAnswers();
  quizNumber.innerHTML = `Question ${currentQuiz + 1} ( ${
    total - (currentQuiz + 1)
  } remaining)`;
  quizBody.innerHTML = quizData[currentQuiz].question;
  aText.innerHTML = quizData[currentQuiz].a;
  bText.innerHTML = quizData[currentQuiz].b;
  cText.innerHTML = quizData[currentQuiz].c;
}
loadQuiz();
function getSelected() {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

sendBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    console.log(answer === quizData[currentQuiz].correct);
    if (answer == quizData[currentQuiz].correct) {
      correct_score++;
      correct.innerHTML = `<i class="fas fa-times" style="width: 20px"></i> ${correct_score} correct`;
    } else if (answer != quizData[currentQuiz].correct) {
      wrong_score++;
      wrong.innerHTML = `<i class="fas fa-times" style="width: 20px"></i> ${wrong_score} wrong`;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizContent.innerHTML = `
                <h2>You answered correctly at ${correct_score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});

//Countdown timer
var timeLeft = 1800;
function countdown() {
  const minutes = Math.floor((timeLeft / 60) % 60);
  const seconds = timeLeft % 60;

  if (timeLeft > 0) {
    timeRemaining.innerHTML = `<i class="fas fa-clock"></i> ${formatTime(
      minutes
    )}: ${formatTime(seconds)}`;
  } else {
    timeRemaining.innerHTML = `<i class="fas fa-clock"></i> 00:00`;
  }
  timeLeft--;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

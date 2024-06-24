const question = document.querySelector('#question');
const options = Array.from(document.getElementsByClassName('option'));

let availableQuestions;
let counter = 0;

const questions = [
  {
    question: 'daad',
    option1: '321',
    option2: '322',
    option3: '323',
    option4: '324',
    answer: '1',
  },
  {
    question: 'ggf',
    option1: '321',
    option2: '322',
    option3: '323',
    option4: '324',
    answer: '1',
  },
  {
    question: 'aqqq',
    option1: '321',
    option2: '322',
    option3: '323',
    option4: '324',
    answer: '1',
  },
];

const handleGame = () => {
  availableQuestions = [...questions];
  handleQuestion();
};

const handleQuestion = () => {
  counter++;
  const index = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[index];
  question.innerHTML = currentQuestion.question;

  options.forEach((option) => {
    const dataset = option.dataset['option'];
    option.innerHTML = currentQuestion['option' + dataset];
  });

  availableQuestions.splice(index, 1);
};

handleGame();

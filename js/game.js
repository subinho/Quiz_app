const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option'));
const loader = document.querySelector('#loader');
const game = document.querySelector('#game');
const progress = document.getElementById('progress');

let availableQuestions;
let counter = 1;
let score = 0;

let questions = [];

fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
  .then((response) => {
    if (!response.ok) {
      throw new Error('No response!');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    questions = data.results.map((question) => {
      const formattedQuestion = {
        question: question.question,
      };

      const answerOptions = [...question.incorrect_answers];
      const getRandomIndex = Math.floor(Math.random() * 3) + 1;
      formattedQuestion.answer = getRandomIndex;
      answerOptions.splice(
        formattedQuestion.answer - 1,
        0,
        question.correct_answer
      );

      answerOptions.forEach((option, index) => {
        formattedQuestion[`option${index + 1}`] = option;
      });
      return formattedQuestion;
    });

    handleGame();
  })
  .catch((error) => {
    console.error(error);
  });

const handleGame = () => {
  availableQuestions = [...questions];
  localStorage.setItem('quizAppScore', score);
  counter = 1;
  handleQuestion();
  game.classList.remove('hidden');
  loader.classList.add('hidden');
};

const handleQuestion = () => {
  if (availableQuestions.length === 0) {
    return window.location.assign('end.html');
  }
  counter++;
  progress.innerHTML = `${counter} / ${questions.length}`;
  const index = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[index];
  question.innerHTML = currentQuestion.question;

  options.forEach((option) => {
    const dataset = option.dataset['option'];
    option.innerHTML = currentQuestion['option' + dataset];
  });

  availableQuestions.splice(index, 1);
};

const handleOptionClick = (event) => {
  const selectedOption = event.target;
  const selectedAnswer = selectedOption.dataset['option'];
  const isCorrect = selectedAnswer == currentQuestion.answer;

  if (isCorrect) {
    score++;
    localStorage.setItem('quizAppScore', score);
  }

  selectedOption.classList.add(
    isCorrect ? 'bg-green-500' : 'bg-red-500',
    'text-white'
  );

  setTimeout(() => {
    selectedOption.classList.remove('bg-green-500', 'bg-red-500', 'text-white');
    handleQuestion();
  }, 1000);
};

options.forEach((option) => {
  option.addEventListener('click', handleOptionClick);
});

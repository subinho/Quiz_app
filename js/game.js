const question = document.querySelector('#question');
const option = Array.from(document.getElementsByClassName('option'));

const questions = [
  {
    question: 'daad',
    option1: '321',
    option2: '322',
    option3: '323',
    option4: '324',
    answer: '321',
  },
  {
    question: 'ggf',
    option1: '321',
    option2: '322',
    option3: '323',
    option4: '324',
    answer: '321',
  },
  {
    question: 'aqqq',
    option1: '321',
    option2: '322',
    option3: '323',
    option4: '324',
    answer: '321',
  },
];

const handleGame = () => {
  const availableQuestions = [...questions];
};

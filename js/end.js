document.addEventListener('DOMContentLoaded', () => {
  const showScore = document.querySelector('#score');
  const currentScore = localStorage.getItem('quizAppScore');

  showScore.innerHTML += ` ${currentScore}`;
});

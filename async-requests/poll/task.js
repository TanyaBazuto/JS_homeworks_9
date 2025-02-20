const pollAnswers = document.getElementById('poll__answers');
const pollQuestion = document.getElementById('poll__title');
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) {
    return;
  } else if (xhr.readyState == 4 && xhr.status == 200) {
    const data = JSON.parse(xhr.responseText).data;
    pollQuestion.innerText = data.title;

    for (const answer of data.answers) {
      const button = `<button class='poll__answer'>${answer}</button>`;
      pollAnswers.insertAdjacentHTML('beforeEnd', button);
    }

    const pollButtons = document.querySelectorAll('.poll__answer');
    for (const pollButton of pollButtons) {
      pollButton.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
    }
  } else {
    alert(`Ошибка! Код ответа: ${xhr.status}.`);
  }
};
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

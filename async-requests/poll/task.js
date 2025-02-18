const pollAnswers = document.getElementById('poll__answers')
pollQuestion = document.getElementById('poll__title')
xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState == xhr.DONE) {
    const data = JSON.parse(xhr.responseText).data
    pollQuestion.innerText = data.title

    for (const answer of data.answers) {
      const button = `<button class='poll__answer'>${answer}</button>`
      pollAnswers.insertAdjacentHTML('beforeEnd', button)
    }

    const pollButtons = document.querySelectorAll('.poll__answer')
    for (const pollButton of pollButtons) {
      pollButton.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!')
      })
    }
  }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()

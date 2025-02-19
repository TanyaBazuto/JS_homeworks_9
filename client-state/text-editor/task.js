const editor = document.getElementById('editor')
text = localStorage.getItem('saveText')
button = document.getElementById('clear')

if (text) {
  editor.value = localStorage.getItem('saveText')
} else {
  editor.addEventListener('input', () => {
    localStorage.setItem('saveText', editor.value)
  })
}

const progress = document.getElementById('progress');
const form = document.getElementById('form');

document.forms.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(document.forms.form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
 
  xhr.onload = () => {
    if (xhr.status !== 201) {
      alert(`Ошибка. Код: ${xhr.status}`);
    };
  };

  xhr.upload.onprogress = (e) => {
    progress.value = e.loaded / e.total;
  };      
  
  xhr.send(formData);
});

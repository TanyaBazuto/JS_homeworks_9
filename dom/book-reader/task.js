const book = document.getElementsByClassName('book')[0];
const fontSize = document.getElementsByClassName('font-size');


for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', function(event){
        document.getElementsByClassName('font-size_active')[0].classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        event.preventDefault();

        if (event.target.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
        }
        if (event.target.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-big');
        }
    })
}

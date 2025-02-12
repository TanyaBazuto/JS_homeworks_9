const revealBlocks = document.getElementsByClassName('reveal');

let isVisible = function(el) {
    const { top, bottom } = el.getBoundingClientRect()
    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true
}

window.addEventListener('scroll', function () {
    for (let i = 0; i < revealBlocks.length; i++) {
        if (isVisible(revealBlocks[i]) === true ) {
            revealBlocks[i].classList.add('reveal_active');
        } else {
            revealBlocks[i].classList.remove('reveal_active');
        }
    }
});

const rotatorAds = document.getElementsByClassName('rotator__case');
let last;
let current = 0;

function ads() {
    last = current;
    current += 1;

    for (let i = 0; i < rotatorAds.length; i++) {
        rotatorAds[i].classList.remove('rotator__case_active');
        
        if (current == rotatorAds.length) {
            current = 0;
        }
    }
    rotatorAds[current].classList.add('rotator__case_active');
}

setInterval(ads, 1000);

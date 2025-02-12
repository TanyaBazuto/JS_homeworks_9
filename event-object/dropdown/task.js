let dropValue = document.querySelector('.dropdown__value');
let dropList = Array.from(document.querySelectorAll('.dropdown__link'));

function dropdownMenu() {
    let dropdownList = document.querySelector('.dropdown__list');
    dropdownList.classList.contains('dropdown__list_active') ? dropdownList.classList.remove('dropdown__list_active') : dropdownList.classList.add('dropdown__list_active');
};

dropValue.addEventListener('click', dropdownMenu);

dropList.forEach(function (drop) {
    drop.onclick = function () {
        document.querySelector('.dropdown__value').textContent = drop.textContent;
        return false;
    };
    drop.addEventListener('click', dropdownMenu);
})

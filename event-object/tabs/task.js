const tab = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tab__content");



for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function() {
        for (let j = 0; tab.length > j; j++) {
            if (tab[j].classList.contains('tab_active')) {
                tab[j].classList.remove('tab_active');
                tabContent[j].classList.remove('tab__content_active');
            }             
        }
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    });
}

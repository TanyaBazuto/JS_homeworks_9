const tooltips = document.querySelectorAll('.has-tooltip');

function tooltipCreate (tooltipTitle) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = tooltipTitle;
    return tooltip.outerHTML;
}

for (let text of tooltips) {
    text.insertAdjacentHTML('afterEnd', tooltipCreate (text.title));

    text.addEventListener('click', function(e) {
        e.preventDefault();
        text.nextElementSibling.style.position = 'absolute';
        text.nextElementSibling.classList.add('tooltip_active');
        text.nextElementSibling.style.left = `${text.getBoundingClientRect().left}px`;        
    });

    text.addEventListener('mouseout', function(e) {
        text.nextElementSibling.classList.remove('tooltip_active');
    });
}

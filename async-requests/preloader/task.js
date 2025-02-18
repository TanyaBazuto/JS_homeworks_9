const loader = document.getElementById('loader')
items = document.getElementById('items')
xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE) {
        const data = JSON.parse(xhr.responseText).response.Valute;
        for (const item in data) {
            items.insertAdjacentHTML(
                "beforeEnd",
                `<div class="item">
                        <div class="item__code">${data[item].CharCode}</div>
                        <div class="item__value">${data[item].Value}</div>
                        <div class="item__currency">${data[item].Name}</div>
                        </div>`
            )
        loader.classList.remove('loader_active')
        } 
    }
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()

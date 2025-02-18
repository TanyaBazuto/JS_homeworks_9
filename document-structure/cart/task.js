const productQuantityDec = document.getElementsByClassName('product__quantity-control_dec')
const productQuantityInc = document.getElementsByClassName('product__quantity-control_inc')
const addProduct = document.getElementsByClassName('product__add')
const quantityCurrent = document.getElementsByClassName('product__quantity-value')

for (let i = 0; i < productQuantityInc.length; i++) {
    productQuantityInc[i].addEventListener('click', () => {
        quantityCurrent[i].textContent++;
    })

    productQuantityDec[i].addEventListener('click', () => {
        if (quantityCurrent[i].textContent > 0) {
            quantityCurrent[i].textContent--;
        }
    })
}

const cart = document.querySelector('.cart__products')
for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener('click', function(e) {
        const product = e.target.closest('.product')
        const id = product.dataset.id
        const countFromProduct = e.target.parentNode.querySelector('.product__quantity-value').innerText

        for (let item of cart.children) {           
            if (item.dataset.id === id) {                
                let quantityNow = item.querySelector('.cart__product-count')
                let total = +quantityNow.innerText
                quantityNow.innerText = Number(total) + Number(countFromProduct)
                return false
            }                    
        }

        cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${product.querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>
            </div>        
            `) 
    })
}

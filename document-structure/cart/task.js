const productQuantity = document.getElementsByClassName('product__quantity-control')
const addProduct = document.getElementsByClassName('product__add')
let quantityCurrent = document.getElementsByClassName('product__quantity-value')

// console.log(quantity)

for (let i = 0; i < productQuantity.length; i++) {
    productQuantity[i].addEventListener('click', function () {
        if (productQuantity[i].classList.contains('product__quantity-control_dec') && quantity[i].nextElementSibling.innerText > 1) {
            productQuantity[i].nextElementSibling.innerText--
        } else {
            productQuantity[i].previousElementSibling.innerText++
        }
        
    });
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
                quantityNow.innerText = total + countFromProduct
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

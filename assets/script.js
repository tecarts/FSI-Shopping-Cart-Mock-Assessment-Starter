// update quantity so that it documents when amount is added or removed
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity 
}

// start quantity at 1 
let quantity = 1

// add + & - buttons
const quantUp = document.querySelector('#quantity-up')
const quantDown = document.querySelector('#quantity-down')

// add event listener to increase quantity of product
quantUp.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

// add event listener to decrease quantity of product
quantDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})





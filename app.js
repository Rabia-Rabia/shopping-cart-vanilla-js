const changeQuantity = (self, action) => {
    const productQuantityElement = self.closest('.product').querySelector('input[type = "number"]');
    const productQuantity = parseInt(productQuantityElement.value);


    switch (action) {
        case 'increment':
            productQuantityElement.value = productQuantity + 1;
            break;
        case 'decrement':
            productQuantityElement.value = productQuantity > 1 ? productQuantity - 1 : 1;
            break;

    }
}

document.querySelectorAll('.product-plus').forEach(el => {
    el.addEventListener('click', function() {
        // document.querySelector('input[type = "number"]').value = 5;
        changeQuantity(this, 'increment');

    });
})

document.querySelectorAll('.product-minus').forEach(el => {
    el.addEventListener('click', function() {
        changeQuantity(this, 'decrement');

    });
});
//updated
const data = [
    {
        id : 1,
        title : 'iphone 11 Silicon case - black',
        price : 1200,
        image : 'img/product-1.png'

    },
    {
        id : 2,
        title : 'iphone 11 Silicon case - black',
        price : 700,
        image : 'img/product-2.png'

    }
]

const createProduct = (productName, productImage, productPrice) => {
    const product = document.createElement('div');
    product.classList.add('cart-item');
    product.innerHTML = 
        `<div class="cart-item">
            <div class="row">
                <div class="col-md-7 center-item mx-auto">
                    <img src="${productImage}" alt="${productImage}">
                        <h5>${productName}</h5>
                </div>
                <div class="col-md-5 center-item product">
                    <div class="input-group number-spinner">
                        <button class="btn btn-default product-minus"><i class="fas fa-minus"></i></button>
                        <input type="number" min="0" class="form-control text-center" value="1">
                            <button class="btn btn-default product-plus"><i class="fas fa-plus"></i></button>
                    </div>
                    <h5>$ <span>${productPrice}</span></h5>
                    <img src="img/remove.png" class="remove-item" alt="">
                </div>
            </div>
        </div>`;

    document.getElementById('products').appendChild(product);
  
}
const changeQuantity = (self, action, price) => {
    const productQuantityElement = self.closest('.product').querySelector('input[type = "number"]');
    const productQuantity = parseInt(productQuantityElement.value);
    const productPriceElement = self.closest('.product').querySelector('h5 span');
    const productPrice = parseInt(productPriceElement.innerText);


    switch (action) {
        case 'increment':
            productQuantityElement.value = productQuantity + 1;
            productQuantity = productQuantityElement.value;
            break;
        case 'decrement':
            productQuantityElement.value = productQuantity > 1 ? productQuantity - 1 : 1;
            productQuantity = productQuantityElement.value;
            break;

    }

    productPriceElement.innerText = price * productQuantity;
}

document.querySelectorAll('.product-plus').forEach(el => {
    el.addEventListener('click', function () {
        // document.querySelector('input[type = "number"]').value = 5;
        changeQuantity(this, 'increment', 5);

    });
})

document.querySelectorAll('.product-minus').forEach(el => {
    el.addEventListener('click', function () {
        changeQuantity(this, 'decrement', 5);

    });
})

window.onload = () => {
    createProduct('something title', 'img/product-1.png', 456);
}
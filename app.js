const data = [
    {
        tax: 50,
        products: [
            {
                id: 1,
                title: 'iphone 11 Silicon case - black',
                price: 10,
                image: 'img/product-1.png'

            },
            {
                id: 2,
                title: 'iphone 11 Silicon case - black',
                price: 20,
                image: 'img/product-2.png'

            }
        ]
    }
]

const createProduct = (productId, productName, productImage, productPrice) => {
    const product = document.createElement('div');
    product.classList.add('cart-item');
    product.innerHTML =
        `<div class="row">
            <div class="col-md-7 center-item mx-auto">
                <img src="${productImage}" alt="${productName}">
                    <h5>${productName}</h5>
            </div>
            <div class="col-md-5 center-item product" id="product-${productId}">
                <div class="input-group number-spinner">
                    <button class="btn btn-default product-minus"><i class="fas fa-minus"></i></button>
                    <input type="number" min="0" class="form-control text-center" value="1">
                        <button class="btn btn-default product-plus"><i class="fas fa-plus"></i></button>
                </div>
                <h5>$ <span class= "product-price">${productPrice}</span></h5>
                <img src="img/remove.png" class="remove-item" alt="">
            </div>
        </div>`;

    document.getElementById('products').appendChild(product);

}

const totalPrice = () => {
    const tax = parseInt(document.getElementById('tax-amount').innerText);
    const subTotal = parseInt(document.getElementById('sub-total').innerText);
    document.getElementById('total-price').innerText = tax + subTotal;
}

const subTotalPrice = () => {
    let productPrice = [];
    document.querySelectorAll('.product-price').forEach(product => {
        productPrice.push(parseInt(product.innerText));
    });

    const subTotalAmount = productPrice.reduce((prev, next) => {
        return prev + next;
    });

    document.getElementById('sub-total').innerText = subTotalAmount;
    totalPrice();

}

const removeProduct = () => {
    document.querySelectorAll('.remove-item').forEach(element => {
        element.addEventListener('click', function () {
            this.closest('.cart-item').remove();
            try {
                subTotalPrice();
            }
            catch (err) {
                document.getElementById('total-price').innerText = 0;
                document.getElementById('sub-total').innerText = 0;
                document.getElementById('tax-amount').innerText = 0;
            }

        });
    });
}

const changeQuantityAndPrice = (self, action, price, id) => {
    try {
        const productQuantityElement = self.closest(`#product-${id}`).querySelector('input[type = "number"]');
        let productQuantity = parseInt(productQuantityElement.value);
        const productPriceElement = self.closest(`#product-${id}`).querySelector('h5 span');
        // const productPrice = parseInt(productPriceElement.innerText);


        switch (action) {
            case 'increment':
                productQuantityElement.value = productQuantity + 1;
                productQuantity = parseInt(productQuantityElement.value);
                break;
            case 'decrement':
                productQuantityElement.value = productQuantity > 1 ? productQuantity - 1 : 1;
                productQuantity = parseInt(productQuantityElement.value);
                break;

        }

        productPriceElement.innerText = price * productQuantity;
        subTotalPrice();
    }

    catch (err) {

    }

}

window.onload = () => {

    data.map(datum => {
        datum.products.map(product => {
            createProduct(product.id, product.title, product.image, product.price);
            document.querySelectorAll('.product-plus').forEach(el => {
                el.addEventListener('click', function () {
                    // document.querySelector('input[type = "number"]').value = 5;
                    changeQuantityAndPrice(this, 'increment', product.price, product.id);

                });
            })

            document.querySelectorAll('.product-minus').forEach(el => {
                el.addEventListener('click', function () {
                    changeQuantityAndPrice(this, 'decrement', product.price, product.id);

                });
            });

        });
        document.getElementById('tax-amount').innerText = datum.tax;
        subTotalPrice();

    });

    removeProduct();


}
let cart = [];

async function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart;
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(serviceId) {
    let service = services.find(s => s.id === serviceId);
    if (!service) {
        console.error("Service not found");
        return;
    }
    let item = cart.find(item => item.service.id === service.id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ service, quantity: 1 });
    }
    console.log(cart)
    updateCart();
    saveCart();
}

function removeFromCart(serviceId) {
    let item = cart.find(item => item.service.id === serviceId);
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => item.service.id !== serviceId);
    }

    updateCart();
    saveCart();
}

async function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
        <div class="row justify-content-between p-2">
            <div class="col-6">
                ${item.service.name} - $${item.service.price.toFixed(2)} x ${item.quantity} 
            </div>
            <div class="col-6">
                <button class="btn btn-info" onclick='removeFromCart(${item.service.id})'>-</button>
                <button class="btn btn-info" onclick='addToCart(${item.service.id})'>+</button>
            </div>
        </div>`;
        cartItems.appendChild(listItem);
    });

    let cartCounter = document.getElementById('cartCounter');
    let counter = 0;
    cartCounter.innerText = '';
    cart.forEach(item => {
        counter += item.quantity;
    });
    cartCounter.innerText = counter;

    let totalPrice = cart.reduce((total, item) => total + (item.service.price * item.quantity), 0);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

loadCart();
updateCart();
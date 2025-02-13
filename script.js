// Shopping cart array.
let cart = [];
// Services provided.
let services = [
    {
        id: 1,
        name: 'Clipping',
        description: 'Ensure your pet\'s comfort and health with our professional dog nail clipping service. Gentle, stress-free, and precise, we keep your furry friend\'s paws perfectly groomed. Book an appointment today for a happier, healthier pet!',
        price: 99.0,
        image: 'Images/Clipping.webp',
        imageFallback: 'Images/Clipping.jpg'
    },
    {
        id: 2,
        name: 'Trimming',
        description: 'Pamper your furry friend with our expert dog trimming service. We ensure a stylish, comfortable, and stress-free grooming experience, leaving your pet looking and feeling their best. Book now for a fresh, fabulous pup!',
        price: 499.0,
        image: 'Images/Trimming.webp',
        imageFallback: 'Images/Trimming.jpg'
    },
    {
        id: 3,
        name: 'Washing',
        description: 'Treat your furry friend to a refreshing dog wash! Our gentle, thorough, and stress-free service leaves your pet clean, soft, and smelling fantastic. Book now for a sparkling clean pup!',
        price: 199.0,
        image: 'Images/Washing.webp',
        imageFallback: 'Images/Washing.jpg'
    }
];

function loadCart(){
    const savedCart = localStorage.getItem('cart');
    if (savedCart){
        cart = JSON.parse(savedCart);
        updateCart;
    }
}

function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayServices() {
    let serviceList = document.getElementById('accordionExample');
    services.forEach(service => {
        let serviceDiv = document.createElement('div');
        serviceDiv.innerHTML = `
            <div class="accordion-item">
            <h2 class="accordion-header" id="heading${service.name}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${service.name}" aria-expanded="true" aria-controls="collapseOne">
            <div class="container"> 
            <picture>
            <source srcset="${service.image}" />
            <img class="img-fluid rounded" width="100px" height="100px" src="${service.imageFallback}"
            alt="A picture of a small dog." />
            </picture>
            ${service.name}
            </div>
            </button>
            </h2>
            <div id="collapse${service.name}" class="accordion-collapse collapse" aria-labelledby="heading${service.name}" data-bs-parent="#accordionExample">
            <div class="accordion-body d-lg-flex">
            ${service.description}
            <div class="row justify-items-evenly p-2">
            <button type="button" class="btn btn-primary" onclick='addToCart(${service.id})'>Add to cart. $${service.price}</button>
            </div>
            </div>
            </div>
            </div>
        `;
        serviceList.appendChild(serviceDiv);
    });
}

function addToCart(serviceId) {
    let service = services.find(s => s.id === serviceId);
    if (!service) {
        console.error("Service not found");
        return;
    }
    console.log(service.name);
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
    cart = cart.filter(item => item.service.id !== serviceId);
    updateCart();
    saveCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${item.service.name} - $${item.service.price.toFixed(2)} x ${item.quantity} 
        <button onclick='removeFromCart(${item.service.id})'>Remove</button>`;
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

window.onload = function(){
    loadCart();
    updateCart();
    displayServices();
}



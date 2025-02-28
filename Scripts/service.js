// Services provided.
let services = [
    {
        id: 1,
        name: 'Clipping',
        description: 'Ensure your pet\'s comfort and health with our professional dog nail clipping service. Gentle, stress-free, and precise, we keep your furry friend\'s paws perfectly groomed. Book an appointment today for a happier, healthier pet!',
        price: 99.0,
        image: 'https://kavency.github.io/ITHS_Webb_Labb01/Images/Clipping.webp',
        imageFallback: 'https://kavency.github.io/ITHS_Webb_Labb01/Images/Clipping.jpg'
    },
    {
        id: 2,
        name: 'Trimming',
        description: 'Pamper your furry friend with our expert dog trimming service. We ensure a stylish, comfortable, and stress-free grooming experience, leaving your pet looking and feeling their best. Book now for a fresh, fabulous pup!',
        price: 499.0,
        image: 'https://kavency.github.io/ITHS_Webb_Labb01/Images/Trimming.webp',
        imageFallback: 'https://kavency.github.io/ITHS_Webb_Labb01/Images/Trimming.jpg'
    },
    {
        id: 3,
        name: 'Washing',
        description: 'Treat your furry friend to a refreshing dog wash! Our gentle, thorough, and stress-free service leaves your pet clean, soft, and smelling fantastic. Book now for a sparkling clean pup!',
        price: 199.0,
        image: 'https://kavency.github.io/ITHS_Webb_Labb01/Images/Washing.webp',
        imageFallback: 'https://kavency.github.io/ITHS_Webb_Labb01/Images/Washing.jpg'
    }
];

function displayServices() {
    let serviceList = document.getElementById('accordion');
    services.forEach(service => {
        let serviceDiv = document.createElement('div');
        serviceDiv.innerHTML = `
            <div class="accordion-item" id="custom-accordion-body">
            <h2 class="accordion-header" id="heading${service.name}">
            <button id="custom-header-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${service.name}" aria-expanded="true" aria-controls="collapse${service.name}">
            <div class="container" id="services-accordion-container"> 
            <picture id="services-accordion-image">
            <source srcset="${service.image}" />
            <img class="img-fluid rounded" width="100px" height="100px" src="${service.imageFallback}"
            alt="A picture of a small dog." />
            </picture>
            ${service.name}
            </div>
            </button>
            </h2>
            <div id="collapse${service.name}" class="accordion-collapse collapse" aria-labelledby="heading${service.name}" data-bs-parent="#accordion">
            <div class="accordion-body d-lg-flex m-2 align-items-center">
            ${service.description}
            <div class="row justify-items-evenly m-2">
            <button type="button" class="btn btn-info mt-3 p-2" onclick='addToCart(${service.id})'>Add to cart. $${service.price}</button>
            </div>
            </div>
            </div>
            </div>
        `;
        serviceList.appendChild(serviceDiv);
    });
}

displayServices();
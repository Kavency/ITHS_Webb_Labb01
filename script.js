let services = [
    {
        name: 'Clipping',
        description: 'Ensure your pet\'s comfort and health with our professional dog nail clipping service. Gentle, stress-free, and precise, we keep your furry friend\'s paws perfectly groomed. Book an appointment today for a happier, healthier pet!',
        price: 99.0,
        image: 'Images/Clipping.webp'
    },
    {
        name: 'Trimming',
        description: 'Pamper your furry friend with our expert dog trimming service. We ensure a stylish, comfortable, and stress-free grooming experience, leaving your pet looking and feeling their best. Book now for a fresh, fabulous pup!',
        price: 499.0,
        image: 'Images/Trimming.webp'
    },
    {
        name: 'Washing',
        description: 'Treat your furry friend to a refreshing dog wash! Our gentle, thorough, and stress-free service leaves your pet clean, soft, and smelling fantastic. Book now for a sparkling clean pup!',
        price: 199.0,
        image: 'Images/Washing.webp'
    }
];

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
            <img class="img-fluid rounded" width="50px" height="50px" height="auto" src="Images/Logo.jpg"
            alt="Company logo. A picture of a happy small breed dog." />
            </picture>
            ${service.name}
            </div>
            </button>
            </h2>
            <div id="collapse${service.name}" class="accordion-collapse collapse" aria-labelledby="heading${service.name}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            ${service.description}
            </div>
            </div>
            </div>
        `;
        serviceList.appendChild(serviceDiv);
    });
}

displayServices();



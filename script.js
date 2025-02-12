let services = [
    {
        name: 'Nail clipping',
        description: 'Get your dogs nails done.',
        price: 99.0,
        image: 'Images/Clipping.webp'
    },
    {
        name: 'Trimming',
        description: 'Let your dog be stylish.',
        price: 499.0,
        image: 'Images/Trimming.webp'
    },
    {
        name: 'Washing',
        description: 'Clean up your dog.',
        price: 199.0,
        image: 'Images/Washing.webp'
    }
];

function displayServices() {
    let serviceList = document.getElementById('service-list');
    services.forEach(service => {
        let serviceDiv = document.createElement('div');
        serviceDiv.innerHTML = `
            <h2>${service.name}</h2>
            <p>${service.description}</p>
            <p>Price: $${service.price.toFixed(2)}</p>
            <img src="${service.image}" alt="${service.name}" style="width:100px;">
        `;
        serviceList.appendChild(serviceDiv);
    });
}

displayServices();
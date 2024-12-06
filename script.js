function loadVehicles() {
    const vehiclesContainer = document.querySelector('.veiculos-bloco');
    
    carDatabase.vehicles.forEach(vehicle => {
        const vehicleCard = `
            <div class="veiculo-info">
                <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}">
                <div class="veiculo-detalhes">
                    <h3>${vehicle.brand} ${vehicle.model}</h3>
                    <p>Ano: ${vehicle.year}</p>
                    <p>Preço: ${vehicle.price}</p>
                    <p>${vehicle.description}</p>
                </div>
            </div>
        `;
        vehiclesContainer.innerHTML += vehicleCard;
    });
}

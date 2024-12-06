const carDatabase = {
    vehicles: [
        {
            id: 1,
            brand: "Renaut",
            model: "Sandero",
            color: "Preto",
            year: "2018",
            price: "R$ 18.000",
            image: "./images/carro1.jpeg",
            description: "Unico Dono com pouca kilomatragem, poucos detalhes e IPVA 2025 pago."
        },
        {
            id: 2,
            brand: "Fiat",
            model: "Journey",
            color: "Prata",
            year: "2024",
            price: "R$ 160.000",
            image: "./images/carro2.jpeg",
            description: "Sedan esportivo"
        },
        {
            id: 3,
            brand: "Honda",
            model: "Civic",
            color: "Prata",
            year: "2024",
            price: "R$ 160.000",
            image: "./images/carro2.jpeg",
            description: "Sedan esportivo"
        },
        {
            id: 4,
            brand: "Toyota",
            model: "Hilux",
            year: "2018",
            price: "R$ 57.000",
            image: "./images/carro5.jpeg",
            description: "Camionete 4x4 automática"
        },
        {
            id: 5,
            brand: "Fiat",
            model: "Journey",
            year: "2018",
            price: "R$ 37.000",
            image: "./images/carro5.jpeg",
            description: "SUV 4x4 automática"
        },
        {
            id: 6,
            brand: "Renaut",
            model: "Sandero",
            year: "2016",
            price: "R$ 18.000",
            image: "./images/carro6.jpeg",
            description: "Hatch compacto com 5 portas"
        },
        {
            id: 7,
            brand: "Volkswagen",
            model: "Saveiro",
            year: "2020",
            price: "R$ 17.000",
            image: "./images/carro7.jpeg",
            description: "Pick-up 4x4 preparada para uso comercial."
        },
        {
            id: 8,
            brand: "Chevrolet",
            model: "Montana",
            year: "2015",
            price: "R$ 20.700",
            image: "./images/carro8.jpeg",
            description: "Pick-up 4x4"
        },
        {
            id: 9,
            brand: "Renaut",
            model: "Sandeiro",
            year: "2014",
            price: "R$ 19.250",
            image: "./images/carro9.jpeg",
            description: "Hatch compacto 4 portas"
        },
        {
            id: 10,
            brand: "Renaut",
            model: "Sandero",
            year: "2016",
            price: "R$ 17.300",
            image: "./images/carro10.jpeg",
            description: "Hatch compacto"
        }
    ],
    
    sortVehicles: function(criteria) {
        return this.vehicles.sort((a, b) => {
            switch(criteria) {
                case 'price':
                    const priceA = parseFloat(a.price.replace('R$ ', '').replace('.', ''))
                    const priceB = parseFloat(b.price.replace('R$ ', '').replace('.', ''))
                    return priceA - priceB
                case 'year':
                    return parseInt(a.year) - parseInt(b.year)
                case 'brand':
                    return a.brand.localeCompare(b.brand)
                case 'model':
                    return a.model.localeCompare(b.model)
                default:
                    return 0
            }
        })
    }
}

// Exemplso de sorts:
const sortedByPrice = carDatabase.sortVehicles('price');
const sortedByYear = carDatabase.sortVehicles('year');
const sortedByBrand = carDatabase.sortVehicles('brand');
const sortedByModel = carDatabase.sortVehicles('model');

// Função para atualizar a exibição
function updateDisplay(criteria) {
    const sortedVehicles = carDatabase.sortVehicles(criteria);
   function updateDisplay(criteria) {
    // 1. Get sorted vehicles
    const sortedVehicles = carDatabase.sortVehicles(criteria);
    
    // 2. Get container element
    const vehiclesContainer = document.querySelector('.veiculos-bloco');
    
    // 3. Clear current display
    vehiclesContainer.innerHTML = '';
    
    // 4. Rebuild display with sorted vehicles
    sortedVehicles.forEach(vehicle => {
        const vehicleCard = `
            <div class="veiculo-info">
                <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}">
                <div class="veiculo-detalhes">
                    <h3>${vehicle.brand} ${vehicle.model}</h3>
                    <p>Ano: ${vehicle.year}</p>
                    <p>Preço: ${vehicle.price}</p>
                    <p>Cor: ${vehicle.color}</p>
                    <p>${vehicle.description}</p>
                </div>
            </div>
        `;
        vehiclesContainer.innerHTML += vehicleCard;
    });
}

}

const carDatabase = {
    vehicles: [
        {
            id: 1,
            brand: "Chevrolet",
            model: "Montana",
            color: "Branco",
            year: "2017",
            price: "R$ 26.500",
            image: "./images/chev-montana-branco.jpeg",
            description: "Unico Dono com pouca kilomatragem, poucos detalhes e docs OK!."
        },
        {
            id: 2,
            brand: "Volkswagen",
            model: "Saveiro",
            color: "Branco",
            year: "2022",
            price: "R$ 38.000",
            image: "./images/chev-saveiro-branca.jpeg",
            description: "Pick-up 4x4."
        },
        {
            id: 3,
            brand: "Fiat",
            model: "Journey",
            color: "Prata",
            year: "2017",
            price: "R$ 37.000",
            image: "./images/fiat-journey-prata.jpeg",
            description: "SUV 4x4 automática."
        },
        {
            id: 4,
            brand: "Ford",
            model: "Fusion",
            color: "Preto",
            year: "2018",
            price: "R$ 47.000",
            image: "./images/ford-fusion-preto.jpeg",
            description: "Camionete 4x4 automática."
        },
        {
            id: 5,
            brand: "Renaut",
            model: "Kwid",
            color: "Preto",
            year: "2021",
            price: "R$ 24.000",
            image: "./images/renaut-kwid-preto.jpeg",
            description: "Hatch compacto com 5 portas."
        },
        {
            id: 6,
            brand: "Renaut",
            model: "Sandero",
            color: "Prata",
            year: "2016",
            price: "R$ 18.000",
            image: "./images/renaut-sandero-prata.jpeg",
            description: "Hatch compacto com 5 portas."
        },
        {
            id: 7,
            brand: "Renaut",
            model: "Sandero",
            color: "Prata",
            year: "2018",
            price: "R$ 22.500",
            image: "./images/renaut-sandero-prata2.jpeg",
            description: "Hatch compacto com 5 portas."
        },
        {
            id: 8,
            brand: "Renaut",
            model: "Sandero",
            color: "Preto",
            year: "2016",
            price: "R$ 19.700",
            image: "./images/renaut-sandero-preto.jpeg",
            description: "Hatch compacto com 5 portas."
        },
        {
            id: 9,
            brand: "Toyota",
            model: "Hilux",
            color: "Bronze",
            year: "2017",
            price: "R$ 49.900",
            image: "./images/toyota-hilux-bronze.jpeg",
            description: "Camionete 4x4 automática."
        },
        {
            id: 10,
            brand: "Volkswagen",
            model: "Saveiro",
            color: "Branca",
            year: "2018",
            price: "R$ 27.300",
            image: "./images/volks-saveiro-branca-comercial.jpeg",
            description: "Pick-up 4x4 - Ja preparada para uso comercial."
        }
    ],
    
    sortVehicles: function(criteria) {
        return [...this.vehicles].sort((a, b) => {
            switch(criteria) {
                case 'price-desc':
                    return parseFloat(b.price.replace('R$ ', '').replace('.', '')) - 
                           parseFloat(a.price.replace('R$ ', '').replace('.', ''));
                case 'price-asc':
                    return parseFloat(a.price.replace('R$ ', '').replace('.', '')) - 
                           parseFloat(b.price.replace('R$ ', '').replace('.', ''));
                case 'year-desc':
                    return parseInt(b.year) - parseInt(a.year);
                case 'brand':
                    return a.brand.localeCompare(b.brand);
                default:
                    return 0;
            }
        });
    }
};

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

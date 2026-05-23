// Estado de los contadores
let stats = {
    fallen: 1000000,
    enlisted: 1200000,
    bugs: 2500000,
    squids: 5000000,
    automatons: 1200000
};

// Función para obtener un número aleatorio en un rango
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para actualizar un contador
function updateCounter(elementId, deltaId, newValue, oldValue) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newValue.toLocaleString('es-ES');
    }
    
    // Actualizar delta si existe
    if (deltaId) {
        const deltaElement = document.getElementById(deltaId);
        if (deltaElement) {
            const delta = newValue - oldValue;
            const symbol = delta > 0 ? '+' : '';
            deltaElement.textContent = symbol + delta.toLocaleString('es-ES');
            
            // Color según el valor
            if (delta > 0) {
                deltaElement.style.color = '#ff4444';
            } else if (delta < 0) {
                deltaElement.style.color = '#00ff88';
            } else {
                deltaElement.style.color = '#99b3cc';
            }
        }
    }
}

// Función para calcular y mostrar el total
function updateTotal() {
    const total = stats.fallen + stats.enlisted + stats.bugs + stats.squids + stats.automatons;
    const totalElement = document.getElementById('total-enemies');
    if (totalElement) {
        totalElement.textContent = total.toLocaleString('es-ES');
    }
}

// Actualizar contadores cada 2 segundos
setInterval(() => {
    // Helldivers caídos
    const oldFallen = stats.fallen;
    stats.fallen += randomInRange(5, 1000000);
    updateCounter('counter-fallen', 'delta-fallen', stats.fallen, oldFallen);
    
    // Nuevos alistados
    const oldEnlisted = stats.enlisted;
    stats.enlisted += randomInRange(3, 1000000);
    updateCounter('counter-enlisted', 'delta-enlisted', stats.enlisted, oldEnlisted);
    
    // Bichos abatidos
    const oldBugs = stats.bugs;
    stats.bugs += randomInRange(20, 6000000);
    updateCounter('counter-bugs', 'delta-bugs', stats.bugs, oldBugs);
    
    // Calamares abatidos
    const oldSquids = stats.squids;
    stats.squids += randomInRange(10, 4000000);
    updateCounter('counter-squids', 'delta-squids', stats.squids, oldSquids);
    
    // Autómatas abatidos
    const oldAutomatons = stats.automatons;
    stats.automatons += randomInRange(8, 3500000);
    updateCounter('counter-automatons', 'delta-automatons', stats.automatons, oldAutomatons);
    
    // Actualizar total
    updateTotal();
}, 2000);

// Inicializar valores en la primera carga
window.addEventListener('DOMContentLoaded', () => {
    updateCounter('counter-fallen', 'delta-fallen', stats.fallen, stats.fallen);
    updateCounter('counter-enlisted', 'delta-enlisted', stats.enlisted, stats.enlisted);
    updateCounter('counter-bugs', 'delta-bugs', stats.bugs, stats.bugs);
    updateCounter('counter-squids', 'delta-squids', stats.squids, stats.squids);
    updateCounter('counter-automatons', 'delta-automatons', stats.automatons, stats.automatons);
    updateTotal();
});

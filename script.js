document.addEventListener("DOMContentLoaded", () => {
    const calculatorForm = document.querySelector("#calculator form");
    const resultDiv = document.getElementById("result");

    if (calculatorForm) {
        calculatorForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const transportKm = parseFloat(document.getElementById("transport").value) || 0;
            const energyKwh = parseFloat(document.getElementById("energy").value) || 0;

            const emissionFactorTransport = 0.15;
            const emissionFactorEnergy = 0.4;

            const carbonFootprint = (transportKm * emissionFactorTransport) + (energyKwh * emissionFactorEnergy);

            resultDiv.innerHTML = `
                <strong>Sua pegada de carbono estimada é: ${carbonFootprint.toFixed(2)} kg de CO₂/mês</strong>
                <br><br>
                <small>💡 Dica: Valores acima de 500kg/mês indicam alto impacto ambiental.</small>
            `;
        });
    }

  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

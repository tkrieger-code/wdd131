document.addEventListener("DOMContentLoaded", () => {
    // 1. Atualização do Rodapé
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

    // 2. Valores estáticos de temperatura e vento coletados do HTML
    const temp = 18; // 18°C
    const windSpeed = 12; // 12 km/h

    // 3. Função obrigatória com retorno em uma única linha de cálculo
    function calculateWindChill(t, w) {
        return (13.12 + (0.6215 * t) - (11.37 * Math.pow(w, 0.16)) + (0.3965 * t * Math.pow(w, 0.16))).toFixed(1);
    }

    // 4. Verificação das condições limitantes (Métrica: Temp <= 10°C e Vento > 4.8 km/h)
    const windChillElement = document.getElementById("windchill");
    
    if (temp <= 10 && windSpeed > 4.8) {
        const result = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${result} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});
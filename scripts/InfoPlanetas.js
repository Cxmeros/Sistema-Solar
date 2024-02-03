export const planetSelect = document.querySelector("#js-planet-select");
const planetGravityMap = new Map([
    ['Mercurio', 0.38],
    ['Venus', 0.91],
    ['Tierra', 1.0],
    ['Marte', 0.38],
    ['Jupiter', 2.34],
    ['Saturno', 0.93],
    ['Urano', 0.92],
    ['Neptuno', 1.12]
]);

export function calcularMasa(masa, planeta) {
    //Obtener el valor del planeta seleccionado en el select
    const selectedPlanetImage =
      planetSelect.options[planetSelect.selectedIndex].dataset.image;
    const gravedad = planetGravityMap.get(planeta);
    const peso = (masa * gravedad).toFixed(2);
  
    const resultadoHTML = `
    <div class="flex-container">
      <div class="flex-item image">
        <img src="./images/${selectedPlanetImage}" class="planet-image" />
      </div>
      <div class="flex-item description">
        <span class="texto-resultado"> El peso del objeto en ${planeta} es:</span>
        <span class="js-resultado">${peso} Kg</span>
      </div>
    </div>`;
  
    document.querySelector(".flex-container").innerHTML = resultadoHTML;
}
  

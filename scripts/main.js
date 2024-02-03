import { calcularMasa, planetSelect } from "./InfoPlanetas.js";

const masaObjeto = document.querySelector("#mass");
const btnCalcular = document.querySelector(".js-calcular");

btnCalcular.addEventListener("click", () => {
  const masa = Number(masaObjeto.value);
  const planeta = planetSelect.value;

  console.log(masa);

  if (isNaN(masa) || masa === 0) {
    const resultadoHTML = `<div class="flex-container">
      <div class="flex-item description">
        <span class="texto-resultado">Por favor, ingresa un peso válido.</span>
      </div>
    </div>`;

    // Inserta el HTML en el contenedor
    document.querySelector(".flex-container").innerHTML = resultadoHTML;
    return;
  } else if (planeta === "none") {
    const resultadoHTML = `<div class="flex-container">
            <div class="flex-item description">
            <span class="texto-resultado">Por favor, selecciona un planeta.</span>
            </div>
        </div>`;

    // Inserta el HTML en el contenedor
    document.querySelector(".flex-container").innerHTML = resultadoHTML;
    return;
  }

  calcularMasa(masa, planeta);
});

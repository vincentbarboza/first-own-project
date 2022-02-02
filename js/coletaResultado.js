export const coletaResultados = () => {
  let resultados = [];

  for (let i = 1; i <= 60; i++) {
    resultados[i - 1] = document.querySelector(`#numero-${i}`).value;
  }

  let numerosInteiros = [];
    for (let i = 1; i <= 60; i++) {
      numerosInteiros.push(parseInt(resultados[i - 1]));
    }

    let numerosSemVazio = numerosInteiros.filter(function (i) {
      return i;
    });

  if (numerosSemVazio.length == 0) {
    numerosInteiros[0] = 0;
    return numerosSemVazio;
  } else {
    return numerosSemVazio;
  }
};

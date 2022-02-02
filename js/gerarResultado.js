import { recuperarResultado } from "./recuperarResultado.js";

export const gerarResultado = () => {
  let listaGerarResultados = [];

  listaGerarResultados = recuperarResultado();
  if (listaGerarResultados[0] == 0) {
    return listaGerarResultados;
  } else {
    let listaGerarResultadosInedito = [...new Set(listaGerarResultados)];

    let numerosSemVazio = listaGerarResultadosInedito.filter(function (i) {
      return i;
    });

    let numerosInteiros = [];

    for (let i = 1; i <= numerosSemVazio.length; i++) {
      numerosInteiros.push(parseInt(numerosSemVazio[i - 1]));
    }

    let numeroAleatorio;

    let listaFinal = [];
    let listaFInalInedito = [];

    for (let i = 1; i <= 6; i++) {
      numeroAleatorio = Math.floor(Math.random() * numerosInteiros.length);
      listaFinal.push(numerosInteiros[numeroAleatorio]);
      listaFInalInedito = [...new Set(listaFinal)];

      if (listaFInalInedito.length < 6) {
        i--;
      }
    }

    while (listaFInalInedito.length > 6) {
      listaFInalInedito.pop();
    }

    listaFInalInedito.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;

      return 0;
    });
    return listaFInalInedito;
  }
};

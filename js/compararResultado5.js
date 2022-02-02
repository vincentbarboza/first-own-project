import { gerarResultado } from "./gerarResultado.js";
import { recuperarResultado } from "./recuperarResultado.js";
import { recuperarResultadoComparar } from "./recuperarResultadoComparar.js";


export const botaoCompararResultado5 = () => {
  const botaoCompararResultado = document.querySelector(
    "[data-botao-comparar-resultados]"
  );

  botaoCompararResultado.addEventListener("click", (evento) => {
    evento.preventDefault();
    let listaRecuperarResultadoCompararFinal1 = recuperarResultado()
    let listaRecuperarResultadoCompararFinal2 = recuperarResultadoComparar()
    let numerosIguais = 0;
    let tentativas = 0;
    let numerosIguaisFor = 5;


    if (listaRecuperarResultadoCompararFinal1[0] == 0) {
      return;
    } else if (listaRecuperarResultadoCompararFinal2[0] == 0) {
      return;
    } 

      
      while (numerosIguais < numerosIguaisFor) {
        let listaGerarResultado = gerarResultado()
        for (let i = 0; i <= 5; i++) {
          for (let x = 0; x <= 5; x++) {
            if (listaRecuperarResultadoCompararFinal2[i] == listaGerarResultado[x]) {
              numerosIguais++;
            }
          }
        }
        if (numerosIguais < numerosIguaisFor) {
          numerosIguais = 0;
        }

        if (tentativas == 15000) {
          break;
        }
        tentativas++;

        // if(numerosIguaisResultado < 4) {
        //   break
        // }

      if (numerosIguais == 0) {
        document.querySelector(
          `#tentativas--3`
        ).textContent = `After ${tentativas} attempts, we couldn't match ${numerosIguaisFor} numbers!`;
      } else {
        document.querySelector(
          `#tentativas--3`
        ).textContent = `It took ${tentativas} tries to match ${numerosIguais} numbers!`;
      }
    }
  });
};

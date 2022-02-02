import { gerarResultado } from "./gerarResultado.js";
import { mensagemInserirResultado6Numeros, mensagemSalvar60Numeros } from "./mensagens.js"
import { recuperarResultado } from "./recuperarResultado.js";
import { recuperarResultadoComparar } from "./recuperarResultadoComparar.js";


export const botaoCompararResultado4 = () => {
  const botaoCompararResultado = document.querySelector(
    "[data-botao-comparar-resultados]"
  );

  botaoCompararResultado.addEventListener("click", (evento) => {
    evento.preventDefault();
    let listaRecuperarResultadoCompararFinal1 = recuperarResultado()
    let listaRecuperarResultadoCompararFinal2 = recuperarResultadoComparar()
    let listaFInalInedito = [...new Set(listaRecuperarResultadoCompararFinal1)]
    let numerosIguais = 0;
    let tentativas = 0;
    let numerosIguaisFor = 4;
    let numerosIguaisResultado = 0;


    if (listaFInalInedito[0] == 0) {
      mensagemSalvar60Numeros()
      return;
    } else if (listaRecuperarResultadoCompararFinal2[0] == 0) {
      mensagemInserirResultado6Numeros() ;
      return;
    } 

      for (let i = 0; i <= 59; i++) {
        for (let x = 0; x <= 5; x++) {
          if (listaFInalInedito[i] == listaRecuperarResultadoCompararFinal2[x]
          ) {
            numerosIguaisResultado++;
          }
        }
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
      
      if(numerosIguaisResultado < 4) {
        document.querySelector(
          `#tentativas--2`
        ).textContent = `We cannot match 4, 5 or 6 numbers!`
        break
      }

      document.querySelector(
        `#tentativas--1`
      ).textContent = `We can match ${numerosIguaisResultado} numbers with the saved result!`;

      if (numerosIguais == 0) {
        document.querySelector(
          `#tentativas--2`
        ).textContent = `After ${tentativas} attempts, we couldn't match ${numerosIguaisFor} numbers!`;
      } else {
        document.querySelector(
          `#tentativas--2`
        ).textContent = `It took ${tentativas} tries to match ${numerosIguais} numbers!`;
      }
    }
  });
};

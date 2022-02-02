import { mensagemNumeros1A60, mensagemInserirResultado6Numeros, mensagemCertezaSalvar } from "./mensagens.js"

export const salvarResultadoComparar = () => {
  const salvarResultadoComparar = document.querySelector(
    "[data-botao-parar-resultados]"
  );

  salvarResultadoComparar.addEventListener("click", (evento) => {
    evento.preventDefault();

    let resultados = [];

    for (let i = 1; i <= 6; i++) {
      resultados[i - 1] = document.querySelector(
        `#comparar__numeros--${i}`
      ).value;
    }

    let numerosInteiros = [];
    for (let i = 1; i <= 6; i++) {
      numerosInteiros.push(parseInt(resultados[i - 1]));
    } 

    let numerosSemVazio = numerosInteiros.filter(function (i) {
      return i;
    });

    let listaFInalInedito = [...new Set(numerosSemVazio)]
    if (listaFInalInedito.length < 6) {
      const confirmar = mensagemInserirResultado6Numeros();
      return;
    } 

    for(let i = 0; i < 6; i++) {
      if(listaFInalInedito[i] < 1 || listaFInalInedito[i] > 60) {
        mensagemNumeros1A60()
        return
      }
    }
      const confirmar = mensagemCertezaSalvar();

      if (confirmar == true) {
        listaFInalInedito.sort(function (a, b) {
          if (a > b) return 1;
          if (a < b) return -1;

          return 0;
        });

        for (let i = 1; i <= 6; i++) {
          document.querySelector(`#resultado-comparar--${i}`).textContent =
          listaFInalInedito[i - 1];
        }
        document.querySelector('#resultado_salvo').textContent = "Resultavo Salvo";

        localStorage.setItem("listaResultadoComparar", listaFInalInedito);
        localStorage.setItem("resultadoCompararSalvo", 'Resultado Salvo')
        location.reload();
      }
    
  });
};

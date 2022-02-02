import { mensagemNumeros1A60, mensagemCertezaSalvar, mensagemSalvar60Numeros, mensagemInserir6NumerosResultado1 } from "./mensagens.js"

export const botaoAdicionar6Numeros = () => {
  const adicionarNumeros = document.querySelector(
    "[data-botao-adicionar-resultado]"
  );

  adicionarNumeros.addEventListener("click", (evento) => {
    evento.preventDefault();
    let listaAdicionarNumeros = localStorage.getItem("listaResultados");
    if (listaAdicionarNumeros[0] == 0) {
      const confirmar = mensagemSalvar60Numeros()
      return;
    }
    let listaAdicionarNumerosInteiro = listaAdicionarNumeros.split(",") || [];
    listaAdicionarNumerosInteiro.splice(56, 4);

    let novoResultado = [];
    for (let i = 1; i <= 6; i++) {
      novoResultado[i - 1] = document.querySelector(`#numero-${i}`).value;
    }

    let listaGerarResultadosInedito = [...new Set(novoResultado)];
    let numerosInteiros = [];
    for (let i = 1; i <= 6; i++) {
      numerosInteiros.push(parseInt(listaGerarResultadosInedito[i - 1]));
    }

    let numerosSemVazio = numerosInteiros.filter(function (i) {
      return i;
    });

    if (numerosSemVazio.length < 6) {
      const confirmar = mensagemInserir6NumerosResultado1()
      return;
    }

    for(let i = 0; i < 6; i++) {
      if(numerosSemVazio[i] < 1 || numerosSemVazio[i] > 60) {
        mensagemNumeros1A60()
        return
      }
    }
      const confirmar = mensagemCertezaSalvar()
      if (confirmar == false) {
        return;
      }

      numerosSemVazio.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;

        return 0;
      });
      let i = 5;
      while (i >= 0) {
        listaAdicionarNumerosInteiro.unshift(numerosSemVazio[i]);
        i--;
      }

      localStorage.setItem("listaResultados", listaAdicionarNumerosInteiro);

      for (let i = 1; i <= 60; i++) {
        document.querySelector(`#resultado-tela--${i}`).textContent =
          listaAdicionarNumerosInteiro[i - 1];
      }
    
    location.reload();
  });
};

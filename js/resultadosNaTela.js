import { gerarResultado } from "./gerarResultado.js";

export function listaSalvaComeco() {
  let resultadoComecoPronto = []

  for(let i = 1; i<= 60; i++) {
    resultadoComecoPronto.push(i)
  }

  let resultadoComecoProntoComparar = []
  resultadoComecoProntoComparar = [3, 14, 27, 32, 45, 58]

  let resultadosComeco = localStorage.getItem("listaResultados") || resultadoComecoPronto;

  let resultadosComecoComparar = localStorage.getItem("listaResultadoComparar") || resultadoComecoProntoComparar;

  let resultadoCompararSalvo = localStorage.getItem("resultadoCompararSalvo") || " "
  localStorage.setItem("listaResultados", resultadosComeco);
  localStorage.setItem("listaResultadoComparar", resultadosComecoComparar);
   localStorage.setItem("resultadoCompararSalvo", resultadoCompararSalvo)
}

export function resultadosNaTela() {
  let resultadosNaTela = [];
  let resultadosNaTelaFinal = [];
  resultadosNaTela = localStorage.getItem("listaResultados");
  resultadosNaTelaFinal = resultadosNaTela.split(",") || [];

  if (resultadosNaTelaFinal[0] == 0 || resultadosNaTelaFinal.length < 60) {
    return;
  } else {
    for (let i = 1; i <= 60; i++) {
      document.querySelector(`#resultado-tela--${i}`).textContent =
        resultadosNaTelaFinal[i - 1];
    }
  }
}

export function resultadosNaTelaComparar() {
  let listaSalvarResultados = [];
  let listaRecuperarResultadosFinal = [];
  listaSalvarResultados = localStorage.getItem("listaResultadoComparar");
  let resultadoCompararSalvo = localStorage.getItem("resultadoCompararSalvo")
  //document.querySelector('#resultado_salvo').textContent = resultadoCompararSalvo;
  listaRecuperarResultadosFinal = listaSalvarResultados.split(",") || [];

  if (
    listaRecuperarResultadosFinal[0] == 0 ||
    listaRecuperarResultadosFinal.length < 6
  ) {
    return;
  } else {
    for (let i = 1; i <= 6; i++) {
      document.querySelector(`#resultado-comparar--${i}`).textContent =
        listaRecuperarResultadosFinal[i - 1];
    }

  }
}

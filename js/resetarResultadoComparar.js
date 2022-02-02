import {mensagemCertezaResetarResultados, mensagemNaoPodeResetar } from "./mensagens.js"
import { recuperarResultadoComparar } from "./recuperarResultadoComparar.js"
import { gerarResultado } from "./gerarResultado.js";

export const resetarResultadoComparar = () => {
  const botaoAdicionar60Numeros = document.querySelector(
    "[data-botao-resetar-resultado]"
  );
  botaoAdicionar60Numeros.addEventListener("click", (evento) => {
    evento.preventDefault();

    let confirmarLista = recuperarResultadoComparar()

    if (confirmarLista[0] == 0) {
        mensagemNaoPodeResetar()
      } else{

    const confirmar = mensagemCertezaResetarResultados();
    
    if(confirmar == false) {
      return
    } else if (confirmar == true) {
      let resultadosNaTela = gerarResultado()
      localStorage.setItem("listaResultadoComparar", resultadosNaTela);
    }
    location.reload();
  }});
};

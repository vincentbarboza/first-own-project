import {mensagemCertezaResetarResultados, mensagemNaoPodeResetar } from "./mensagens.js"
import { recuperarResultado } from "./recuperarResultado.js"

export const resetarResultados = () => {
  const botaoAdicionar60Numeros = document.querySelector(
    "[data-botao-resetar-resultados]"
  );
  botaoAdicionar60Numeros.addEventListener("click", (evento) => {
    evento.preventDefault();

    let confirmarLista = recuperarResultado()

    if (confirmarLista[0] == 0) {
        mensagemNaoPodeResetar()
        return
      } else{

    const confirmar = mensagemCertezaResetarResultados();
    
    if(confirmar == false) {
      return
    }else if (confirmar == true) {
      let resultadosNaTela = [0];
      localStorage.setItem("listaResultados", resultadosNaTela);
    }
    location.reload();
  }});
};

import { coletaResultados } from "./coletaResultado.js";
import { mensagemInserir60NumerosNosCampos, mensagemCertezaSalvar, mensagemNumeros1A60 } from "./mensagens.js"

export const botaoSalvarResultados = () => {
  const botaoSalvarResultados = document.querySelector(
    "[data-botao-salvar-resultados]"
  );

  botaoSalvarResultados.addEventListener("click", (evento) => {
    evento.preventDefault();

    let listaSalvarResultados = [];
    listaSalvarResultados = coletaResultados();
    let listaGerarResultadosInedito = listaSalvarResultados.filter(function ( 
      i
    ) {
      return i; 
    });

    if (
      listaGerarResultadosInedito[0] == 0 ||
      listaGerarResultadosInedito.length <= 59
    ) {
      const confirmar = mensagemInserir60NumerosNosCampos();
      return;
    }

    for(let i = 0; i < 60; i++) {
      if(listaGerarResultadosInedito[i] < 1 || listaGerarResultadosInedito[i] > 60) {
        mensagemNumeros1A60()
        return
      }
    }

    const confirmar = mensagemCertezaSalvar();

    if (confirmar == true) {
      for (let i = 1; i <= 60; i++) {
        document.querySelector(`#resultado-tela--${i}`).textContent =
          listaGerarResultadosInedito[i - 1];
      }

      localStorage.setItem("listaResultados", listaGerarResultadosInedito);
    } else {
      return;
    }
    location.reload();
  });
};

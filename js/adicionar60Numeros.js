import { mensagemCertezaSalvarNumeros1A60 } from "./mensagens.js"

export const botaoAdicionar60Numeros = () => {
  const botaoAdicionar60Numeros = document.querySelector(
    "[data-botao-adicionar-60]"
  ); 

  botaoAdicionar60Numeros.addEventListener("click", (evento) => {
    evento.preventDefault();

    const confirmar = mensagemCertezaSalvarNumeros1A60();

    if (confirmar == true) {
      let resultadosNaTela = [];
      for (let i = 1; i <= 60; i++) {
        resultadosNaTela[i - 1] = i;
      }
      localStorage.setItem("listaResultados", resultadosNaTela);
      for (let i = 1; i <= 60; i++) {
        document.querySelector(`#resultado-tela--${i}`).textContent =
          resultadosNaTela[i - 1];
      }
    } else {
      return;
    }
  });
};

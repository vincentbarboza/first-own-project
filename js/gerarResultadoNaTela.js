import { gerarResultado } from "./gerarResultado.js";
import { mensagemSalvar60Numeros } from "./mensagens.js"

export const gerarResultadosNaTela = () => {
  const gerarResultados = document.querySelector(
    "[data-botao-gerar-resultados]"
  );

  gerarResultados.addEventListener("click", (evento) => {
    evento.preventDefault();

    let listaGerarResultado = gerarResultado();

    if (listaGerarResultado[0] == 0) {
      const confirmar = mensagemSalvar60Numeros()
      return;
    } else {
      for (let i = 1; i <= 6; i++) {
        document.querySelector(`#resultado-gerado--${i}`).textContent =
          listaGerarResultado[i - 1];
      }
    }
  });
};

export const recuperarResultado = () => {
  let listaRecuperarResultados = [];
  let listaRecuperarResultadosFinal = [];
  listaRecuperarResultados = localStorage.getItem("listaResultados");
  if (listaRecuperarResultados[0] == 0) {
    return listaRecuperarResultados
  } else {
    listaRecuperarResultadosFinal = listaRecuperarResultados.split(",") || [];

    return listaRecuperarResultadosFinal;
  }
};

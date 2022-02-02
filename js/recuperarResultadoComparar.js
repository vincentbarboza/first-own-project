export const recuperarResultadoComparar = () => {
    let listaRecuperarResultados = [];
    let listaRecuperarResultadosFinal = [];
    listaRecuperarResultados = localStorage.getItem("listaResultadoComparar");
    if (listaRecuperarResultados[0] == 0) {
      listaRecuperarResultadosFinal.push(0);
      return listaRecuperarResultadosFinal;
    } else {
      listaRecuperarResultadosFinal = listaRecuperarResultados.split(",") || [];
  
      return listaRecuperarResultadosFinal;
    }
  };
  
export const coletaResultadosComparar = () => {
    let coletaResultadosComparar = [];
  
    coletaResultadosComparar = localStorage.getItem("listaResultadoComparar");
    let listaRecuperarResultadoCompararFinal =
      coletaResultadosComparar.split(",") || [];
  
    return listaRecuperarResultadoCompararFinal; 
  };
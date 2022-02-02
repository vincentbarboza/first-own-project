// import { recuperarResultado } from "./recuperarResultado.js"
// import { recuperarResultadoComparar } from "./recuperarResultadoComparar.js"
// import { gerarResultado } from "./gerarResultado.js"

// export const funcaoCompararResultado = (numerosIguaisFor, numerosIguaisForId ) => {
//     let listaRecuperarResultadoCompararFinal1 = recuperarResultado()
//     let listaRecuperarResultadoCompararFinal2 = recuperarResultadoComparar()
//     let listaGerarResultado = gerarResultado();
//     let numerosIguais = 0;
//     let tentativas = 0;
//     //let numerosIguaisFor = numerosIguaisFor;
//     let numerosIguaisResultado = 0;
//     //let numerosIguaisForId = numerosIguaisForId


//     if (listaRecuperarResultadoCompararFinal1[0] == 0) {
//       mensagemSalvar60Numeros()
//       return;
//     } else if (listaRecuperarResultadoCompararFinal2[0] == 0) {
//       mensagemInserirResultado6Numeros() ;
//       return;
//     } 

//       for (let i = 0; i <= 59; i++) {
//         for (let x = 0; x <= 5; x++) {
//           if (listaRecuperarResultadoCompararFinal1[i] == listaRecuperarResultadoCompararFinal2[x]
//           ) {
//             numerosIguaisResultado++;
//           }
//         }
//       }

      
//       while (numerosIguais < numerosIguaisFor) {
//         for (let i = 0; i <= 5; i++) {
//           for (let x = 0; x <= 5; x++) {
//             if (listaRecuperarResultadoCompararFinal2[i] == listaGerarResultado[x]) {
//               numerosIguais++;
//             }
//           }
//         }
//         if (numerosIguais < numerosIguaisFor) {
//           numerosIguais = 0;
//         }

//         if (tentativas == 150000) {
//           break;
//         }
//         tentativas++;
      
//       if(numerosIguaisResultado < 4) {
//         document.querySelector(
//           `#tentativas--2`
//         ).textContent = `Nao podemos ganhar com 4, 5 ou 6 pontos`
//         break
//       }

//       document.querySelector(
//         `#tentativas--1`
//       ).textContent = `Podemos acertar ${numerosIguaisResultado} pontos com o resultado salvo!`;

//       if (numerosIguais == 0) {
//         document.querySelector(
//           `#tentativas--${numerosIguaisForId}`
//         ).textContent = `Apos ${tentativas} tentativas, nao conseguimos acertar ${numerosIguaisFor} pontos!`;
//       } else {
//         document.querySelector(
//           `#tentativas--${numerosIguaisForId}`
//         ).textContent = `Foram necessarias ${tentativas} tentativas para acertar ${numerosIguais} pontos!`;
//       }
//     }
// }
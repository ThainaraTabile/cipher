i//mport cipher from './cipher.js';


// function cifrar() {
//   const textoCifrar = document.querySelector("#textoParaCriptografar").value.trim();
//   const offset = document.querySelector("#deslocaCifra").value;
//   const resultado = cipher.encode(textoCifrar, parseInt(offset));
//   document.querySelector("#textoCriptografado").innerText = resultado;
// }
// const inputCifrar = document.querySelector("#cifrar");
// inputCifrar.addEventListener("click", cifrar);

// function textoMaiusculo(event) {
//   const texto = event.target.value
//   event.target.value = texto.toUpperCase();
// }
// document.querySelector("#textoParaCriptografar").addEventListener("input", textoMaiusculo);

// const botaoCopiarC = document.querySelector("#copiarC");
// botaoCopiarC.addEventListener('click', function () {
//   const textAreaC = document.querySelector("#textoCriptografado");
//   textAreaC.select();
//   navigator.clipboard.writeText(textAreaC.value);
// });

function decifrar() {
  const textoCifrado = document.querySelector("#textoParaDescriptografar").value.trim();
  const offset = document.querySelector("#deslocaDecifra").value;
  const traduz = cipher.decode(textoCifrado, parseInt(offset));
  document.querySelector("#textoDescriptografado").innerText = traduz;
}
const inputDecifrar = document.querySelector("#decifrar");
inputDecifrar.addEventListener("click", decifrar);

document.querySelector("#textoParaDescriptografar").addEventListener("input", textoMaiusculo)

const botaoCopiarD = document.querySelector("#copiarD");
botaoCopiarD.addEventListener('click', function () {
  const textAreaD = document.querySelector("#textoDescriptografado");
  textAreaD.select();
  navigator.clipboard.writeText(textAreaD.value);
});

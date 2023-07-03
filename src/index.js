
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

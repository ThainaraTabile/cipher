const cipher = { encode, decode };

function encode(textoCifrar, offset) {
  let mensagem = "";
  if (typeof textoCifrar !== "string" || typeof offset !== "number") {
    throw new TypeError();
  }
  for (let i = 0; i < textoCifrar.length; i++) {
    let charCode = textoCifrar.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // verificar se é letra maiúscula
      charCode = ((charCode - 65 + offset) % 26) + 65;
    }
    mensagem += String.fromCharCode(charCode);
  }
  return mensagem;
}
function decode(textoCifrado, offset) {
  let mensagem = "";
  if (typeof textoCifrado !== "string" || typeof offset !== "number") {
    throw new TypeError();
  }
  for (let i = 0; i < textoCifrado.length; i++) {
    let charCode = textoCifrado.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // verificar se é letra maiúscula
      charCode = ((charCode - 90 - offset) % 26) + 90;
    }
    mensagem += String.fromCharCode(charCode);
  }
  return mensagem;
}


export default cipher;


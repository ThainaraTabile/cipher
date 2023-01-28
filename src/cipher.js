const cipher = { encode, decode };

function encode(textoCifrar, offset) {
  let mensagem = "";
  if (typeof textoCifrar !=="string" || typeof offset !== "number" ) {
    throw new TypeError
  }
  for (let i = 0; i < textoCifrar.length; i++) {
    const executa = ((textoCifrar.charCodeAt(i) - 65 + offset) % 26) + 65;
    console.log(executa)
    mensagem += String.fromCharCode(executa);
  }

  return mensagem;
}
function decode(textoCifrado, offset) {
  let mensagem = "";
  if (typeof textoCifrado !=="string" || typeof offset !== "number" ) {
    throw new TypeError
  }
  for (let i = 0; i < textoCifrado.length; i++) {
    const executa = ((textoCifrado.charCodeAt(i) - 90 - offset) % 26) + 90;
    mensagem += String.fromCharCode(executa);
  }
  return mensagem;
}

export default cipher;


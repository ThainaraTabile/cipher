import cipher from "../../cipher.js";

const descriptografia = () => {
  const container = document.createElement('div');
  const template = `
    <div class="body-descripto">
    <div class="card-pagina">
    <span class="card-barra"><p class="circulo"></p></span>
    <div class="titulo-e-info">
    <h1 class="titulo-cifrar">descriptografia</h1>
    </div>
    <div class".conteudo-cripto">
    <p class="instrucoes">Digite  aqui o texto criptografado:</p>
    <textarea id="texto-para-descriptografar" class="text-area-descripto" name="texto-para-descriptografar"> </textarea>
    <textarea id="texto-descriptografado" class="text-area-descripto"> </textarea>
    
    <p class="instrucoes">Escolha quantas posições você deseja que a cifra desloque e em seguida clique no botão enviar.</p>
    <select class="desloca-cifra-desc" required="required">
  <option value="3">3</option>
  <option value="5">5</option>
  <option value="7">7</option>
</select>
<input type="submit" id="decifrar" class="enviar" />
<input type="button" class="btn-limpar"  value="Limpar" onClick="window.location.reload()">
        <button id="copiarD" class="btn-copiar">Copiar</button>
    </div>
    </div>
      </div>
      
    `;
  container.innerHTML = template;

  function decifrar() {
    const textoCifrado = container.querySelector("#texto-para-descriptografar").value.trim();
    const offset = container.querySelector(".desloca-cifra-desc").value;
    const traduz = cipher.decode(textoCifrado, parseInt(offset));
    container.querySelector("#texto-descriptografado").innerText = traduz;
  }
  const inputDecifrar = container.querySelector("#decifrar");
  inputDecifrar.addEventListener("click", decifrar);

  function textoMaiusculo(event) {
    const texto = event.target.value
    event.target.value = texto.toUpperCase();
  }
  container.querySelector("#texto-para-descriptografar").addEventListener("input", textoMaiusculo)
  
  const botaoCopiarD = container.querySelector("#copiarD");
  botaoCopiarD.addEventListener('click', function () {
    const textAreaD = container.querySelector("#texto-descriptografado");
    textAreaD.select();
    navigator.clipboard.writeText(textAreaD.value);
  });
   

  return container;
};

export default descriptografia;
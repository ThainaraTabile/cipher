import cipher from "../../cipher.js";

const criptografia = () => {
  const container = document.createElement('div');
  const template = `
    <div class="body-cripto">
    <div class="card-pagina">
    <span class="card-barra"><p class="circulo"></p></span>
    <div class="titulo-e-info">
    <h1 class="titulo-cifrar">criptografia</h1>
    </div>
    <div class".conteudo-cripto">
    <p class="instrucoes">Digite  aqui o texto para criptografar:</p>
    <textarea id="textoParaCriptografar" class="text-area" name="textoParaCriptografar"> </textarea>
    <textarea id="texto-criptografado" class="text-area"> </textarea>
    
    <p class="instrucoes">Escolha quantas posições você deseja que a cifra desloque e em seguida clique no botão enviar.</p>
    <select id="#deslocaCifra" class="deslocaCifra" required="required">
  <option value="3">3</option>
  <option value="5">5</option>
  <option value="7">7</option>
</select>
<input type="submit" id="cifrar" class="enviar" />
<input type="button" class="btn-limpar"  value="Limpar" onClick="window.location.reload()">
        <button id="copiarC" class="btn-copiar">Copiar</button>
    </div>
    </div>
      </div>
      
    `;
  container.innerHTML = template;

  function cifrar() {
    const textoCifrar = container.querySelector("#textoParaCriptografar").value.trim();
    const offset = container.querySelector(".deslocaCifra").value;
    const resultado = cipher.encode(textoCifrar, parseInt(offset));
    container.querySelector("#texto-criptografado").innerText = resultado;
  }
  const inputCifrar = container.querySelector("#cifrar");
  inputCifrar.addEventListener("click", cifrar);
  
  function textoMaiusculo(event) {
    const texto = event.target.value
    event.target.value = texto.toUpperCase();
  }
  container.querySelector("#textoParaCriptografar").addEventListener("input", textoMaiusculo);
  
  const botaoCopiarC = container.querySelector("#copiarC");
  botaoCopiarC.addEventListener('click', function () {
    const textAreaC = container.querySelector("#texto-criptografado");
    textAreaC.select();
    navigator.clipboard.writeText(textAreaC.value);
  });

  return container;
};

export default criptografia;
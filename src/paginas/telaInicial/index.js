
const telaInicial = () => {
  const container = document.createElement('div');
  const template = `
  <div class="body-inicial">
  <div class="card-pagina">
  <span class="card-barra"><p class="circulo"></p></span>
  <div class="titulo-e-info">
  <h1 class="titulo-cifra">cifra de césar</h1>
  <p class="infos">Utilize a criptografia e descriptografia de mensagens sempre que precisar enviar ou receber informações sensíveis, como senhas, números de cartão de crédito ou outros dados confidenciais.
  <br>  <br>
  A criptografia garante que apenas o destinatário correto possa ler a mensagem, enquanto a descriptografia permite que você a decifre com segurança. 
  <br> <br>
  Isso é especialmente importante em ambientes online, onde a segurança das informações pode ser comprometida.</p>
    </div>
  </div>
  <div class="div-opcoes">
  <h2> Selecione uma das opções abaixo.</h2>
   <p class="cripto"><i class="fa-solid fa-lock fa-2x" id="cadeado-fechado"></i>  criptografia</p> <p class="descripto"><i class="fa-solid fa-lock-open fa-2x" id="cadeado-aberto"></i>  descriptografia</p>
    </div>
    </div>
    
  `;
  container.innerHTML = template;

  const btnCripto = container.querySelector(".cripto");
  btnCripto.addEventListener('click', () => 
  window.location.hash='#criptografia'
  );
  const btnDescripto = container.querySelector(".descripto");
  btnDescripto.addEventListener('click', () => 
  window.location.hash='#descriptografia'
  );
  return container;
};

export default telaInicial;

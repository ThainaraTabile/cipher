import criptografia from './paginas/criptografia/index.js';
import descriptografia from './paginas/descriptografia/index.js';
import telaInicial from './paginas/telaInicial/index.js';

const main = document.querySelector('#root');

const init = () => {
  switch (window.location.hash) {
    case '':
      main.appendChild(telaInicial());
      break;
    case '#criptografia':
      main.appendChild(criptografia());
      break;
    case '#descriptografia':
      main.appendChild(descriptografia());
      break;
    default:
      main.appendChild(telaInicial());
      break;
  }
};

window.addEventListener('hashchange', init);
window.addEventListener('load', init);

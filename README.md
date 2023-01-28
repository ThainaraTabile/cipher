# Cifra de César

## Índice

- [Cifra de César](#cifra-de-césar)
  - [Índice](#índice)
  - [1. Prefácio](#1-prefácio)
  - [2. Sobre o projeto](#2-sobre-o-projeto)
  - [3. Interface com o usuário](#3-interface-com-o-usuário)
  - [4. Considerações técnicas](#4-considerações-técnicas)
    - [Instalar dependências](#instalar-dependências)
    - [Executar a aplicação](#executar-a-aplicação)
    - [Executar Testes](#executar-testes)

***

## 1. Prefácio

Primeira aplicação web desenvolvida junto ao bootcamp da Laboratória.
O objetivo do projeto foi disponibilizar uma ferramenta para o usuário cifrar e decifrar um texto no navegador, indicando um deslocamento específico de caracteres (offset), tudo isso utilizando HTML, CSS e JavaScript.

A cifra de César é um dos primeiros tipos de criptografias conhecidas na história. O imperador romano Júlio César utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha, deslocando as letras do alfabeto e substituindo cada letra pela outra deslocada.

Utilizando a representação do alfabeto é possível fazer a substituição baseando-se em texto puro na primeira sequência do alfabeto e tendo como saída o valor cifrado.
A título exemplificativo, vamos realizar a cifragem da palavra "CAJU". Substituindo a palavra em texto puro, com deslocamento (offset) para cada letra 3 casas, o texto cifrado seria FDMX.



## 2. Sobre o projeto

O site foi desenvolvido prezando pela segurança de seus usuários e com objetivo de proteger determinada informação inserida pelos mesmos, transformando sua forma original para outra que seja ilegível para partes não autorizadas.

O site disponibiliza funções de criptografia e descriptografia de textos, em cada uma das funções o usuário pode escolher o deslocamento (offset) das letras. 

Assim, permite que após o processo de criptografia, os usuários possam compartilhar  informações confidenciais através da internet, como senhas e outros dados sensíveis.



## 3. Interface com o usuário


O processo de criação teve como objetivo principal ofertar ao usuário uma experiência intuitiva, segura e prática.

Visualmente as cores e elementos da interface remetem à tecnologia e segurança da informação, transmitindo ao usuário a sensação de realmente estar vivendo uma experiência segura.

* **A interface permite ao usuário:**
  - Eleger um número offset (chave secreta) indicando quantas posições de deslocamento de caracteres quer que a cifra utilize.
  - Inserir uma mensagem (texto e  números) para ser cifrada ou decifrada.
  - A mensagem usa um alfabeto simplificado (apenas letras maiúsculas), quando o usuário insere o texto automaticamente as letras são convertidas para caixa alta.
  - Visualizar o resultado da mensagem cifrada ou decifrada.
  - Copiar e apagar o texto cifrado ou decifrado.


## 4. Considerações técnicas
Para que a interface permita ao usuário criptografar e descriptografar sua mensagem, foram utilizados os métodos cipher (encode e decode), o código das letras para o deslocamento segue a Tabela ASCII e possui a seguinte formula: 
`((código1Letra + deslocalmento) % tamDoAlfabeto) + codigo1Letra.`

A lógica do projeto foi implementada inteiramente em JavaScript vailla, sem o uso de  bibliotecas ou frameworks.

Os testes unitários cobriram 100% dos _statements_, _functions_
e _lines_ e _branches_. 

### Instalar dependências
```
$ npm i
```

### Executar a aplicação
```
$ npm run start
```

### Executar Testes
```
$ npm run test
```

---
title: Active
localeTitle: Ativo
---
## Ativo

O seletor CSS: active altera o estilo de um elemento HTML quando um usuário ativa o elemento. Esse seletor geralmente fornece a confirmação do usuário de que eles clicaram em um elemento. O: seletor ativo é mais comumente usado nos elementos `<a>` e `<button>` , mas pode ser usado em todos os elementos.

Se vários pseudo seletores CSS estiverem sendo usados, o: seletor ativo deve vir após o seletor: hover.

No exemplo abaixo, quando um usuário clica em um link, a cor do texto muda de preto para vermelho até que a ação de clique seja interrompida.

```css
a { 
  color: black; 
 } 
 
 a:active { 
  color: red; 
 } 
```

#### Mais Informações:

*   [Documento Web do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
*   [Escolas W3](https://www.w3schools.com/cssref/sel_active.asp)
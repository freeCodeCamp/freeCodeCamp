---
title: CSS Display
localeTitle: Exibição CSS
---
## Exibição CSS

A propriedade display especifica o tipo de caixa usado para um elemento HTML. Tem 20 valores possíveis de palavras-chave. Os mais usados ​​são:

```css
    .none             {display: none} 
    .block            {display: block} 
    .inline-block     {display: inline-block} 
    .inline           {display: inline} 
    .flex             {display: flex} 
    .inline-flex      {display: inline-flex} 
    .inline-table     {display: inline-table} 
    .table            {display: table} 
    .inherit          {display: inherit} 
    .initial          {display: initial} 
```

A `display:none` propriedade pode ser útil ao tornar um site responsivo. Por exemplo, talvez você queira ocultar um elemento em uma página à medida que o tamanho da tela diminui para compensar a falta de espaço. `display: none` não apenas ocultará o elemento, mas todos os outros elementos na página se comportarão como se esse elemento não existisse. Essa é a maior diferença entre essa propriedade e a `visibility: hidden` property, que oculta o elemento, mas mantém todos os outros elementos da página no mesmo lugar em que apareceriam se o elemento oculto estivesse visível.

Esses valores de palavras-chave são agrupados em seis categorias:

*   `<display-inside>`
*   `<display-outside>`
*   `<display-listitem>`
*   `<display-box>`
*   `<display-internal>`
*   `<display-legacy>`

### Mais Informações:

*   [MDN - display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
*   [caniuse - Suporte do Navegador](http://caniuse.com/#search=display)
*   [CSS-Tricks - Um Guia Completo para o Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
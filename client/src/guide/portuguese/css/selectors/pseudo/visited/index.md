---
title: Visited
localeTitle: Visitou
---
## Visitado

O seletor CSS: visited altera o estilo de um link que foi visitado por um usuário. Esse seletor é usado para ajudar os usuários a distinguir entre os links que eles têm e os que não visitaram.

Se vários pseudo seletores CSS estiverem sendo usados, o seletor: visited deve vir após o seletor de link:.

No exemplo abaixo, depois que um usuário clica em um link, a cor do texto muda de preto para verde.

```css
 a { 
   color: black; 
 } 
 
 a:visited { 
   color: green; 
 } 
```

Devido a razões de privacidade do usuário, o seletor: visited está limitado a modificar os estilos das seguintes propriedades CSS:

*   cor
*   cor de fundo
*   border-color (incluindo cor de borda para lados separados)
*   coluna-regra-cor
*   cor de contorno
*   preenchimento e traço (para imagens SVG)

#### Mais Informações:

*   [Documento Web do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
*   [Escolas W3](https://www.w3schools.com/cssref/sel_visited.asp)
*   [Guia de truques CSS para pseudo classes e elementos](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/#visited)
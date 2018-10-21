---
title: Background Property
localeTitle: Propriedade de plano de fundo
---
## Propriedade de plano de fundo

A propriedade background do CSS permite declarar todas as oito propriedades de background de uma só vez usando esta declaração curta 1 .

A propriedade background é especificada como uma ou mais camadas de plano de fundo, separadas por vírgulas para as seguintes propriedades 2 :

*   cor de fundo
*   imagem de fundo
*   posição de fundo
*   tamanho de fundo
*   fundo de repetição
*   origem de fundo
*   clipe de fundo
*   fundo de ligação

Sintaxe 1 :

```css
body { 
  /* Using a <background-color> */ 
  background: green; 
 } 
 
 .error { 
  /* Using a <bg-image> and <repeat-style> */ 
  background: url("test.jpg") repeat-y; 
 } 
 
 header { 
  /* Using a <box> and <background-color> */ 
  background: border-box red; 
 } 
 
 .topbanner { 
  /* A single image, centered and scaled */ 
  background: no-repeat center/80% url("../img/image.png"); 
 } 
```

### Fontes

1.  [Visite a página de fundo do MDN para mais informações.](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2.  [Visite a página de propriedades de plano de fundo de CSS do W3School para obter mais informações.](https://www.w3schools.com/cssref/css3_pr_background.asp)
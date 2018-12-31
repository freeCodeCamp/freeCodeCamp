---
title: Background Size
localeTitle: Tamanho do plano de fundo
---
## Tamanho do plano de fundo

A propriedade background-size especifica o tamanho das imagens de fundo. Você pode definir um comprimento ou uma porcentagem, com o primeiro valor sendo a largura e o segundo sendo a altura. Você também pode usar um dos cinco valores de palavras-chave:

```css
.auto {background-size: auto;} 
 .cover {background-size: cover;} 
 .contain {background-size: contain;} 
 .initial {background-size: initial;} 
 .inherit {background-size: inherit;} 
 /* Percentage and pixel can also be used */ 
 .pixel {background-size: 50px 50px;} 
 .percentage {background-size: 50% 50%;} 
```

Para definir essa propriedade em várias imagens de plano de fundo, separe os valores por vírgula:

```css
.multiple { 
    background-image: url(1.png), url(2.png); 
    background-size: 3px 3px, cover; 
 } 
```

#### Mais Informações:

Documentação: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

Truques CSS: [tamanho de fundo](https://css-tricks.com/almanac/properties/b/background-size/)

Suporte ao Navegador: [caniuse](http://caniuse.com/#search=background-size)
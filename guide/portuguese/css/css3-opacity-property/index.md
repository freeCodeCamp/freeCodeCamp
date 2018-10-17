---
title: CSS3 Opacity Property
localeTitle: Propriedade de Opacidade CSS3
---
## Propriedade de Opacidade CSS3

`opacity` permite controlar a transparência de um elemento em uma escala de `0` a `1` .

Se você definir a propriedade de um elemento como `0` , será transparente. Se você definir para `1` , será opaco.

Definindo um elemento para `opacity: 0;` não o remove da página. O elemento ainda será clicável e afetará o fluxo do conteúdo da página.

```css
.transparent { 
    opacity: 0; 
 } 
 
 .verySeeThrough { 
    opacity: 0.3; 
 } 
 
 .slightlySeeThrough { 
    opacity: 0.7; 
 } 
 
 .opaque { 
    opacity: 1; 
 } 
```

[Este exemplo simples](https://jsfiddle.net/1ogmxaf8/1/) mostra como você pode usar a opacidade com um efeito de foco.

#### Mais Informações:

*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
*   [Almanaque CSS Truques](https://css-tricks.com/almanac/properties/o/opacity/)